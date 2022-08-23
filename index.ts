import * as Three from 'three';
import { MeshBasicMaterial, MeshPhongMaterial, TextureLoader } from 'three';
import { OrbitControls } from 'three/examples/jsm/controls/OrbitControls';

import Orb from './Orb';

const renderer = generateRenderer();
const camera = generateCamera();
const scene = new Three.Scene();
const orbit = new OrbitControls(camera, renderer.domElement);

const elements = {
  earth: new Orb(6.3781, 0, 0, 0, new MeshPhongMaterial({ map: new TextureLoader().load(require('./assets/earth.jpg')) })),
  moon: new Orb(1.7374, 0, 0, 0, new MeshPhongMaterial({ map: new TextureLoader().load(require('./assets/moon.jpg')) })),
  sun: new Orb(12, 50, 0, 50, new MeshBasicMaterial({ map: new TextureLoader().load(require('./assets/sun.jpg')) })),
}

camera.position.y = 100;
camera.position.z = 150;

orbit.update();

Object.values(elements).forEach(element => {
  scene.add(element)
});

const light = new Three.PointLight( 0xffffff );
light.position.x = 50;
light.position.y = 50;
light.intensity = 1.5;
scene.add( light );

elements['sun'].position.set(light.position.x, light.position.y, light.position.z)

function render(delta: number) {
  delta *= 0.001;

  elements['earth'].rotation.y = 1.666 * delta;
  elements['moon'].position.x = (elements['earth'].radius + 10) * Math.sin(3.708 * delta);
  elements['moon'].position.z = (elements['earth'].radius + 10) * Math.cos(3.708 * delta);

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
  const fov = 45;
  const aspect = window.innerWidth / window.innerHeight;
  const near = 0.1;
  const far = 500 ;
  const camera = new Three.PerspectiveCamera(fov, aspect, near, far);
  return camera;
}

requestAnimationFrame(render);