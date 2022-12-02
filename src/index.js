// let canvas,
//   context,
//   preX = 0,
//   curX = 0,
//   preY = 0,
//   curY = 0,
//   h = 0,
//   w = 0,
//   col = "black",
//   stroke = 2,
//   flag = false,
//   dot_flag = false,
//   rect;
// //   mouseX = 0,
// //   mouseY = 0;

// function start() {
//   canvas = document.getElementById("canvas");
//   context = canvas.getContext("2d");
//   rect = canvas.getBoundingClientRect();

//   h = canvas.style.height;
//   w = canvas.style.width;

//   canvas.addEventListener(
//     "mousemove",
//     function (e) {
//       findxy("move", e);
//     },
//     false
//   );
//   canvas.addEventListener(
//     "mousedown",
//     function (e) {
//       findxy("down", e);
//     },
//     false
//   );
//   canvas.addEventListener(
//     "mouseup",
//     function (e) {
//       findxy("up", e);
//     },
//     false
//   );
//   canvas.addEventListener(
//     "mouseout",
//     function (e) {
//       findxy("out", e);
//     },
//     false
//   );
// }

// function draw() {
//   context.beginPath();
//   context.moveTo(preX, preY);
//   context.lineTo(curX, curY);
//   context.strokeStyle = col;
//   context.lineWidth = stroke;
//   context.stroke();
//   context.closePath();
// }

// function findxy(action, e) {
//   if (action == "down") {
//     preX = curX;
//     preY = curY;
//     curX = e.clientX - rect.left;
//     curY = e.clientY - rect.top;
//     console.log(curX, e.clientX, curY, e.clientY);
//     //console.log(canvas.offsetLeft);
//     //console.log(e.clientX, mouseX);

//     flag = true;
//     dot_flag = true;
//     if (dot_flag) {
//       context.beginPath();
//       context.fillStyle = col;
//       context.fillRect(curX, curY, 2, 2);
//       context.closePath();
//       dot_flag = false;
//     }
//   }
//   if (action == "up" || action == "out") {
//     flag = false;
//   }
//   if (action == "move") {
//     if (flag) {
//       preX = curX;
//       preY = curY;
//       curX = e.clientX - rect.left;
//       curY = e.clientY - rect.top;
//       draw();
//     }
//   }
// }

// function debug() {
//   //console.log(mouseX);
//   setTimeout(() => {
//     debug();
//   }, 100);
// }

// // onmousemove = function (e) {
// //   mouseX = e.clientX;
// //   mouseY = e.clientY; /*console.log(mouseX)*/
// // };

// start();
// debug();

// let canv = document.getElementById("canvas"),
//   context = canvas.getContext("2d"),
//   col = "black",
//   stroke = 2,
//   flag = false,
//   dot_flag = false,
//   preX = 0,
//   preY = 0,
//   curX = 0,
//   curY = 0,
//   mouseX = 0,
//   mouseY = 0;

// let boundaries = {
//   left: canv.offsetLeft,
//   right: canv.offsetLeft + canv.offsetWidth,
//   top: canv.offsetTop,
//   bottom: canv.offsetTop + canv.offsetHeight,
// };

// // curX = canv.offsetLeft;
// // curY = canv.offsetTop;

// onmousemove = function (e) {
//   mouseX = e.clientX;
//   mouseY = e.clientY;
// };

// function start() {
//   //canvas = document.getElementById("canvas");

//   //rect = canvas.getBoundingClientRect();

//   canvas.addEventListener(
//     "mousemove",
//     function (e) {
//       findxy("move", e);
//     },
//     false
//   );
//   canvas.addEventListener(
//     "mousedown",
//     function (e) {
//       findxy("down", e);
//     },
//     false
//   );
//   canvas.addEventListener(
//     "mouseup",
//     function (e) {
//       findxy("up", e);
//     },
//     false
//   );
//   canvas.addEventListener(
//     "mouseout",
//     function (e) {
//       findxy("out", e);
//     },
//     false
//   );
// }

// function findxy(action, e) {
//   document.getElementById("debugger").style.left = `${curX}px`;
//   document.getElementById("debugger").style.top = `${curY}px`;

//   if (action == "down") {
//     preX = curX;
//     preY = curY;
//     if (
//       boundaries.left < mouseX &&
//       boundaries.right > mouseX &&
//       boundaries.top < mouseY &&
//       boundaries.bottom > mouseY
//     ) {
//       console.log("inside canvas");
//       curX = mouseX;
//       curY = mouseY;
//     }
//     //console.log(canvas.offsetLeft);
//     //console.log(e.clientX, mouseX);

//     flag = true;
//     dot_flag = true;
//     if (dot_flag) {
//       context.beginPath();
//       context.fillStyle = col;
//       context.fillRect(curX, curY, 2, 2);
//       context.closePath();
//       dot_flag = false;
//     }
//   }
//   if (action == "up" /* || action == "out"*/) {
//     flag = false;
//   }
//   if (action == "move") {
//     if (flag) {
//       preX = curX;
//       preY = curY;
//       if (
//         boundaries.left < mouseX &&
//         boundaries.right > mouseX &&
//         boundaries.top < mouseY &&
//         boundaries.bottom > mouseY
//       ) {
//         console.log("inside canvas");
//         curX = mouseX;
//         curY = mouseY;
//         document.getElementById("debugger").style.left = `${curX}px`;
//         document.getElementById("debugger").style.top = `${curY}px`;
//       }
//       draw();
//     }
//   }
// }//

// function draw() {
//   context.beginPath();
//   context.moveTo(preX, preY);
//   context.lineTo(curX, curY);
//   context.strokeStyle = col;
//   context.lineWidth = stroke;
//   context.stroke();
//   context.closePath();
// }

// start();

let canv = document.getElementById("canvas"),
  // context = canvas.getContext("2d"),
  col = "black",
  stroke = 2,
  flag = false,
  dot_flag = false,
  preX = 0,
  preY = 0,
  curX = 0,
  curY = 0,
  mouseX = 0,
  mouseY = 0,
  points = [];

let boundaries = {
  left: canv.offsetLeft,
  right: canv.offsetLeft + canv.offsetWidth,
  top: canv.offsetTop,
  bottom: canv.offsetTop + canv.offsetHeight,
};

// curX = canv.offsetLeft;
// curY = canv.offsetTop;

function pointMaker() {
  points.forEach((element) => {
    //console.log(points[0][0]);
  });

  //   for (let i = 1; i <= points.length - 2; i++) {
  //     console.log(points[i][0], element[0]);
  //     if (points[i][0] - element[0] < 10 && points[i][1] - element[1] < 10) {
  //       console.log("Oh snap!");
  //     }
  //   }

  //document.getElementById(
  //   "dot-daddy"
  // ).innerHTML += `<div id="debugger" style="left: ${element[0]}px; top: ${element[1]}px"></div>`;

  document.getElementById("shape").setAttribute("points", `${points}`);
}
let ctrlBool = false;
let zBool = false;

document.addEventListener("keydown", (event) => {
  if (event.key === "Meta") {
    ctrlBool = true;
  }
  if (event.key === "z") {
    zBool = true;
  }
  if (ctrlBool && zBool) {
    undoLine();
  }
});

document.addEventListener("keyup", (event) => {
  if (event.key === "Meta") {
    ctrlBool = false;
  }
  if (event.key === "z") {
    zBool = false;
  }
});

function undoLine() {
  console.log("undo");
  if (points.length > 2) {
    points.pop();
    pointMaker();
    //$('textarea').text(textArray);
  } else if (points.length === 2) {
    points.pop();
    points.pop();
    pointMaker();
  }
}

onmousemove = function (e) {
  mouseX = e.clientX;
  mouseY = e.clientY;

  //console.log(e.clientX, e.clientY);

  if (
    boundaries.left < mouseX &&
    boundaries.right > mouseX &&
    boundaries.top < mouseY &&
    boundaries.bottom > mouseY
  ) {
    //console.log("inside canvas");
    curX = mouseX;
    curY = mouseY;
    document.getElementById("debugger").style.left = `${curX}px`;
    document.getElementById("debugger").style.top = `${curY}px`;
  }
};

function snapVert() {
  let length = points.length;
  for (let i = 0; length > 1 && i < length; i++) {
    if (
      Math.abs(points[i][0] - curX) < 20 &&
      Math.abs(points[i][1] - curY) < 20
    ) {
      //points.push();
      //console.log(points[i][0], points[i][1]);
      //console.log(curX, curY);
      return [points[i][0], points[i][1]];
    }
  }
  return [];
}

onmousedown = function (e) {
  console.log(points.length);

  if (snapVert().length > 0) {
    points.push(snapVert());
  } else {
    points.push([curX, curY]);
  }

  pointMaker();

  //console.log(points);
};
