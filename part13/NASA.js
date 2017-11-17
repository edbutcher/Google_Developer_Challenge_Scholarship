let time = 60;
let arr = ["Orbiter transfers from ground to internal power",
  "Ground launch sequencer is go for auto sequence start",
  "Activate launch pad sound suppression system",
  "Activate main engine hydrogen burnoff system",
  "Main engine start",
  "Solid rocket booster ignition and liftoff!"];

while (time >= 0) {
    if (time === 50) {
      answer = arr[0];
    } else if (time === 31) {
      answer = arr[1];
    } else if (time === 16) {
      answer = arr[2];
    } else if (time === 10) {
      answer = arr[3];
    } else if (time === 6) {
      answer = arr[4];
    } else if (time === 0) {
      answer = arr[5];
    } else {
      answer = `T-${time} seconds`;
    }
    console.log(answer);
    time--;
}
