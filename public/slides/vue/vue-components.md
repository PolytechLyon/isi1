#### Vue.js
### Les composants

<div class="r-stack">

<div class="fragment fade-out" data-fragment-index="1">

* L'interface utilisateur (page Web) est décomposée de plusieurs composants.
* Un composant est un élément isolé et réutilisable de la page Web.
* Les composants sont organisés dans une structure arborescente, avec un composant racine.

</div>

<div class="fragment fade-in-then-out" data-fragment-index="1">

* Un composant Vue peut avoir les caractéristiques suivantes :
  * Un gabarit (attribut `template`)
  * Une logique (méthode `setup()`)
  * Un ensemble des propriétés qui peuvent être affectées (attribut `props`)
  * Un ensemble des événements qui peuvent être émis (attribut `emits`)

</div>

<div class="fragment fade-in-then-out" data-fragment-index="2">

* Accessibles depuis le gabarit sont :
  * Les propriétés `props` de composant
  * Les éléments de l'objet de retour de `setup()`

```
const AppButton = {
  template: '<button :style="position" @click.stop="remove">X</button>',
  props: ['position'],                    // lié au style
  setup() {
    return {
      remove: e => e.target.remove()      // déclenché par click
    };
  }
}
```


</div>

<div class="fragment fade-in" data-fragment-index="3">
<div class="fragment fade-out" data-fragment-index="5">

* Le composant est enregistré auprès de l'application, ou les composants qui l'utilisent.
* Une application Vue est le composant racine. <!-- .element class="fragment" data-fragment-index="4"  -->

<pre><code
  class="javascript language-javascript"
  data-trim
  data-noescape
  data-line-numbers="10|2-9"
  data-fragment-index="4">
const { createApp, ref } = Vue;
createApp({
  setup() {
    const positions = ref([]);
    document.addEventListener('click', ({x, y}) =>
      positions.value.push({ left: `${x}px`, top: `${y}px` }));
    return { positions };
  }
})
.component('app-button', AppButton)
.mount('#app');
</code></pre>

</div>
</div>

<div class="fragment fade-in-then-out" data-fragment-index="5">

* Une fois enregistré, le composant peut être utilisé dans les gabarits d'autres composants.
  * Les propriétés sont passés par liaison (binding)

``` [2]
  <div id="app">
    <app-button v-for="position in positions" :position="position" />
  </div>
```


</div>

<div class="fragment fade-in">

Résultat

<div data-code-example="vue-component" data-code-example-size="big"></div>


</div>

</div>
