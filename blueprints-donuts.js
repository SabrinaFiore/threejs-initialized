let scene, camera, renderer, torus;
let donuts = [];
let ADD = 0.1;

let randomInRange = function(from, to) {
	let x = Math.random() * (to - from);
	return x + from;
}

let createDonut = function() {
	let geometry = new THREE.TorusGeometry(2, 1, 5, 50);
	let material = new THREE.MeshBasicMaterial({ color: Math.random() * 0xffffff });
    let d = new THREE.Mesh( geometry, material );

    d.position.x = randomInRange(-15, 15);
    d.position.z = randomInRange(-15, 15);
    d.position.y = 15;

	scene.add(d);
    donuts.push(d);
}
     
// set up the environment - initiallize scene, camera, objects and renderer
let init = function() {
	// create the scene
	scene = new THREE.Scene();
	scene.background = new THREE.Color(0x000000);
	
	// create an locate the camera
	camera = new THREE.PerspectiveCamera(75, window.innerWidth / window.innerHeight, 1, 1000);
	camera.position.z = 20;
	camera.position.y = -10;
	
	// create the renderer   
	renderer = new THREE.WebGLRenderer();   
	renderer.setSize(window.innerWidth, window.innerHeight);
	
	document.body.appendChild(renderer.domElement);
};
	
// main animation loop - calls 50-60 in a second.
let mainLoop = function() {
    let x = Math.random();
    if (x < 0.1)
    createDonut();
    donuts.forEach(d => d.position.y -= ADD);
	renderer.render(scene, camera);
	requestAnimationFrame(mainLoop);
};

init();
mainLoop();
