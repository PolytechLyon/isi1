#### Vue.js
### Cycle de vie de composant

* Crochet de cycle de vie de composant

```javascript [6,7]
setup() {
  const positions = ref([]);
  function pop({ x, y }) {
    positions.value.push({ left: `${x}px`, top: `${y}px` });
  }
  onMounted(() => document.addEventListener('click', pop));
  onUnmounted(() => document.removeEventListener('click', pop));
  return { positions };
}
```

<div data-code-example="vue-lifecycle-hooks" data-code-example-size="small"></div>
