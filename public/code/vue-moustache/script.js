const { createApp, ref } = Vue;
createApp({
    setup() {
        const greeting = ref('');
        const greetings = ['Hello', 'Salut', 'Hallo', 'Ciao'];
        let i = 0;
        setInterval(() => greeting.value = greetings[i++ % greetings.length], 1000);
        return { greeting };
    }
})
.mount('#app');
