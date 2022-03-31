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

  scene.background = new THREE.Color('slategrey');
  let x = 0;
  let y = 0;

  const count = () =>
    setTimeout(() => {
      if (x === 10) x = 0;
      if (y === 10) y = 0;
      x += 0.03;
      y += 0.01;
      count();
    }, 15);
  count();

  const orbitLight = () => {
    renderer.render(scene, camera);
    meshBox.rotation.x = 0;
    meshBox.rotation.y = 0;
    meshBox.rotation.z = 0;
    directionalLight.position.x = 7 * Math.sin(x);
    directionalLight.position.y = 1.01 - 2 * Math.sin(x);
    directionalLight.position.z = 7 * Math.cos(x);
    requestAnimationFrame(orbitLight);
  };
  orbitLight();

  const oneBox = () => {
    meshBox.rotation.x = 0;
    meshBox.rotation.y = 0;
    meshBox.rotation.z = 0;
    requestAnimationFrame(oneBox);
  };

  const twoBox = () => {
    meshBox.rotation.x = Math.cos(x);
    meshBox.rotation.y = Math.sin(x);
    meshBox.rotation.z = Math.cos(x);
    requestAnimationFrame(twoBox);
  };

  const threeBox = () => {
    meshBox.rotation.x = Math.cos(x);
    meshBox.rotation.y = Math.tan(x);
    meshBox.rotation.z = Math.cos(x);
    requestAnimationFrame(threeBox);
  };

  const fourBox = () => {
    meshBox.rotation.x = Math.tan(x);
    meshBox.rotation.y = Math.tan(x);
    meshBox.rotation.z = Math.tan(x);
    requestAnimationFrame(fourBox);
  };

  const fiveBox = () => {
    meshBox.rotation.x = 1.5 * Math.cos(x);
    meshBox.rotation.y = 5 - 3 * Math.sin(x);
    meshBox.rotation.z = 0;
    requestAnimationFrame(fiveBox);
  };

  const sixBox = () => {
    meshBox.rotation.x = 0;
    meshBox.rotation.y = 2 * Math.sin(x);
    meshBox.rotation.z = 0;
    requestAnimationFrame(sixBox);
  };

  const sevenBox = () => {
    meshBox.rotation.x = 10 * Math.cos(x);
    meshBox.rotation.y = 0;
    meshBox.rotation.z = 0;
    requestAnimationFrame(sevenBox);
  };

  const eightBox = () => {
    meshBox.rotation.x = Math.sin(y);
    meshBox.rotation.y = Math.sin(x);
    meshBox.rotation.z = 0;
    requestAnimationFrame(eightBox);
  };

  window.addEventListener('keydown', (event) => {
    if (event.key === '1') {
      oneBox();
      const slots = document.querySelectorAll('.num-gui');
      slots.forEach((slot) => slot.classList.remove('current'));
      const equipSlot = document.querySelector('.key-1');
      equipSlot.classList.add('current');
    } else if (event.key === '2') {
      twoBox();
      const slots = document.querySelectorAll('.num-gui');
      slots.forEach((slot) => slot.classList.remove('current'));
      const equipSlot = document.querySelector('.key-2');
      equipSlot.classList.add('current');
    } else if (event.key === '3') {
      threeBox();
      const slots = document.querySelectorAll('.num-gui');
      slots.forEach((slot) => slot.classList.remove('current'));
      const equipSlot = document.querySelector('.key-3');
      equipSlot.classList.add('current');
    } else if (event.key === '4') {
      fourBox();
      const slots = document.querySelectorAll('.num-gui');
      slots.forEach((slot) => slot.classList.remove('current'));
      const equipSlot = document.querySelector('.key-4');
      equipSlot.classList.add('current');
    } else if (event.key === '5') {
      fiveBox();
      const slots = document.querySelectorAll('.num-gui');
      slots.forEach((slot) => slot.classList.remove('current'));
      const equipSlot = document.querySelector('.key-5');
      equipSlot.classList.add('current');
    } else if (event.key === '6') {
      sixBox();
      const slots = document.querySelectorAll('.num-gui');
      slots.forEach((slot) => slot.classList.remove('current'));
      const equipSlot = document.querySelector('.key-6');
      equipSlot.classList.add('current');
    } else if (event.key === '7') {
      sevenBox();
      const slots = document.querySelectorAll('.num-gui');
      slots.forEach((slot) => slot.classList.remove('current'));
      const equipSlot = document.querySelector('.key-7');
      equipSlot.classList.add('current');
    } else if (event.key === '8') {
      eightBox();
      const slots = document.querySelectorAll('.num-gui');
      slots.forEach((slot) => slot.classList.remove('current'));
      const equipSlot = document.querySelector('.key-8');
      equipSlot.classList.add('current');
    }
  });

  return (
    <>
      <header>
        <div className="num-box">
          <div className="num-gui key-1">
            1<div className="equip icon-1"></div>
          </div>
          <div className="num-gui key-2">
            2<div className="equip icon-2"></div>
          </div>
          <div className="num-gui key-3">
            3<div className="equip icon-3"></div>
          </div>
          <div className="num-gui key-4">
            4<div className="equip icon-4"></div>
          </div>
          <div className="num-gui key-5">
            5<div className="equip icon-5"></div>
          </div>
          <div className="num-gui key-6">
            6<div className="equip icon-6"></div>
          </div>
          <div className="num-gui key-7">
            7<div className="equip icon-7"></div>
          </div>
          <div className="num-gui key-8">
            8<div className="equip icon-8"></div>
          </div>
        </div>
        <div></div>
      </header>
    </>
  );
}
