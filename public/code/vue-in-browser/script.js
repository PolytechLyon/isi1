const app = Vue.createApp({
    setup() {
        const positions = Vue.ref([]);
        function pop({x, y}) {
            positions.value.push({ left: `${x}px`, top: `${y}px` });
        }
        document.addEventListener('click', pop);
        return { positions };
    }
});

app.mount('#app');
