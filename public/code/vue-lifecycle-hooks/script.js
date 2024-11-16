const { createApp, ref, onMounted, onUnmounted } = Vue;
createApp({
    setup() {
        const positions = ref([]);
        function pop({ x, y }) {
            positions.value.push({ left: `${x}px`, top: `${y}px` });
        }
        onMounted(() => document.addEventListener('click', pop));
        onUnmounted(() => document.removeEventListener('click', pop));
        return { positions };
    }
}).mount('#app');
