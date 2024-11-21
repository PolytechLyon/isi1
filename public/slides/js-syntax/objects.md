#### JavaScript
### Les objets

<div class="r-stack">

<div class="fragment fade-out" data-fragment-index="1">

* Un objet est une collection des variables (données) et fonctions (traitements), appelées membres
  * Les variables sont appelées propriétés
  * Les fonctions sont appelées méthodes


</div>
<div class="fragment fade-in-then-out" data-fragment-index="1">

* Chaque membre est déclaré comme une paire clé-valeur, séparée par des deux-points
* Les membres sont séparés par virgules
* Le tout entouré par des accolades 

```javascript
const person = {
    name: 'John',
    greet: function () {
        console.log(`Hi, this is ${this.name}`);
    }
}
```


</div>

<div class="fragment fade-in-then-out" data-fragment-index="2">

* Syntaxe concise pour déclarer une propriété
  * Si clé égale l'identifiant d'une variable locale
* Syntaxe concise pour déclarer une méthode

```javascript [3-4]
const name = 'John'
const person = {
    name,
    greet() {
        console.log(`Hi, this is ${this.name}`);
    }
}
```

</div>

<div class="fragment fade-in-then-out" data-fragment-index="3">

* Les clés (noms des membres) peuvent être dynamiques : syntaxe entre crochets `[]`

```javascript [5,6]
const lang = 'fr';
const nameKey = lang === 'fr' ? 'nom' : 'name';
const greetKey = lang === 'fr' ? 'saluer' : 'greet';
const person = {
    [nameKey]: 'John',
    [greetKey]() {
        console.log(`Hi, this is ${this.name}`);
    }
}
```

</div>

<div class="fragment fade-in-then-out" data-fragment-index="4">

* Accès aux members avec un point : nom static
* Ou avec crochets : nom dynamique

```javascript [7-10]
const person = {
  name: 'John',
  greet() {
    console.log(`Hi, this is ${this.name}`);
  }
}
console.log(person.name);       // John
console.log(person['name']);    // John
person.greet();                 // Hi, this is John
person['greet']();              // Hi, this is John
```

</div>

<div class="fragment" data-fragment-index="5">

* Décomposition d'objet
* Les méthodes ne seront plus attachées à l'objet <!-- .element class="fragment" data-fragment-index="6" -->

<pre><code
  class="javascript language-javascript"
  data-trim
  data-noescape
  data-line-numbers="|11"
  data-fragment-index="6">
const person = {
  firstname: 'John',
  lastname: 'Smith',
  greet() {
    console.log(`Hi, this is ${this.firstname}`);
  },
}
const { firstname, lastname: surname, greet } = person;
console.log(firstname);         // John
console.log(surname);           // Smith
greet();                        // Hi, this is undefined
person.greet();                 // Hi, this is John
</code></pre>

</div>

</div>
