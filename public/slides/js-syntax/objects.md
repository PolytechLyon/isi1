#### JavaScript
### Les objets

<div class="r-stack">

<div class="fragment fade-out" data-fragment-index="1">

* Un objet est une collection des variables (données) et fonctions (traitement), appelées membres
  * Les variables sont appelées propriétés
  * Les fonctions sont appelées méthodes


</div>
<div class="fragment fade-in-then-out" data-fragment-index="1">

* Chaque membre est une paire clé-valeur, séparée par des deux-points
* Les membres sont séparés par virgules

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

* Une syntaxe concise pour déclarer une méthode

```javascript [3-5]
const person = {
    name: 'John',
    greet() {
        console.log(`Hi, this is ${this.name}`);
    }
}
```

</div>

<div class="fragment fade-in-then-out" >

* Les clés (noms des membres) peuvent être dynamiques : syntaxe entre crochet `[]`

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

<div class="fragment" >

* Accès aux members avec un point : nom static
* Ou avec crochet : nom dynamique

```javascript [5,6]
const person = {
  name: 'John',
  greet() {
    console.log(`Hi, this is ${this.name}`);
  }
}
console.log(person.name);       // John
console.log(person['name']);    // John
person.greet()                  // Hi, this is John
person['greet']()               // Hi, this is John
```

</div>

</div>
