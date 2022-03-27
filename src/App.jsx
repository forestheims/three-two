import * as THREE from 'three';
import { OrbitControls } from 'three/examples/jsm/controls/OrbitControls';

export default function App() {
  const canvas = document.getElementById('webgl');

  const scene = new THREE.Scene();

  const renderer = new THREE.WebGLRenderer({ canvas });
  renderer.setSize(window.innerWidth, window.innerHeight);
  renderer.setPixelRatio(window.devicePixelRatio);

  const camera = new THREE.PerspectiveCamera(
    75,
    window.innerWidth / window.innerHeight,
    0.1,
    1000
  );
  camera.position.x = 3;
  camera.position.y = 3;
  camera.position.z = -3;
  const orbitControls = new OrbitControls(camera, canvas);
  orbitControls.enablePan = false;

  const aBox = new THREE.BoxGeometry(1, 1, 1);
  const mBox = new THREE.MeshStandardMaterial({ color: 'white' });
  const meshBox = new THREE.Mesh(aBox, mBox);
  scene.add(meshBox);

  const directionalLight = new THREE.DirectionalLight('lime', 0.8);
  directionalLight.position.set(0, 0, 7);
  scene.add(directionalLight);

  const ambientLight = new THREE.AmbientLight('magenta', 0.01);
  scene.add(ambientLight);

  const ambientLightD = new THREE.DirectionalLight('orange', 0.2);
  ambientLightD.position.set(0, 10, -3);
  scene.add(ambientLightD);

  window.addEventListener('resize', () => {
    camera.aspect = window.innerWidth / window.innerHeight;
    camera.updateProjectionMatrix();
    renderer.setSize(window.innerWidth, window.innerHeight);
    renderer.setPixelRatio(window.devicePixelRatio);
  });

  scene.background = new THREE.Color('red');

  let x = 0;
  let y = 0;
  const animateBox = () => {
    renderer.render(scene, camera);
    // directionalLight.target(0, 0, 0);
    x += 0.03;
    y += 0.01;
    ambientLight.intensity = Math.abs(Math.sin(y));
    directionalLight.position.x = 7 * Math.sin(x);
    directionalLight.position.z = 7 * Math.cos(x);
    if (x === 10) {
      x = 0;
    }
    meshBox.rotation.y = Math.sin(x);
    meshBox.rotation.x = Math.cos(x);
    // meshBox.rotation.z += Math.cos(x);
    requestAnimationFrame(animateBox);
  };

  animateBox();

  return (
    <>
      <header>
        <button onClick={() => (scene.background = new THREE.Color('red'))}>
          Red
        </button>
        <button onClick={() => (scene.background = new THREE.Color('green'))}>
          Green
        </button>
        <button onClick={() => (scene.background = new THREE.Color('blue'))}>
          Blue
        </button>
        <button
          onClick={() => {
            const randomColor = Math.floor(Math.random() * 16777215).toString(
              16
            );
            scene.background = new THREE.Color('#' + randomColor);
          }}
        >
          Random
        </button>
      </header>
    </>
  );
}
