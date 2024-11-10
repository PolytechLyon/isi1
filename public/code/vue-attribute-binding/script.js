Vue.createApp({
    setup() {
        const progress = Vue.ref(0);
        setInterval(() => progress.value = (progress.value + .1) % 1, 1000);
        return { progress };
    }
})
.mount('#app');
