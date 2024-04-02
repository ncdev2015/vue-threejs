<template>
    <div id="viewer"></div>
</template>

<script>
    import Viewer from './classes/Viewer'

    export default {
        data() {
            return {
                message: '¡Hola Mundo!'
            };
        },
        mounted() {
            let viewer = new Viewer(800, 600);
            document.getElementById("viewer").appendChild(viewer.renderer.domElement);
        }
    };
</script>