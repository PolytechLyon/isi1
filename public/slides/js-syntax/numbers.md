#### JavaScript
### Les chiffres

<div class="r-stack">

<div class="fragment fade-out" data-fragment-index="1">

* Les chiffres en JavaScript sont des réels (flottant) sur 8 octets (double précision)
* Chiffres spéciaux : `Infinity`, `NaN`
```javascript
1 / 0 === Infinity;     // true
0 / 0;                  // NaN
0 / 0 === NaN;          // false
NaN !== NaN             // true
isNaN(0 / 0);           // true
```

</div>

<div class="fragment fade-in-then-out" data-fragment-index="1">

* Le type BigInt peut être utilisé pour les grands entiers

```javascript
const x = BigInt(Number.MAX_SAFE_INTEGER) + 1n;
x;                  // 9007199254740992n
typeof x;           // bigint
```

</div>

<div class="fragment">

* Opérateurs arithmétiques : `+`, `-`, `*`, `/`, `**`, etc.
  ```javascript
  const divisionReelle = 3 / 2;         // 1.5
  const exponentiation = 2 ** 3;        // 8
  ```
* Affectation : `++`, `--`, `+=`, `-=`, `*=`, `/=`, `**=`, etc.
  ```javascript
  let x = 1;
  ++x;                                  // 2
  ```

</div>

</div>
