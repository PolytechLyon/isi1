const { createApp, ref } = Vue;
createApp({
    template: '{{ a.twice() }}',
    setup() {
        const a = ref({
            b: { counter: 0 },
            twice() {
                return 2 * this.b.counter;
            },
        });
        setInterval(() => a.value.b.counter++, 500);
        return { a }
    }
}).mount('#app');
