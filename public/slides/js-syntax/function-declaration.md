#### JavaScript
### Les fonctions

<div class="r-stack">

<div class="fragment fade-out" data-fragment-index="1">

* Avec le mot clé `function`

```javascript
function f() {
    colsole.log('Hello world');
}

f();                        // on appel la fonction
```

</div>
<div class="fragment fade-in-then-out" data-fragment-index="1">

* Une fonction peut prendre une liste des paramètres

```javascript
function f(a, b) {
    colsole.log(a + b);
}

f(1, 2);                    // appel avec paramètres
```

</div>

<div class="fragment fade-in-then-out" data-fragment-index="2">

* Une fonction peut retourner une valeur

```javascript
function f(a, b) {
    return a + b;
}

const sum = f(1, 2);        // appel et affectation
```

</div>

<div class="fragment fade-in-then-out" data-fragment-index="3">

* La fonction est un objet de première classe en JavaScript
* Elle peut être déclarée avec une expression, et affectée à une variable

```javascript
const f = function(a, b) {
    return a + b;
}

const sum = f(1, 2);        // appel et affectation
```

</div>
<div class="fragment" data-fragment-index="4">

* La déclaration est hissée en haut de la portée

```javascript
const sum = f(1, 2);        // appel avant la déclaration possible
function f(a, b) {
    return a + b;
}
```

* Mais pas l'expression de fonction

```javascript
const f = function(a, b) {
    return a + b;
}
const sum = f(1, 2);        // appel uniquement après déclaration
```

</div>
</div>
