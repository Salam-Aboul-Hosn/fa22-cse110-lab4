function pTime() {
    let d = new Date();
    let time = d.toLocaleTimeString();
    console.log(time);
  }
  
  setInterval(pTime, 1000);
  