Vue.createApp({
    setup() {
        const text = Vue.ref('Click me');
        function toggleText() {
            text.value = text.value === 'Click me' ? 'Cliquez moi' : 'Click me';
        }
        return { text, toggleText };
    }
})
.mount('#app');
