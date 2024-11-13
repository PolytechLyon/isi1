const { createApp, ref, computed, toRaw } = Vue;
createApp({
    template: '{{ compare }}',
    setup() {
        const obj = {};
        const objRef = ref(obj);
        const compare = computed(() =>
            toRaw(objRef.value) === obj);
        return { compare };
    },
}).mount('#app');
