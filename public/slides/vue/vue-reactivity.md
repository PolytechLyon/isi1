#### Vue.js
### Réactivité

<div style="display: flex; justify-content: space-between">

<div>

* Le problème

```javascript [5,7]
const { createApp } = Vue;
createApp({
 template: '{{ counter }}',
 setup() {
  let counter = 0;
  setInterval(() =>
      counter++, 500);
  return { counter }
 }
}).mount('#app');
```

<div data-code-example="vue-reactivity-problem" data-code-example-size="small"></div>

</div>

<div class="fragment">

* La solution

```javascript [5,7]
const { createApp, ref } = Vue;
createApp({
 template: '{{ counter }}',
 setup() {
  const counter = ref(0);
  setInterval(() =>
      counter.value++, 500);
  return { counter }
 }
}).mount('#app');
```

<div data-code-example="vue-reactivity-solution" data-code-example-size="small"></div>

</div> 

</div> 
