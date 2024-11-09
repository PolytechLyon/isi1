Vue.createApp({
    setup() {
        const image = Vue.ref('');
        const images = ['CSS3_logo', 'HTML5_logo', 'JavaScript_logo'];
        let i = 0;
        setInterval(() => image.value = `/images/${images[i++ % images.length]}.svg`, 1000);
        return { image };
    }
})
.mount('#app');
