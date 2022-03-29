const setupScreensFact = async () => {
    const button = document.querySelector("#log-button");
    const buttonBar = document.querySelector("#button-bar");

    const canvas = document.querySelector("#canvas");
    display_screen = new CCTV(null, canvas);
    const one = await jr1(canvas, buttonBar);
    button.innerHTML = "Click To Log In";

    cameras.push(one);

    const two = await jr2(canvas, buttonBar);
    cameras.push(two);

    const three = await jr3(canvas, buttonBar);
    cameras.push(three);

    const four = await jr4(canvas, buttonBar);
    cameras.push(four);

    const five = await jr5(canvas, buttonBar);
    cameras.push(five);
  }

  const jr1 = async (canvas, buttonBar) => {
    const lines = [
      "I found these images at https://www.abandonedfl.com/miracle-city-mall/",
      "And yeah, like. They seem p on brand for me? Weird creepy abandoned places?",
      "Something right out of the North's rabbit hole, right?",
      "Except...",
      "They're more Truth to them than that.",
      "They're...mine? In a way the other half of this page isn't.",
      "These are the pictures of my childhood mall.",
      "I can remember how they smell. I can remember how big everything felt when I was so little.",
      "And. Wow. Does it feel weird seeing it in ruins like this?",
      "Makes me contemplatative...",
      "You can find more images of it in the directory.",
      "But these are the ones I feel the most about."
    ];
    const cctv = await setUpCCTV(canvas, "Facts/images/jewlery.jpg")
    const button = document.createElement("button");
    button.innerHTML = "Mall";
    button.onclick = () => { play(0) };
    buttonBar.append(button);
    return { lines, cctv }
  }

  const jr2 = async (canvas, buttonBar) => {
    const lines = [
      "God. I think this used to be an Orange Julius? There were all these fake oranges in the glass at the front.",
      "I was too small to see over the counter so mostly I just saw the oranges.",
      "It was just Dave's Hotdog stand as long as I knew.",
      "The hotdogs were okay. Like. 6/10 maybe.",
      "My family was from Pennsylvania, so our hotdog standards were p high.",
      "Skinless hotdogs were always so weird to me.",
      "But yeah, my biggest memories of this is mom taking us there after running a bunch of errands.",
      "And I remember feeling so brave and Adult because one time I ordered a Chili Dog, instead of a plain one, just like Sonic the Hedgehog.",
      "Every time I eat one even now I think of that day.",
    ];
    const cctv = await setUpCCTV(canvas, "Facts/images/daveshotdogstandbig.jpg")
    const button = document.createElement("button");
    button.innerHTML = "Dave's Hotdog Stand";
    button.onclick = () => { play(1) };
    buttonBar.append(button);
    return { lines, cctv }
  }

  const jr3 = async (canvas, buttonBar) => {
    const lines = [
      "I bet I could use references to this for the Closer?",
      "I don't remember this specific customer service desk.",
      "Maybe it changed in the years since I moved away?",
      "But I do remember that customer service desks in general were For Adults.",
      "They were too Tall and Important and really the only reason I would ever have to approach them is if I were lost.",
      "And I only ever remember being lost once, when I was like, 3 or 4.",
      "I was in a grocery store and there were these mascots dressed like Teddy Grahams and I cried and cried.",
      "I was so scared of the mascots. Because I couldn't see their facial expressions... I didn't know what they were thinking.",
      "Blank faced giant Things trying to drag me out from under the shopping cart where I'd wedged myself, wailing. Seeing their faces loom closer and closer through the metal wire.",
      "Still don't feel all that comfortable around mannequins or mascots or what have you.",
      "Probably says something that one of my avatars core defining traits is the whole lack of a face thing.",
    ];
    const cctv = await setUpCCTV(canvas, "Facts/images/customerservice.jpg")
    const button = document.createElement("button");
    button.innerHTML = "Customer Service";
    button.onclick = () => { play(2) };
    buttonBar.append(button);
    return { lines, cctv }
  }


  const jr4 = async (canvas, buttonBar) => {
    const lines = [
        "When I was maybe 12, my Dad took my brother and me to the mall without my baby sister or my Mom.",
        "This all by itself was an Event. Dad was always busy unless Mom was dragging him places.",
        "AND it was at NIGHT which we NEVER got to go anywhere at night.",
        "So I was already lost in the heady novelty of it all.",
        "And THEN it turned out we were there to play POKEMON CARDS!",
        "There was this weekly thing (Wednesdays, maybe? I'll make sure this version of the logs shows up on Wednesdays) where kids could play pokemon cards against 'gym leaders' and earn little enamel badges.",
        "It was SO COOL.",
        "Especially because before I'd really only had my brother to play with and he wasn't all that good, being three years younger than me and not all that smart.",
        "I still have my badges somewhere. And my cards, of course.",
        "But the BEST part was the Hallmark store would get imported cards from Japan each week. ",
        "And Dad would buy us each a pack.",
        "We couldn't read what the cards did.",
        "But we got to see the new pokemon that were going to be in Gold and Silver months before the games actually came out.",
        "And I got a holographic Bellossom I traded some kid for. All he wanted was my Skarmory, which was worth 'more' because it was the new Steal type. Even though it wasn't holographic.",
        "Vileplume was already one of my favorites and I thought it was so COOL the oddish line was going to get an alternate path.",
        "The absolute sheer WONDER in getting to experience the second pokemon generation in the wake of the first.",
        "You take these things for granted, these days but... Back then the idea that there could be MORE than 151 pokemon was... Mind boggling.",
        "The idea that a pokemon could evolve ONE way in one situation and another in another was. Hype af tbh.",
        "It's a cherished memory I have. And now its yours, as well."
    ];
    const cctv = await setUpCCTV(canvas, "Facts/images/mall.jpg")
    const button = document.createElement("button");
    button.innerHTML = "Pokemon";
    button.onclick = () => { play(3) };
    buttonBar.append(button);
    return { lines, cctv }
}

    const jr5 = async (canvas, buttonBar) => {
        const lines = [
            "See?",
            "I couldn't find my badges but...",
            "Really cool, huh?"
        ];
    const cctv = await setUpCCTV(canvas, "Facts/images/pokemon2.png")
    const button = document.createElement("button");
    button.innerHTML = "Pokemon2";
    button.onclick = () => { play(4) };
    buttonBar.append(button);
    return { lines, cctv }
  }
