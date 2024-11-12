const { createApp } = Vue;
createApp({
    template: '{{ counter }}',
    setup() {
        let counter = 0;
        setInterval(() => counter++, 500);
        return { counter }
    }
})
.mount('#app');
