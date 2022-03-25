import * as THREE from '../node_modules/three/src/Three.js';
import gsap from 'gsap';
import {OrbitControls} from 'three/examples/jsm/controls/OrbitControls.js'

window.addEventListener( 'resize', onWindowResize, false );
function onWindowResize(){

    camera.aspect = window.innerWidth / window.innerHeight;
    camera.updateProjectionMatrix();
    renderer.setSize( window.innerWidth, window.innerHeight );
}


const raycaster =  new THREE.Raycaster()
const scene = new THREE.Scene();
const camera = new THREE.PerspectiveCamera( 75, window.innerWidth / window.innerHeight, 0.1, 1000 );


const renderer = new THREE.WebGLRenderer({canvas: threejsCanva});
renderer.setSize(window.innerWidth, window.innerHeight );
renderer.setPixelRatio(devicePixelRatio)
document.body.appendChild( renderer.domElement );
const control = new OrbitControls(camera, renderer.domElement)
control.enableZoom = false
control.minPolarAngle = 1.4
control.maxPolarAngle = 1.7

control.minAzimuthAngle = -0.1
control.maxAzimuthAngle = 0.1

control.rotateSpeed = 0.07
control.enablePan = false;

// GEOMETRY
const planeGeometry = new THREE.PlaneGeometry(700,400,50,50);

// MATERIALS 

const material = new THREE.MeshPhongMaterial( { 
    //color: 0x003049,
    side: THREE.DoubleSide,
    flatShading: THREE.FlatShading,
    vertexColors: true
} );

// MESH 

const planeMesh = new THREE.Mesh( planeGeometry, material );

const randomValues = []
const { array } = planeMesh.geometry.attributes.position
for (let i = 0; i < array.length; i++) {
    if(i % 3 === 0) {
        const x =array[i]
        const y =array[i+1]
        const z =array[i+2]
    
        array[i] = x + (Math.random() -0.5)
        array[i +1] = (y + Math.random() -0.5)
        array[i + 2] = (z + Math.random() -0.5) *3
    }
    randomValues.push(Math.random() * Math.PI *2)

}

//planeMesh.rotation.x = -0.3

planeMesh.geometry.attributes.position.originalPosition = planeMesh.geometry.attributes.position.array
planeMesh.geometry.attributes.position.randomValues = randomValues

const colors = []
for (let i = 0; i < planeMesh.geometry.attributes.position.count; i++) {
    colors.push(0,0.19,0.4)    
}
planeMesh.geometry.setAttribute('color', new THREE.BufferAttribute(new Float32Array(colors), 3))
//LIGHT 

const light = new THREE.DirectionalLight(0xffffff, 1)
light.position.set(0, 1, 1)


const backlight = new THREE.DirectionalLight(0xffffff, 1)
backlight.position.set(0, 1, -1)


scene.add(planeMesh);
scene.add(light);
scene.add(backlight);
camera.position.z = 150;

const mouse = {
    x: undefined,
    y: undefined
}
addEventListener('mousemove', (event) => {
    mouse.x = ( event.clientX / innerWidth ) * 2 -1
    mouse.y = -( event.clientY / innerHeight ) * 2 + 1
})
let frame = 0
function animate() {
	renderer.render( scene, camera );
	requestAnimationFrame( animate );
    frame += 0.01
    raycaster.setFromCamera(mouse, camera)

    const {array, originalPosition, randomValues } = planeMesh.geometry.attributes.position
    for (let i = 0; i < array.length; i+=3) {

        array[i] = originalPosition[i] + Math.cos(frame + randomValues[i]) * 0.01
        array[i+1] = originalPosition[i+1] + Math.sin(frame + randomValues[i+1]) * 0.01
    }

    planeMesh.geometry.attributes.position.needsUpdate = true



    const intersects = raycaster.intersectObject(planeMesh)
    if (intersects.length > 0) {

    const { color } = intersects[0].object.geometry.attributes
    color.setX(intersects[0].face.a,0.1)
    color.setY(intersects[0].face.a,0.5)
    color.setZ(intersects[0].face.a,1)

    color.setX(intersects[0].face.b,0.1)
    color.setY(intersects[0].face.b,0.5)
    color.setZ(intersects[0].face.b,1)

    color.setX(intersects[0].face.c,0.1)
    color.setY(intersects[0].face.c,0.5)
    color.setZ(intersects[0].face.c,1)

    intersects[0].object.geometry.attributes.color.needsUpdate = true

    const initialColor = {
        r: 0,
        g: 0.19,
        b:0.4
    }
    const hoverColor = {
        r: 0.1,
        g: 0.5,
        b: 1
    }
    gsap.to(hoverColor, {
        r: initialColor.r,
        g: initialColor.g,
        b: initialColor.b,
        duration: 1,
        onUpdate:() => {
            color.setX(intersects[0].face.a,hoverColor.r)
            color.setY(intersects[0].face.a,hoverColor.g)
            color.setZ(intersects[0].face.a,hoverColor.b)

            color.setX(intersects[0].face.b,hoverColor.r)
            color.setY(intersects[0].face.b,hoverColor.g)
            color.setZ(intersects[0].face.b,hoverColor.b)

            color.setX(intersects[0].face.c,hoverColor.r)
            color.setY(intersects[0].face.c,hoverColor.g)
            color.setZ(intersects[0].face.c,hoverColor.b)
            color.needsUpdate = true
        },
    })
}
}
animate();

