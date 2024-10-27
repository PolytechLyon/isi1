#### JavaScript
### Les booléens

<div class="r-stack">

<div class="fragment fade-out" data-fragment-index="1">

* Deux valeurs possibles : `true` et `false`
* Opérateurs logiques : `&&`, `||`, `!`
* Affectation `&&=`, `!!=`
```javascript
typeof true;        // boolean
typeof false;       // boolean
!true;              // false
let b = false;
b ||= (typeof 42 === 'number');
const str = 'Hi';
str !== '' && console.log(str);
```

</div>

<div class="fragment" data-fragment-index="1">

* Lorsqu'une condition est attendue : 
  * Les valeurs suivantes s'évalueront à **faux** : `false`, `undefined`, `null`, `NaN`, `0`, `-0`, `0n`, `''`, 
  * Toutes les autres valeurs s'évalueront à **vrai**

```javascript
const str = 'Hi';
if (str) {
    console.log(str);
}
```
</div>

</div>
