const { createApp, ref, computed } = Vue;
createApp({
    template: '{{ compare }}',
    setup() {
        const obj = {};
        const objRef = ref(obj);
        const compare = computed(() => objRef.value === obj);
        return { compare };
    },
}).mount('#app');
