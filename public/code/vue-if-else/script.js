const { createApp, ref } = Vue;
createApp({
    setup() {
        const show = ref(true);
        return { show };
    }
})
.mount('#app');
