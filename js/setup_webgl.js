function NormalisedToDevice(coord, axisSize) {
  let halfAxisSize = axisSize / 2;

  let deviceCoord = (coord + 1) * halfAxisSize;

  return deviceCoord;
}

function DeviceToNormalised(coord, axisSize) {
  let halfAxisSize = axisSize / 2;

  let normalisedCoord = coord / halfAxisSize - 1;

  return normalisedCoord;
}

function main() {
  if (!document.querySelector("#glcanvas").getContext("webgl")) {
    alert("Unable to setup WebGL. Your browser or computer may not support it.");
    return;
  }
}

main();
