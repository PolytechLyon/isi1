#### Vue.js
### Démo

<div class="r-stack">
<div class="fragment fade-out" data-fragment-index="1">

* Configuration HTML directe, sans outil de build
  * Pour une application très simple 

```css fix
#app { button { position: absolute; } }
```

```html fix
<body>
  <div id="app">
  <button v-for="position in positions"
    :style="position"
    @click="remove($event)">X</button>
  </div>
  <script src="https://unpkg.com/vue@3"></script>
  <script src="vue-in-browser-example.js"></script>
</body>
```

</div>

<div class="fragment fade-in-then-out" data-fragment-index="1">

```javascript
const app = Vue.createApp({
  setup() {
    const positions = Vue.ref([]);
    function pop(event) {
      positions.value.push({left: `${event.x}px`, top: `${event.y}px`});
    }
    function remove(event) {
      event.target.remove();
      event.stopPropagation();
    }
    document.addEventListener('click', pop);
    return { positions, remove };
  }
});
app.mount('#app');
```

</div>

<div class="fragment" data-fragment-index="3">
Result

<div>
<iframe style="min-height: 400px; min-width: 600px" src="code/vue-in-browser-example.html"></iframe>
</div>

</div>

</div>
