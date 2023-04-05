// Initialize the Three.js library
const scene = new THREE.Scene();
const camera = new THREE.PerspectiveCamera(75, window.innerWidth / window.innerHeight, 0.1, 1000);
const renderer = new THREE.WebGLRenderer({ canvas: document.getElementById("canvas") });

// Load the GLTF file
const loader = new THREE.GLTFLoader();

loader.load("scene.glb", function (gltf) {
  // Add the loaded object to the scene
  scene.add(gltf.scene);

  // Set the initial position of the camera
  camera.position.z = 5;

  // Animate the scene
  function animate() {
    requestAnimationFrame(animate);

    // Rotate the object as you scroll
// Rotate the object as you scroll
    window.addEventListener('click', () => {
       gltf.scene.rotation.y = window.scrollY * 0.5;
    });
  

    // Render the scene
    renderer.render(scene, camera);
  }

  animate();
});

// get all the text-line elements
const textLines = document.querySelectorAll('.text-line');

// create a new Intersection Observer
const observer = new IntersectionObserver(
  entries => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        // add the "animate" class to the text-line element
        entry.target.classList.add('animate');
        // unobserve the target element
        observer.unobserve(entry.target);
      }
    });
  },
  {
    rootMargin: '0px',
    threshold: 0.1
  }
);

// observe each text-line element
textLines.forEach(line => observer.observe(line));