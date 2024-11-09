const AppButton = {
    template: '<button :style="position" @click.stop="$event.target.remove()">X</button>',
    props: ['position'],
}

Vue.createApp({
    setup() {
        const positions = Vue.ref([]);
        function pop(event) {
            positions.value.push({ left: `${event.x}px`, top: `${event.y}px` });
        }
        document.addEventListener('click', pop);
        return { positions };
    }
})
.component('AppButton', AppButton)
.mount('#app');
