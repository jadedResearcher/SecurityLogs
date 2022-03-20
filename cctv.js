const testCanvas = (canvas)=>{
  const context = canvas.getContext("2d");
  context.fillStyle="red";
  context.fillRect(0,0,canvas.width,canvas.height);
}


class CCTV {
  //camera feed handles most of what we care about
  constructor(cameraFeed, outputCanvas) {
      this.cameraFeed = cameraFeed;
      this.outputCanvas = outputCanvas;
      this.readyToPlay = false;
  }

  stop = () => {
      this.playing = false;
  }

  setReadyToPlay = (bool)=>{
    this.readyToPlay = bool;
  }

  //takes in a timecode to display as "base"; (not related to play time)
  play = (timecode) => {
      this.playing = true;
      this.oneCCTVFrame(timecode);
  }


  //autopanning based on time code? back and forth?
  oneCCTVFrame = (timecode) => {
      if (!this.playing) {
          return;
      }
      //simulate video glitches
      const frame = this.cameraFeed.current_frame;
      if(timecode){
        this.cameraFeed.timecode = timecode;
      }
      const outputCanvas = this.outputCanvas;
      let hacked_frame = frame;
      if (frame % 30 === 0 || frame % 32 === 0 || frame % 55 === 0 || frame % 111 === 0 || frame % 113 === 0 || frame % 115 === 0) {
          hacked_frame = frame - getRandomNumberBetween(1, 30);
      }
      const buffer = document.createElement("canvas");
      buffer.width = outputCanvas.width;
      buffer.height = outputCanvas.height;
      const context = buffer.getContext("2d");
      if (!context) {
          console.error("how is there not a context");
          return;
      }

      //every other pan change direciton
      //so in addition to source image we want to have a canvas we can render figures onto
      //because the figures need to be placed relative to the IMAGE and undernath the effects
      //(if i try to place it on the 480x480 shitty ctv they won't be in the right spot)
      this.drawInLocation(hacked_frame, context);


      const fontSize = 25;
      const padding = 15 + fontSize;

      context.fillStyle = "white";
      context.font = `${fontSize}px serif`;
      const time = getTimeString(new Date(this.cameraFeed.timecode*100));

      this.cctv_effect(buffer, hacked_frame);
      context.fillText(time, buffer.width - 100, padding);
      context.fillText(`${this.cameraFeed.index}`, padding, padding);

      const outputContext = outputCanvas.getContext("2d");
      outputContext?.drawImage(buffer, 0, 0);
      setTimeout(() => {
          window.requestAnimationFrame(() => { this.oneCCTVFrame() })
      }, 100)
  }

  getCurrentImage = (hacked_frame) => {
      let image = this.cameraFeed.newFrame(hacked_frame);
      return image;
  }


  drawInLocation = (hacked_frame, context) => {
      let image = this.getCurrentImage(hacked_frame);
      const speed = 5;
      let sourceImage = image;
      const width = sourceImage.width;
      const height = sourceImage.height;


      if (width > height) {
          let max = width - speed;
          let location = (this.cameraFeed.current_frame * speed) % max;

          if (location > width / 2 || location < 0) {
              location = width - (hacked_frame * speed) % max;;
          }
          context.drawImage(image, -1 * location, 0);
      } else {
          let max = height - speed;
          let location = (hacked_frame * speed) % max;

          if (location > height / 2 || location < 0) {
              location = height - (hacked_frame * speed) % max;;
          }
          context.drawImage(image, 0, -1 * location);
      }
  }



  //lines of horizontal static that move up the screen., occasional glitches
  //bigger ones that move down
  cctv_effect = (canvas, timecode) => {
      const context = canvas.getContext("2d");
      if (!context) {
          console.error("it should not be possible to not have a context");
          return;
      }
      const width = canvas.width;
      const height = canvas.height;

      let image_data = context.getImageData(0, 0, canvas.width, canvas.height);
      const random_num = getRandomNumberBetween(0, width);
      const random_num2 = getRandomNumberBetween(0, height);

      const offset = timecode % height;
      let d = image_data.data;
      const time = (timecode % 100) / 100; //once a second
      for (let y = 0; y < height; y++) {
          for (var x = 0; x < width; x++) {
              var i = ((y * height) + x) * 4;

              // barred static or high contrast black and white
              if (staticHash(x * random_num, y * random_num2) > 190 && isStaticSpot(y, height, time, 3)) {
                  const value = staticHash(x + offset, y + offset);
                  d[i] = value;
                  d[i + 1] = value;
                  d[i + 2] = value;
              } else {//https://stackoverflow.com/questions/10521978/html5-canvas-image-contrast
                  const r = d[i];
                  const g = d[i + 1];
                  const b = d[i + 2];
                  let v = Math.max(Math.max(r, g), b);
                  //higher the percent the more contrasty it is
                  let contrast = (50 / 100) + 1;  //convert to decimal & shift range: [0..2]
                  var intercept = 128 * (1 - contrast);
                  d[i] = d[i + 1] = d[i + 2] = v * contrast + intercept;;
              }

              //random static
              if (staticHash(y * random_num, x * random_num2) > 253) {
                  const ratio = random_num2 / 255;
                  if (ratio > 0.5) {
                      d[i] = 255 - Math.floor(d[i] * ratio);
                      d[i + 1] = 255 - Math.floor(d[i] * ratio);
                      d[i + 2] = 255 - Math.floor(d[i] * ratio);
                  } else {
                      const value = staticHash(x + offset, y + offset);
                      d[i] = value;
                      d[i + 1] = 255 - value;
                      d[i + 2] = value;
                  }
              }

              //scan lines
              if (y % 5 < 1) {
                  d[i] = 0;
                  d[i + 1] = 0;
                  d[i + 2] = 0;
              }
          }

      }
      context.putImageData(image_data, 0, 0);

  }
}



class CameraFeed{
  index = 0; //is this the first image in a set? last? just for labeling
  current_frame = 0;
  timecode = 0;

  constructor(index, frames){
      this.index = index;
      this.frames = frames;

  }

  //how many frames before we repeat?
  loopLength = ()=>{
      return this.frames.reduce((a, b) => a + b.durationInFrames, 0);
  }

  newFrame = (hacked_frame)=>{
      this.current_frame ++;
      this.timecode ++;
      const current_location  = hacked_frame % this.loopLength();
      let index = 0;
      //if i go in order, the first frame i find that i have no yet passed is what i return;
      for(let frame of this.frames){
          index += frame.durationInFrames;
          if(current_location < index){
              return frame.image;
          }
      }
      //shouldn't get here but this fixes weird bugs and if its glitchy thats part of the charm
      return this.frames[0].image;
  }

}

class AnimationFrame{
  constructor(image, durationInFrames){
      this.image = image;
      this.durationInFrames = durationInFrames;
  }
}



const staticHash = (x, y) => {
  let hash = 31;
  hash = ((hash + x) << 13) - (hash + x);
  hash = ((hash + y) << 13) - (hash + y);
  return Math.abs(hash % 255);
}


const isStaticSpot = (y, height, time_percent, band_width) => {
  const first = -Math.floor(height / 3 - height * time_percent);
  const second = -Math.floor(2 * height / 3 - height * time_percent);
  const third = -Math.floor(height / 4 - height * time_percent);
  const fourth = Math.floor(0 - height * time_percent)
  const fifth = Math.floor(height - height * time_percent)

  const all = [first, fourth, second, fifth, third];
  for (let i = 0; i < all.length; i++) {
      const item = all[i];
      if (Math.abs(item - y) < band_width * i) {
          return true;
      }
  }

  return false;

}

