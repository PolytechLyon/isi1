#### Vue.js
### Composants Vue

<div class="r-stack">

<div class="fragment fade-out" data-fragment-index="1">

* L'interface utilisateur (page Web) est décomposée de plusieurs composants.
* Un composant est un élément isolé et réutilisable de la page Web.
* Les composants sont dans une structure arborescente, avec un composant racine.

</div>

<div class="fragment fade-in-then-out" data-fragment-index="1">

* Un composant Vue peut avoir les caractéristiques suivantes :
  * Un gabarit (attribut `template`)
  * Une logique (méthode `setup()`)
  * Un ensemble des propriétés qui peuvent être affectées (attribut `props`)
  * Un ensemble des événements qui peuvent être émis (attribut `emits`)

</div>

<div class="fragment fade-in-then-out">

* En plus des propriétés `props` la fonction `setup()` expose d'autres values dans le gabarit pas son objet de retour. 

```
const AppButton = {
    template: '<button :style="position" @click.stop="remove">X</button>',
    props: ['position'],                    // lié au style
    setup() {
        return {
            remove: e => e.target.remove()  // déclenché par click
        };
    }
}
```


</div>

<div class="fragment fade-in-then-out">

* Le composant est déclaré auprès de l'application.
* Une application Vue est un composant racine.

``` [9]
Vue.createApp({
  setup() {
    const positions = Vue.ref([]);
    document.addEventListener('click', ({x, y}) =>
      positions.value.push({ left: `${x}px`, top: `${y}px` }));
    return { positions };
  }
})
.component('app-button', AppButton)
.mount('#app');
```

</div>

<div class="fragment fade-in-then-out">

* Une fois déclaré, le composant peut être utilisé dans les gabarits d'autres composants.
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
