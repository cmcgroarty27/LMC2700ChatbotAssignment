import * as THREE from "./three";
const scene = new THREE.Scene();
const camera = new THREE.PerspectiveCamera(75, window.innerWidth / window.innerHeight, 0.1, 1000);
const renderer = new THREE.WebGLRenderer();
import * as LOAD from "./three/examples/jsm/loaders/FBXLoader";
const loader = new LOAD.FBXLoader();

renderer.setSize(window.innerWidth, window.innerHeight);
document.getElementById('scene-container').appendChild(renderer.domElement);

loader.load('Waving.fbx', function (object) {
    object.scale.set(0.01, 0.01, 0.01)
    scene.add(object);
    console.log(object);
});

camera.position.z = 5;

const animate = function () {
    requestAnimationFrame(animate);

    // Rotate the model or perform other animations here

    renderer.render(scene, camera);
};

animate();
