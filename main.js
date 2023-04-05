// Create the scene
var scene = new THREE.Scene();

// Create the camera
var camera = new THREE.PerspectiveCamera(75, window.innerWidth / window.innerHeight, 0.1, 1000);
camera.position.z = 5;

// Create the renderer
var renderer = new THREE.WebGLRenderer({canvas: document.getElementById("canvas")});

// Create the geometry
var geometry = new THREE.BoxGeometry();

// Create the material
var material = new THREE.MeshBasicMaterial({color: 0xffffff});

// Create the mesh
var mesh = new THREE.Mesh(geometry, material);
scene.add(mesh);

// Handle window resizing
window.addEventListener('resize', function() {
  var width = window.innerWidth;
  var height = window.innerHeight;
  renderer.setSize(width, height);
  camera.aspect = width / height;
  camera.updateProjectionMatrix();
});

// Handle scroll event
window.addEventListener('scroll', function() {
  var scrollPosition = window.pageYOffset;
  mesh.rotation.y = scrollPosition / 1000;
});

// Render the scene
function render() {
  requestAnimationFrame(render);
  renderer.render(scene, camera);
}
render();
