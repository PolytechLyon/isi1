const { createApp, ref } = Vue;
createApp({
    template: '<form ref="formRef"><input @click="reset()"/></form>',
    setup() {
        const formRef = ref(null);
        const reset = () => formRef.value?.reset();
        return { formRef, reset };
    },
}).mount('#app');
