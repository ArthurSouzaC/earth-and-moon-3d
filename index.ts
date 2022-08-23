import * as Three from 'three';
import { OrbitControls } from 'three/examples/jsm/controls/OrbitControls';

import Orb from './Orb';

const renderer = generateRenderer();
const camera = generateCamera()
const scene = new Three.Scene();
const orbit = new OrbitControls(camera, renderer.domElement);

const sun = new Orb(3, 0, 0, 0, '#ffffff', 2 * 10^30);
const planet = new Orb(1, 5, 0, 5, '#ffffff', 3.3 * 10^23);



camera.position.y = 20;
camera.position.z = 20;
orbit.update();

scene.add(new Three.GridHelper(100, 50));
scene.add(sun)
scene.add(planet)


function render(time: number) {
  time *= 0.001;  // convert time to seconds
  renderer.render(scene, camera);
  requestAnimationFrame(render);
}

function generateRenderer() {
  const renderer = new Three.WebGLRenderer();
  renderer.setSize(window.innerWidth, window.innerHeight);
  document.body.append(renderer.domElement);
  return renderer;
}

function generateCamera() {
  const fov = 100;
  const aspect = 2;
  const near = 0.1;
  const far = 50;
  const camera = new Three.PerspectiveCamera(fov, aspect, near, far);
  return camera;
}

requestAnimationFrame(render);