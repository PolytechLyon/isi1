const { createApp, ref } = Vue;

const app = createApp({
    setup() {
        const positions = ref([]);
        function pop({ x, y }) {
            positions.value.push({ left: `${x}px`, top: `${y}px` });
        }
        const remove = (e) => e.target.remove();
        document.addEventListener('click', pop);
        return { positions, remove };
    }
});

app.mount('#app');
