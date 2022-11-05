import {
  Engine,
  Scene,
  Vector3,
  ArcRotateCamera,
  PointLight,
  SceneLoader,
} from "@babylonjs/core";
const createScene = (canvas, url) => {
  const engine = new Engine(canvas);
  const scene = new Scene(engine);

  const light = new PointLight("Omni", new Vector3(20, 20, 100), scene);
  const camera = new ArcRotateCamera(
    "Camera",
    0,
    0.8,
    100,
    Vector3.Zero(),
    scene
  );
  camera.attachControl(canvas, false);

  console.log(url);

  SceneLoader.ImportMesh("", "", url, scene, function (newMeshes) {
    camera.target = newMeshes[0];
  });

  scene.registerBeforeRender(function () {
    light.position = camera.position;
  });
};

export { createScene };
