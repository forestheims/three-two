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
  camera.position.x = 9;
  camera.position.y = 9;
  camera.position.z = 8;
  const orbitControls = new OrbitControls(camera, canvas);
  orbitControls.enablePan = false;

  const aBox = new THREE.BoxGeometry(1, 1, 1);
  const mBox = new THREE.MeshStandardMaterial({ color: 'green' });
  const meshBox = new THREE.Mesh(aBox, mBox);
  scene.add(meshBox);
  const axesHelper = new THREE.AxesHelper();
  scene.add(axesHelper);

  const directionalLight = new THREE.DirectionalLight('white', 1.0);
  directionalLight.position.set(7, 7, 7);
  scene.add(directionalLight);

  const dirLightHelper = new THREE.DirectionalLightHelper(directionalLight);
  scene.add(dirLightHelper);

  const ambientLight = new THREE.AmbientLight('white', 0.1);
  scene.add(ambientLight);

  window.addEventListener('resize', () => {
    camera.aspect = window.innerWidth / window.innerHeight;
    camera.updateProjectionMatrix();
    renderer.setSize(window.innerWidth, window.innerHeight);
    renderer.setPixelRatio(window.devicePixelRatio);
  });

  const animateBox = () => {
    renderer.render(scene, camera);
    meshBox.rotation.y += 0.01;
    requestAnimationFrame(animateBox);
  };

  animateBox();

  return <></>;
}
