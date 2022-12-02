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

function pointMaker() {
  console.log(points);
  document.getElementById("shape").setAttribute("points", `${points}`);
  generate3d();
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
  } else if (points.length === 2) {
    points.pop();
    points.pop();
    pointMaker();
  }
}
function generate3d() {
  let offsetPoints = points;
  let offset = 100;
  for (let i = 0; i < offsetPoints.length; i++) {
    offsetPoints[i][0] = offsetPoints[i][0] + offset;
  }
  document.getElementById("shape-3d").setAttribute("points", `${offsetPoints}`);
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
      return [points[i][0], points[i][1]];
    }
  }
  return [];
}

onmousedown = function (e) {
  if (snapVert().length > 0) {
    points.push(snapVert());
  } else {
    points.push([curX, curY]);
  }

  pointMaker();

  //console.log(points);
};
