#### Vue.js
### Syntaxe de gabarit

<div class="r-stack">

<div class="fragment fade-out" data-fragment-index="1">

* Les gabarits sont des fragments HTML
  * Valides syntaxiquement
* Ils permettent de lier le DOM avec l'instance du composant rendu

</div>

<div class="fragment fade-in-then-out" data-fragment-index="1">

* Interpolation du texte, syntaxe moustache

```html
  <div id="app">
    <h1>{{ greeting }}</h1>
  </div>
```

<div>
    <iframe style="min-height: 25px; min-width: 100px" src="code/vue-moustache/index.html"></iframe>
</div>


</div>

<div class="fragment fade-in-then-out">

* Liaison d'attributs d'element HTML 

```html
  <div id="app">
    <progress :value="progress"></progress>
  </div>
```

<div>
    <iframe style="min-height: 25px; min-width: 100px" src="code/vue-attribute-binding/index.html"></iframe>
</div>


</div>

<div class="fragment fade-in-then-out">

* Liaison d'événement

```html
  <div id="app">
    <button @click="toggleText()">{{ text }}</button>
  </div>
```

<div>
    <iframe style="min-height: 25px; min-width: 100px" src="code/vue-event-binding/index.html"></iframe>
</div>


</div>

<div class="fragment fade-in-then-out">

* Directives `v-if` et `v-else`

```html
  <div id="app">
    <button @click="show = !show">{{ show ? 'Hide' : 'Show' }}</button>
    <div v-if="show">Secret</div>
    <div v-else>******</div>
  </div>
```

<div>
    <iframe style="min-height: 25px; min-width: 100px" src="code/vue-if-else/index.html"></iframe>
</div>


</div>


<div class="fragment fade-in">

* Directive `v-for`

```html
  <div id="app">
    <ul>
      <li v-for="color in ['red', 'blue', 'green']" :key="color">
        <span :style="{ color }">{{ color }}</span>
      </li>
    </ul>
  </div>
```

<div>
    <iframe style="min-height: 25px; min-width: 100px" src="code/vue-for/index.html"></iframe>
</div>


</div>



</div>

