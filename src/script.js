import * as THREE from 'three'
import { OrbitControls } from 'three/addons/controls/OrbitControls.js';


// Canvas
const canvas = document.querySelector('canvas.webgl')

// Scene
const scene = new THREE.Scene()

const group = new THREE.Group()
scene.add(group)

/**
 * Object
 */
const box1 = new THREE.Mesh(new THREE.BoxGeometry(1,1,1), new THREE.MeshBasicMaterial({color:'red'}))
group.add(box1)
box1.position.x= 1.2
const box2 = new THREE.Mesh(new THREE.BoxGeometry(1,1,1), new THREE.MeshBasicMaterial({color:'green'}))
box2.position.x=-1.2
group.add(box2)
const box3 = new THREE.Mesh(new THREE.BoxGeometry(1,1,1), new THREE.MeshBasicMaterial({color:'yellow'}))

group.add(box3)





/**
 * Sizes
 */
const sizes = {
    width: window.innerWidth,
    height: window.innerHeight
}

/**
 * Camera
 */
const camera = new THREE.PerspectiveCamera(75, sizes.width / sizes.height)
camera.position.z = 3
scene.add(camera)

/**
 * Renderer
 */
const renderer = new THREE.WebGLRenderer({
    canvas: canvas,
    antialias:true
})

const controls = new OrbitControls( camera,canvas);
controls.autoRotate=true

renderer.setSize(sizes.width, sizes.height)
// renderer.render(scene, camera)

let clock = new THREE.Clock()



const tick =()=>{

console.log('hello')
    const elapsedTime = clock.getElapsedTime()
    box1.position.y = Math.sin(2*elapsedTime) 
    // camera.position.x= Math.cos(2*elapsedTime)
    camera.lookAt(box1.position)
    
    
    renderer.render(scene, camera)
    window.requestAnimationFrame(tick)
}

tick()

