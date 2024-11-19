const { createApp, ref } = Vue;

const AppButton = {
    template: `<button :style="position" @click.stop="remove">X</button>`,
    props: ['position'],
    emits: ['remove'],
    setup: (props, ctx) => ({
        remove: () => ctx.emit('remove', props.position),
    }),
}

createApp({
    setup() {
        const positions = ref([]);
        const drop = ({ left, top }) => {
            const notSame = p => p.left !== left || p.top !== top;
            positions.value = positions.value?.filter(notSame);
        }
        document.addEventListener('click', ({x, y}) =>
            positions.value.push({ left: `${x}px`, top: `${y}px` }));
        return { positions, drop };
    }
})
.component('app-button', AppButton)
.mount('#app');
