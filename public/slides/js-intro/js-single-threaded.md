#### Javascript
### Non concurrent
* Un seul fil d'exécution par contexte global (realm)
* Appels asynchrones possibles
  * En utilisant des fonctions de rappel (callbacks)

```javascript
console.log("one");
setTimeout(() => console.log("two"), 0); // zéro attente
alert();                                 // rare appel bloquant
console.log("three");
```

<pre class="fragment"><code data-trim>
> one
  three
  two
</code></pre>



