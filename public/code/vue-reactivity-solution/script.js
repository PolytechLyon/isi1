const { createApp, ref } = Vue;
createApp({
    template: '{{ counter }}',
    setup() {
        const counter = ref(0);
        setInterval(() => counter.value++, 500);
        return { counter }
    }
})
.mount('#app');
