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
  try {
    let gl = document.querySelector("#glcanvas").getContext("webgl");
    if (!gl) {
      alert("Unable to setup WebGL. Your browser or computer may not support it.");
      return;
    }
  } catch (e) {
    console.error(e.message);
  }
}

main();
