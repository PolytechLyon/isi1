const app = Vue.createApp({
    setup() {
        const positions = Vue.ref([]);
        function pop(event) {
            positions.value.push({ left: `${event.x}px`, top: `${event.y}px` });
        }
        function remove(event) {
            event.target.remove();
            event.stopPropagation();
        }
        document.addEventListener('click', pop);
        return { positions, remove };
    }
});

app.mount('#app');
