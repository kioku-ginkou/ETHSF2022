import { Engine, Scene, SceneLoader, glTFFileLoader } from "@babylonjs/core";
import {} from "@babylonjs/core"
<script src="babylon.glTFFileLoader.js"></script>
const createScene = (canvas, url) => {
  const engine = new Engine(canvas);
  const scene = new Scene(engine);

  SceneLoader.Append("", url, scene, function (scene) {
    // Create a default arc rotate camera and light.
    scene.createDefaultCameraOrLight(true, true, true);

    // The default camera looks at the back of the asset.
    // Rotate the camera by 180 degrees to the front of the asset.
    scene.activeCamera.alpha += Math.PI;
  });
};

export { createScene };
