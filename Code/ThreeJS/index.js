// Import declarations may only appear at top level of a module.
// This is a module! Do: <script type="module"...>
import { DDSLoader } from "./jsm/loaders/DDSLoader.js";
import { MTLLoader } from "./jsm/loaders/MTLLoader.js";
import { OBJLoader } from "./jsm/loaders/OBJLoader.js";

let scene = new THREE.Scene();
let camera = new THREE.PerspectiveCamera(75, 640.0 / 480.0, 0.1, 1000);

let renderer = new THREE.WebGLRenderer();
renderer.setSize(640.0, 480.0);
document.body.appendChild(renderer.domElement);

camera.position.z = 5;

let object;
let texture;
let objectLoaded = false;

const animate = function() {
  requestAnimationFrame(animate);

  if (objectLoaded) {
    object.rotation.x += 0.002;
    object.rotation.y += 0.005;
  }

  renderer.render(scene, camera);
};

function onProgress(xhr) {}

function onError() {}

let manager = new THREE.LoadingManager();
manager.addHandler(/\.dds$/i, new DDSLoader());

let light = new THREE.HemisphereLight(0xffffff, 0x000000);
light.position.set(0, 50, 0);
scene.add(light);

new MTLLoader(manager)
  .setPath("model/")
  .load("rio.mtl", function (materials) {
    materials.preload();

    new OBJLoader(manager)
      .setMaterials(materials)
      .setPath("model/")
      .load("rio.obj", function (obj) {
        object = obj;

        object.scale.x = 0.03;
        object.scale.y = 0.03;
        object.scale.z = 0.03;

        object.position.y = -1;

        scene.add(object);
        objectLoaded = true;

      }, onProgress, onError);
  });


renderer.render(scene, camera);
animate();
