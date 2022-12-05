let canv = document.getElementById("canvas"),
  canv3d = document.getElementById("canvas-3d"),
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
  points = [],
  offsetPoints = [],
  offsetPointsTop = [],
  offsetZ = 20;

function iniLoop() {
  //rotate(0.02, 0, 0);
  //console.log(obj3d);
}
let boundaries = {
  left: canv.offsetLeft,
  right: canv.offsetLeft + canv.offsetWidth,
  top: canv.offsetTop,
  bottom: canv.offsetTop + canv.offsetHeight,
};
function generateObject() {
  //obj3d[index] = [x, y, z];

  document.getElementById("shape-3d").setAttribute("points", `${offsetPoints}`);

  updateConnections();
}

function updateConnections() {
  for (let i = 0; i < offsetPoints.length; i++) {
    svgGroup2.children[i].setAttribute(
      "points",
      `${offsetPoints[i][0]},${offsetPoints[i][1]},${offsetPoints[i][0]},${
        offsetPoints[i][1] - offsetZ
      }`
    );
  }
}

function pointMaker() {
  //console.log(points);
  document.getElementById("shape").setAttribute("points", `${points}`);
  //console.log(points[0], points[1], mouseX, mouseY);
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
  let offset = canv3d.offsetLeft;

  for (let i = 0; i < points.length; i++) {
    offsetPoints[i] = [points[i][0], points[i][1]];
    offsetPointsTop[i] = [offsetPoints[i][0], offsetPoints[i][1] - offsetZ];

    if (i === points.length - 1) {
      generateconnections(offsetPoints[i]);
      generateObject();
    }
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
      Math.abs(points[i][0] - curX + boundaries.left) < 20 &&
      Math.abs(points[i][1] - curY + boundaries.top) < 20
    ) {
      console.log("snapped!");
      return [points[i][0], points[i][1]];
    }
  }
  return [];
}
// let svgMain = document.getElementById("svg");
let svgGroup2 = document.getElementById("group2");

function generateconnections(startPoint) {
  let connectorline = `<polyline
    id="shape-3d-con"
    points="${startPoint[0]},${startPoint[1]},${startPoint[0]},${
    startPoint[1] - offsetZ
  }"
    style="fill: transparent; stroke: green; stroke-width: 4"
  ></polyline>`;

  svgGroup2.innerHTML += connectorline;
}

onmousedown = function (e) {
  if (snapVert().length > 0) {
    points.push(snapVert());
  } else {
    points.push([curX - boundaries.left, curY - boundaries.top]);
  }

  pointMaker();

  //console.log(points);
};

function rotate(pitch, roll, yaw) {
  var cosa = Math.cos(yaw);
  var sina = Math.sin(yaw);

  var cosb = Math.cos(-pitch);
  var sinb = Math.sin(-pitch);

  var cosc = Math.cos(roll);
  var sinc = Math.sin(roll);

  var Axx = cosa * cosb;
  var Axy = cosa * sinb * sinc - sina * cosc;
  var Axz = cosa * sinb * cosc + sina * sinc;

  var Ayx = sina * cosb;
  var Ayy = sina * sinb * sinc + cosa * cosc;
  var Ayz = sina * sinb * cosc - cosa * sinc;

  var Azx = -sinb;
  var Azy = cosb * sinc;
  var Azz = cosb * cosc;

  for (var i = 0; i < points.length; i++) {
    var px = offsetPoints[i][0];
    var py = offsetPoints[i][1];
    var pz = offsetZ; //obj3d[i][2];

    offsetPoints[i][0] = Axx * px + Axy * py + Axz * pz;
    offsetPoints[i][1] = Ayx * px + Ayy * py + Ayz * pz;
    offsetZ = Azx * px + Azy * py + Azz * pz;
  }
}
function time() {
  setTimeout(() => {
    //console.log(offsetPoints[0], offsetPoints[1]);
    //console.log(offsetPoints);

    iniLoop();
    time();
    //pointMaker();
    generateObject();
  }, "20");
}

time();
