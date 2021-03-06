const setupScreensFiction = async () => {
    const button = document.querySelector("#log-button");
    const buttonBar = document.querySelector("#button-bar");

    const canvas = document.querySelector("#canvas");
    display_screen = new CCTV(null, canvas);
    const one = await screen1(canvas, buttonBar);
    button.innerHTML = "Click To Log In";

    cameras.push(one);

    const two = await screen2(canvas, buttonBar);
    cameras.push(two);

    const three = await screen3(canvas, buttonBar);
    cameras.push(three);

    const four = await screen4(canvas, buttonBar);
    cameras.push(four);

    const five = await screen5(canvas, buttonBar);
    cameras.push(five);

    const six = await screen6(canvas, buttonBar);
    cameras.push(six);

    const seven = await screen7(canvas, buttonBar);
    cameras.push(seven);

    const eight = await screen8(canvas, buttonBar);
    cameras.push(eight);

    const nine = await screen9(canvas, buttonBar);
    cameras.push(nine);
  }

  const screen1 = async (canvas, buttonBar) => {
    const lines = [
      "[BEGIN LOG: December 14th, 2008]",
      "21:55: DAY SHIFT HERE. BEEN TOLD MOST OF THE PREVIOUS SEC TEAM GOT LET GO. NOT SURE WHY. THEY ONLY JUST GOT THE LOGS AND FEEDS UP AND RUNNING A FEW MINUTES AGO. I WON'T HAVE TIME TO REVIEW THEM BEFORE THE SHIFT CHANGE. GOOD LUCK. OVER.",
      "P.S. DON'T FORGET TO HAVE YOUR TEAM CHECK ALL CAMERA FEEDS. DON'T SCREW THIS UP.  GUESTS OR NOT WE HAVE A JOB TO DO.",
      "[BEGIN LOG: December 8th, 2008]",
      "[TIMECODE: 08:03.] DISTURBANCE. MINOR SCUFFLING BETWEEN GUESTS A4 and U2 CHECKING OUT. STAFF DISPATCHED.",
      "[TIMECODE: 08:14.] ALL CLEAR.",
      "[TIMECODE: 10:21.] DISTURBANCE. GUEST H1 COMPLAINT REGARDING SERVICE. NO SECURITY ACTION REQUIRED. ALL CLEAR.",
      "[TIMECODE: 13:01.]  LUNCH BREAK. MAC TAKING OVER FOR ME.",
      "[TIMECODE: 13:29]  RETURN. NO MAJOR DISTURBANCES REPORTED. RESUMING OBSERVATIONS.",
      "[TIMECODE:14:57] DISTURBANCE.  MULTIPLE GUEST RESERVATIONS NOT FOUND. LARGE AMOUNT OF GUESTS WAITING TO CHECK IN WERE VISIBLY UPSET.  STAFF DISPATCHED.",
      "[TIMECODE:15:24]. ALL CLEAR.",
      "[TIMECODE:17:42] DISTURBANCE. GUEST V3 SLIPPED ON WET FLOOR. NO SECURITY ACTION REQUIRED. ALL CLEAR.",
      "[TIMECODE: 19:23] LAST SCHEDULED GUEST (G1) CHECKED IN. LOCKDOWN PROCEDURES INITIATED.",
      "[TIMECODE: 22:15.] DISTURBANCE. MASS POWER OUTAGE. STAFF DISPATCHED.",
    ];
    const cctv = await setUpCCTV(canvas, "Fiction/images/lobby.PNG")
    const button = document.createElement("button");
    button.innerHTML = "LOBBY";
    button.onclick = () => { play(0) };
    buttonBar.append(button);
    return { lines, cctv }
  }

  const screen2 = async (canvas, buttonBar) => {
    const lines = [
      "[TIMECODE: 07:00.][AUTOMATED GUEST HOURLY COUNT]: 1 ",
      "[TIMECODE: 08:00.][AUTOMATED GUEST HOURLY COUNT]: 2 ",
      "[TIMECODE: 08:00.][AUTOMATED GUEST HOURLY COUNT]: 1",
      "[TIMECODE: 09:00.][AUTOMATED GUEST HOURLY COUNT]: 13",
      "[TIMECODE: 10:00.][AUTOMATED GUEST HOURLY COUNT]: 85",
      "[TIMECODE: 11:00.][AUTOMATED GUEST HOURLY COUNT]: 1",
      "[TIMECODE: 12:00.][AUTOMATED GUEST HOURLY COUNT]: 0",
      "[TIMECODE: 13:00.][AUTOMATED GUEST HOURLY COUNT]: 0",
      "[TIMECODE: 14:00.][AUTOMATED GUEST HOURLY COUNT]: 5",
      "[TIMECODE: 15:00.][AUTOMATED GUEST HOURLY COUNT]: 57",
      "[TIMECODE: 16:00.][AUTOMATED GUEST HOURLY COUNT]: 10",
      "[TIMECODE: 17:00.][AUTOMATED GUEST HOURLY COUNT]: 2",
      "[TIMECODE: 18:00.][AUTOMATED GUEST HOURLY COUNT]: 11",
      "[TIMECODE: 19:00.][AUTOMATED GUEST HOURLY COUNT]: 0",
      "[TIMECODE: 20:00.][AUTOMATED GUEST HOURLY COUNT]: 0",
      "[TIMECODE: 21:00.][AUTOMATED GUEST HOURLY COUNT]: 0",
      "[TIMECODE: 22:00.][AUTOMATED GUEST HOURLY COUNT]: 113",
      "[TIMECODE: 23:00.][AUTOMATED GUEST HOURLY COUNT]: 0",
      "[SYSTEM SHUTOFF]",
    ];
    const cctv = await setUpCCTV(canvas, "Fiction/images/entrance.jpg")
    const button = document.createElement("button");
    button.innerHTML = "ENTRANCE";
    button.onclick = () => { play(1) };
    buttonBar.append(button);
    return { lines, cctv }
  }

  const screen3 = async (canvas, buttonBar) => {
    //guests are not supposed to want the sun or the outside world anymore
    const lines = [
      "[BEGIN LOG: December 14th, 2008]",
      "[TIMECODE: 08:15]: Guest 4A exhibiting BEHAVIOR 7. File indicates this is not the first time.",
      "[TIMECODE: 08:23]: Guest 4A leaves. File updated to increase discouragement protocols.",
      "[TIMECODE: 12:04]: Staff Lunch shifts begins. LOCKDOWN Protocol Initiated.",
      "[TIMECODE: 13:45]: Staff Lunch shifts ends. LOCKDOWN Protocol revoked.",
      "[TIMECODE: 22:41]: WARNING: UNKNOWN GUEST DETECTED. ",
      "[TIMECODE: 22:42]: WARNING: COMPANY PROPERTY DAMAGED.",
      "[TIMECODE: 22:43]: WARNING: GUEST ESCAPED.",
    ];
    const cctv = await setUpCCTV(canvas, "Fiction/images/garden.jpg")
    const button = document.createElement("button");
    button.innerHTML = "GARDEN";
    button.onclick = () => { play(2) };
    buttonBar.append(button);
    return { lines, cctv }
  }

  
  const screen4 = async (canvas, buttonBar) => {
    const lines = [
      "[BEGIN LOG: December 14th, 2008]",
      "[TIMECODE: 07:04]: Guest Z1 is violently refusing to eat supplements. File updated to reflect a later check out date. Security alerted.",
      "[TIMECODE: 07:17]: Security alert canceled. Contraband phone confiscated.",
      "[TIMECODE: 10:01]: Breakfast Report: 91% compliance rating at nutritional supplements. Guests are increasingly accepting supplements as 'luxury'. Success reported to Management.",
      "[TIMECODE: 14:01]: Lunch Report:  85% compliance rating at nutritional supplements. Noncompliant guest reactions range from disgust to amusement. ",
      "[TIMECODE: 16:04]: Guest W4 making funny faces at the camera. Note for dayshift to reposition camera. ",
      "[TIMECODE: 20:01]: Dinner Report: 19% compliance rating at nutritional supplements. 'Blue Shrimp' marked as failure.",
      "[TIMECODE: 22:05]:  Staff attempted to remove costume during working hours in view of guests.  Disciplinary action noted in file for the entire night shift.",
      "[TIMECODE: 22:15]: Power failure. Security alerted.",
    ];
    const cctv = await setUpCCTV(canvas, "Fiction/images/cafe.jpg")
    const button = document.createElement("button");
    button.innerHTML = "CAFE";
    button.onclick = () => { play(3) };
    buttonBar.append(button);
    return { lines, cctv }
  }

  const screen5 = async (canvas, buttonBar) => {
    const lines = [
      "[BEGIN LOG: December 14th, 2008]",
      "[TIMECODE: 12:04]: Guest V2 has left room for the first time during their stay. Staff dispatched.",
      "[TIMECODE: 15:21]:  Guest V2 has vomited. Staff dispatched.",
      "[TIMECODE: 22:10]:  Unauthorized staff entry to Maintenance Closet B. Disciplinary action filed for all night shift Staff.",
      "[TIMECODE: 22:15]: Power failure. Staff dispatched.",
      "[TIMECODE: 22:20]: Uh. HQ. Please advise?  That staff member who went in the closet has...come out...and... entered the walls? Through a vent? HQ? There was no vent there previously. What the hell is going on?"
    ];
    const cctv = await setUpCCTV(canvas, "Fiction/images/hallway1.jpg")
    const button = document.createElement("button");
    button.innerHTML = "HALLWAY";
    button.onclick = () => { play(4) };
    buttonBar.append(button);
    return { lines, cctv }
  }

  const screen6 = async (canvas, buttonBar) => {
    const lines = [
      "[BEGIN LOG: December 14th, 2008]",
      "[TIMECODE: 15:29]:  Staff retrieval of cleaning supplies.",
      "[TIMECODE: 22:08]:  Unauthorized entry by member of Staff.",
      "[TIMECODE: 22:08]: Staff member... Um. Dispatch? Staff member is...stabbing a cardboard box? Please advise. Note: Voice indicates Female. Unclear contents of words.",
      "[TIMECODE: 22:15]: Unknown person wearing Staff costume flips all fuses at once. Power goes out.  Notes indicate this causes a known problem with the wiring. I'm worried it won't be easy to get the power back on. What the HELL is going on?",
      "[TIMECODE: 15:16]:  Intruder leaves closet.",
    ];
    const cctv = await setUpCCTV(canvas, "Fiction/images/closet.jpg")
    const button = document.createElement("button");
    button.innerHTML = "CLOSET";
    button.onclick = () => { play(5) };
    buttonBar.append(button);
    return { lines, cctv }
  }



  const screen7 = async (canvas, buttonBar) => {
    const lines = [
      "[BEGIN LOG: December 14th, 2008]",
      "[TIMECODE: 11:50]: Guest V2 has woken up.",
      "[TIMECODE: 12:04]: Guest V2 has staggered out of the room. Seems disoriented. Staff dispatched.",
      "[TIMECODE: 16:00]: Guest V1 notified of Medical Emergency. Room marked VACANT."
    ];
    const cctv = await setUpCCTV(canvas, "Fiction/images/room2.jpg")
    const button = document.createElement("button");
    button.innerHTML = "ROOM V";
    button.onclick = () => { play(6) };
    buttonBar.append(button);
    return { lines, cctv }
  }

  const screen8 = async (canvas, buttonBar) => {
    const lines = [
      "[BEGIN LOG: December 14th, 2008]",
      "[TIMECODE: 06:22] Guest Z1 begins rambling at mirror.",
      "[TIMECODE: 06:55] Guest Z1 finishes rambling, leaves room.",
      "[TIMECODE: 07:31] Guest Z1 returned to room by Security. Locking protocols initiated.",
      "[TIMECODE: 07:33] Guest Z1 begins pounding at door.",
      "[TIMECODE: 07:47] Guest Z1 finishes tantrum.",
      "[TIMECODE: 08:01] Guest Z1 begins writing.",
      "[TIMECODE: 13:22] Security brings nutritional supplements. Guest Z1 refuses to eat.",
      "[TIMECODE: 17:22] Security brings nutritional supplements. Guest Z1 refuses to eat.",
      "[TIMECODE: 22:15]: Power failure. Guest Z1 resumes pounding on door.",
    ];
    const cctv = await setUpCCTV(canvas, "Fiction/images/room1.jpg")
    const button = document.createElement("button");
    button.innerHTML = "ROOM Z";
    button.onclick = () => { play(7) };
    buttonBar.append(button);
    return { lines, cctv }
  }

  const screen9 = async (canvas, buttonBar) => {
    const lines = [
      "[BEGIN LOG: December 14th, 2008]",
      "[TIMECODE: 15:11] Guest T1 checking in, first day. Welcome package deployed.",
      "[TIMECODE: 22:15]: Power failure. Guest T1 barricades door. Hides in top bunk. No Availability to deploy Security. Is Guest T1 somehow involved in this?",
      "[TIMECODE: 22:20]: Guest T1 is becoming increasingly agitated.",
      "[TIMECODE: 23:45]: Oh. God. I. Please. Fuck. I can't. I'm going to be sick again. Fine. Fuck. I'll write this down but then I quit. Guest T1 was. Killed.  By something in the walls? Dressed like a fucking [REDACTED] until he was dead. And then it was just. A shadow? She fucking scooped out his eyes. And then I was puking too much to see. And then when I looked again the corpse was. Arranged on the bed. Like. Like a fucking eyeless mannequin. Staring at the camera. Right at me.  I DON'T know where the Killer went. PLEASE can i Just go home to my family.",
    ];
    const cctv = await setUpCCTV(canvas, "Fiction/images/roomfinaljrtest2.jpg")
    const button = document.createElement("button");
    button.innerHTML = "ROOM T";
    button.onclick = () => { play(8) };
    buttonBar.append(button);
    return { lines, cctv }
  }