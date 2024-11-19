#### Vue.js
### Les composants

<div class="r-stack">

<div class="fragment fade-out" data-fragment-index="1">

* L'interface utilisateur (page Web) est décomposée de plusieurs composants.
* Un composant est un élément isolé et réutilisable de la page Web.
* Les composants sont organisés dans une structure arborescente, avec un composant racine.

</div>

<div class="fragment fade-in-then-out" data-fragment-index="1">

* Un composant Vue peut avoir :
  * Un gabarit (propriété `template`)
  * Une logique (méthode `setup()`)
  * Un ensemble des attributs qui peuvent lui être affectées (propriété `props`)
  * Un ensemble des événements qu'il peut émettre (propriété `emits`)

</div>

<div class="fragment fade-in-then-out" data-fragment-index="2">

* Accessibles depuis le gabarit sont :
  * Les propriétés `props` de composant
  * Les éléments de l'objet de retour de `setup()`

```javascript
const AppButton = {
    template: `<button :style="position" @click.stop="remove">X</button>`,
    props: ['position'],
    emits: ['remove'],
    setup: (props, ctx) => ({
        remove: () => ctx.emit('remove', props.position),
    }),
}
```


</div>

<div class="fragment fade-in" data-fragment-index="3">
<div class="fragment fade-out" data-fragment-index="5">

<div class="r-stack">
<div>

* Le composant est enregistré auprès de l'application, ou les composants qui l'utilisent. <!-- .element class="fragment fade-out" data-fragment-index="4"  -->

</div>
<div>

* Une application Vue est le composant racine. <!-- .element class="fragment" data-fragment-index="4"  -->

</div>
</div>

<pre><code
  class="javascript language-javascript"
  data-trim
  data-noescape
  data-line-numbers="13|1-12"
  data-fragment-index="4">
createApp({
    setup() {
        const positions = ref([]);
        const drop = ({ left, top }) => {
            const notSame = p => p.left !== left || p.top !== top;
            positions.value = positions.value?.filter(notSame);
        }
        document.addEventListener('click', ({x, y}) =>
            positions.value.push({ left: `${x}px`, top: `${y}px` }));
        return { positions, drop };
    }
})
.component('app-button', AppButton)
.mount('#app');
</code></pre>

</div>
</div>

<div class="fragment fade-in-then-out" data-fragment-index="5">

* Une fois enregistré, le composant peut être utilisé dans les gabarits d'autres composants.
* Pour passer les attributs : `:nom="valeur"`
* Pour écouter les événements : `@nom="fonction"` 

``` [2-5]
  <div id="app">
    <app-button
            v-for="position in positions"
            :position="position"
            @remove="drop" />
  </div>
```


</div>

<div class="fragment fade-in-then-out" data-fragment-index="6">

Résultat

<div data-code-example="vue-component" data-code-example-size="big"></div>


</div>

<div class="fragment fade-in-then-out" data-fragment-index="7">

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
</div>

<div class="fragment fade-in-then-out" data-fragment-index="8">

Résultat

<div data-code-example="vue-lifecycle-hooks" data-code-example-size="big"></div>


</div>

</div>
