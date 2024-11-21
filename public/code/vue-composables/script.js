const { createApp, ref, computed, onMounted, onUnmounted } = Vue;

/**
 * Store mouse clicks in a reactive array.
 * @returns {{coordinates: { x: number, y: number }}}
 */
function useClickCoordinates() {
    const coordinates = ref([]);
    function pop({ x, y }) {
        coordinates.value.push({ x, y });
    }
    onMounted(() => document.addEventListener('click', pop));
    onUnmounted(() => document.removeEventListener('click', pop));
    return { coordinates };
}

createApp({
    setup() {
        const { coordinates } = useClickCoordinates();
        const toPosition = ({ x, y }) => ({ left: `${x}px`, top: `${y}px` });
        const positions = computed(() => coordinates.value?.map(toPosition));
        return { positions };
    }
}).mount('#app');
