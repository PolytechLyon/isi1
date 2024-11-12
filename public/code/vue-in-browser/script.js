const { createApp, ref } = Vue;

const app = createApp({
    setup() {
        const positions = ref([]);
        function pop({ x, y }) {
            positions.value.push({ left: `${x}px`, top: `${y}px` });
        }
        document.addEventListener('click', pop);
        return { positions };
    }
});

app.mount('#app');
