import * as THREE from 'three';
import { OrbitControls } from 'three/examples/jsm/controls/OrbitControls'

export default class Viewer {

    constructor(width, height) {
        this.scene = new THREE.Scene();
        this.camera = new THREE.PerspectiveCamera( 75, width / height, 0.1, 1000 );
        this.renderer = new THREE.WebGLRenderer();
        this.controls = new OrbitControls(this.camera, this.renderer.domElement);

        this.camera.position.set(3, 4, 3);
        this.renderer.setSize( width, height );

        this.cube = this.addSampleCube();
        this.addGrid(1000, 1000);

        this.animate();
    }

    addGrid(countN, countM) {
        this.grid = new THREE.GridHelper(countN, countM);
        this.scene.add(this.grid);
    }

    animate() {
        requestAnimationFrame( this.animate.bind(this) );

        this.cube.rotation.x += 0.01;
        this.cube.rotation.y += 0.01;

        this.controls.update();

        this.renderer.render( this.scene, this.camera );
    }

    addSampleCube() {
        const geometry = new THREE.BoxGeometry( 1, 1, 1 );
        const material = new THREE.MeshBasicMaterial( { color: 0x00ff00 } );
        const cube = new THREE.Mesh( geometry, material );

        this.scene.add( cube );

        return cube;
    }
}