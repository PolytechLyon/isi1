Vue.createApp({
    setup() {
        const show = Vue.ref(true);
        return { show };
    }
})
.mount('#app');
