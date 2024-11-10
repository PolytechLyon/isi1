const AppButton = {
    template: `<button :style="position" @click.stop="remove">X</button>`,
    props: ['position'],
    setup() {
        return {
            remove: e => e.target.remove()
        };
    }
}

Vue.createApp({
    setup() {
        const positions = Vue.ref([]);
        document.addEventListener('click', ({x, y}) =>
            positions.value.push({ left: `${x}px`, top: `${y}px` }));
        return { positions };
    }
})
.component('app-button', AppButton)
.mount('#app');
