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
      @click.stop="$event.target.remove()">X</button>
  </div>
  <script src="https://unpkg.com/vue@3"></script>
  <script src="script.js"></script>
</body>
```

</div>

<div class="fragment fade-in-then-out" data-fragment-index="1">

```javascript
const app = Vue.createApp({
  setup() {
    const positions = Vue.ref([]);
    function pop({x, y}) {
      positions.value.push({ left: `${x}px`, top: `${y}px` });
    }
    document.addEventListener('click', pop);
    return { positions };
  }
});
app.mount('#app');
```

</div>

<div class="fragment" data-fragment-index="3">
Result

<div data-code-example="vue-in-browser" data-code-example-size="big"></div>

</div>

</div>
