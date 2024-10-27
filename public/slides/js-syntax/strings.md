#### JavaScript
### Les chaînes caractères

<div class="r-stack">

<div class="fragment fade-out" data-fragment-index="1">

* Une valeur de type `string` peut être créée en utilisant des simples quotes ou des doubles quotes.
```javascript
const hi = "Hi";
const hello = 'Hello';
hi;                         // Hi
hello;                      // Hello
typeof hi;                  // string
typeof hello;               // string
```

</div>

<div class="fragment fade-in-then-out" data-fragment-index="1">

* Une valeur de type `string` peut être créée en utilisant l'accent grave
* Cela permet que la chaîne de caractère s'étale sur plusieurs lignes
* De plus, la même chaîne caractère fait office d'un *gabarit*, qui peut contenir d'autre expression

```javascript [2-3]
const name = 'John';
const greeting = `Hello ${name},
Have a nice day.`;
```

</div>

<div class="fragment">

* Les chaînes caractères sont immutables
* Différents opérations et opérateurs possibles

```javascript
const str = 'Hello World';
str + '!';                  // Hello Word!
str.length;                 // 11
str[4];                     // o
str.split(' ')              // ['Hello', 'World']
```

</div>

</div>
