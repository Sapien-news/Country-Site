// Initialize the Three.js library
const scene = new THREE.Scene();
const camera = new THREE.PerspectiveCamera(75, window.innerWidth / window.innerHeight, 0.1, 1000);
const renderer = new THREE.WebGLRenderer({ canvas: document.getElementById("canvas") });

// Load the GLTF file
const loader = new THREE.GLTFLoader();

loader.load("rename.gltf", function (gltf) {
  // Add the loaded object to the scene
  scene.add(gltf.scene);

  // Set the initial position of the camera
  camera.position.z = 5;

  // Animate the scene
  function animate() {
    requestAnimationFrame(animate);

    // Rotate the object as you scroll
    gltf.scene.rotation.y += window.scrollY * 0.001;

    // Render the scene
    renderer.render(scene, camera);
  }

  animate();
});
