#### Vue.js
### Composant mono-fichier

<div class="r-stack">

<div class="fragment fade-out" data-fragment-index="2">

* Un format de fichier spécial qui permet le regroupement de :
  * Gabarit du composant (HTML)
  * Logique du composant (JavaScript)
  * Style du composant (CSS)
* Aussi appelé SFC (Single-file component)
<li class="fragment" data-fragment-index="1">
 <strong>Nécessite une phase de compilation</strong>
</li>

</div>

<div class="fragment fade-in-then-out" data-fragment-index="2">

* Extension `.vue`
* Structure

```vue
<script>
</script>

<template>
</template>

<style>
</style>
```

</div>

<div class="fragment fade-in-then-out" data-fragment-index="3">

* Template en HTML

```vue
<template>
  <div>
    <button
        v-for="position in positions"
        :style="position"
        @click.stop="$event.target.remove()">X</button>
  </div>
</template>
```

</div>

<div class="fragment fade-in-then-out">

* Style avec portée limitée au composant

```vue
<style scoped>
  button  { position: absolute; }
</style>
```

</div>

<div class="fragment fade-in-then-out">

* Logique qui expose la fonction `setup`

<div data-external-example="https://play.vuejs.org/#eNqNU9uK2zAQ/RUhFuKA6zy0T1ln6YU8tPRGL1CoCuu1x1ntypLQxXUI/veO5PhSWMIKP2hmzsycMx6d6Buts9YD3dLcloZrd8Mkb7QyjpyIgTolSn5SXjqowvWnbAaD9KQ2qiErTF4xySR0MamCuvACk5kkeCw4r5P1aIZTKmkd0cpyx/FKdqFN8vvP+nrG1F6WIYownZxIl5Ij6f+rEs5UI2sL4SHT3t4jWkDttuT26tT1urtNiVM6msdgYplFn36+TjITpLvDKcx9KlX6BqTLiqrat3j5yK0DCSZZlYKXj6s08FwvCy8mdaGegUa18MySBkdpJP6VeXT9OYwy8Ms30x9Ew0GjReEgds4r3p4p5HfeOYWIoWr7olZmx+hYlPAw9HMDRkfY1rqjgAVuDr2OhDOLY8b4FQQ1mSvMAUaByZrRm1/5Zug8ENoMjPLNgieasQ2xpdJQoWfIIAvRW1LcWSW8g+sgGzWHDITSlDrMkzU/ZA9WSdzouC6MlqrRXID5os+ituMiMVoIof5+iD5nPKSjv7yH8vEJ/4Ptgo/RrwYsmBYYnWKD5iG8//4ZOrxPwUZVXiD6QvAbRGFxuAH21ssKaS9wke37+Dq5PPyw+w53xo6iAtGA7COeUXyZ7y5In+m+zF7FPNwi2v8DH6RTKA=="></div>

```vue
<script>
  import { ref, onMounted, onUnmounted } from 'vue'

  export default {
    setup() {
      const positions = ref([]);
      function pop({ x, y }) {
        positions.value.push({ left: `${x}px`, top: `${y}px` });
      }
      onMounted(() => document.addEventListener('click', pop));
      onUnmounted(() => document.removeEventListener('click', pop));
      return { positions };
    }
  }
</script>
```

</div>
<div class="fragment fade-in-then-out">

* Logique simplifiée avec l'attribut `setup`

<div data-external-example="https://play.vuejs.org/#eNqFU9tunDAQ/ZWRFWlBouxD+0TYqBftQ6ve1ItUqa4UAsPGCdiWL5QV4t87NmGzD1HK01zOGZ8z2BN7o3U+eGQFK21thHZg0Xl9xaXotTIOJjDYZqDkJ+WlwyaEP2W/JDBDa1QPGxqx4ZLLWknrQCsrnKAQdoGd/P6TXnLZelmHKrV1MsGYwRHmFCYugb4TJx+qzmOuvb0lVIetK+D6YhpnPV5n4JSO6TGkRKe5M5cndUmSwo7EAzSq9j1Kl1dNsx8o+CisQ4km2dSdqO83WdCRhgFnhp7gG+zVgP8ZUW6X7RGVEoe97iqHcVDZiCEGFN545xQhQgIwvGiV2XG2WgcRdvOwBs5WWGHdscMz3GPrddSRW9oK9S8wiMxdZQ646k5Szq5+ldvl5EXQdlFUbs90UhqPAVsrjQ1VFgbQBVjPLaC6sarzDi+Blk6eA4OgLGOOeLIVh/zOKkm3Kf5VzmrVa9Gh+aIfTBXr/+as6jr190OsOeMxW+v1Ldb3T9Tv7BhqnH01aNEMyNmpt3he2vvvn3Gk+NTsVeM7Qj/T/IbRWFxugL31siHZZ7io9n18E0Ieftj9SFfBrqaC0ICcI54zeg/vnrH+KPdl/iry6Bqz+R/RzzUT"></div>

```vue
<script setup>
  import { ref, onMounted, onUnmounted } from 'vue'

  const positions = ref([]);
  function pop({ x, y }) {
    positions.value.push({ left: `${x}px`, top: `${y}px` });
  }
  onMounted(() =>
          document.addEventListener('click', pop));
  onUnmounted(() =>
          document.removeEventListener('click', pop));
</script>
```

</div>

<div class="fragment fade-in-then-out">

* Déclarer les props avec `defineProps()`

<div data-external-example="https://play.vuejs.org/#eNp9kk1r3DAQhv/KIAr2wtZ7aE+uN7Qpe2gpbWh7KMSFOPZ4o8SWhCQ7Xoz/e0byx+6GsDpJ845ezYyenn1RKmobZDFLTK65smDQNuoqFbxWUlvoQWMJA5Ra1hBQarBIdPe6sVaKSYw2S8R5Bp9SkUthLChpuOW0ha1zC2//r0grZN7UKGyUFcWupc0PbiwK1GGQVzx/CtYQ9t0aDsMKtlQQ+LV4RW1WNRipxjyEPVRY2hju3vXdoLq7NVip/PHgjjCs3IPJZmyRvOhgsVZVZnFyTo7dtO9Lqbcpm58CLo7Ppgzi+XCSQ+ENOSWbE1u2ZtbQBEq+jx6NFDTk3j2WslzWileof6nJMwavOC2rKvn83cesbnA9x/MHzJ/eiD+azsVSdqPRoG4xZYtmM71HO8q7Pz+xo/0i1rJoKsq+IP5GI6tm7M+lXTeioLJP8ny13zwPXOz/ml1HX2jmplyhLnPw+SkjKr5eaP1Y7ofoo7+XioGmeIbVJVQLLLnAGy2VOUPW0XaUwttg/rbAkzhSqrGWLRKiITrgAKOxnmgUwlcInQOU3I/sxMYeKjwH47PHOTLEJAmjW8qu/iWb8dJrbhLvQZvJs1/oiyG79z+CbjRUzJTIhhfUjE4f"></div>

```vue
<script setup>
import { defineProps } from 'vue';
defineProps(['position']);
const remove = (e) => e.target.remove();
</script>

<template>
  <button :style="position" @click.stop="remove">X</button>
</template>

<style>
button { position: absolute }
</style>
```

</div>

<div class="fragment fade-in-then-out">

* Les composants importés sont automatiquement enregistrés localement

<div data-external-example="https://play.vuejs.org/#eNp9kk1r3DAQhv/KIAr2wtZ7aE+uN7Qpe2gpbWh7KMSFOPZ4o8SWhCQ7Xoz/e0byx+6GsDpJ845ezYyenn1RKmobZDFLTK65smDQNuoqFbxWUlvoQWMJA5Ra1hBQarBIdPe6sVaKSYw2S8R5Bp9SkUthLChpuOW0ha1zC2//r0grZN7UKGyUFcWupc0PbiwK1GGQVzx/CtYQ9t0aDsMKtlQQ+LV4RW1WNRipxjyEPVRY2hju3vXdoLq7NVip/PHgjjCs3IPJZmyRvOhgsVZVZnFyTo7dtO9Lqbcpm58CLo7Ppgzi+XCSQ+ENOSWbE1u2ZtbQBEq+jx6NFDTk3j2WslzWileof6nJMwavOC2rKvn83cesbnA9x/MHzJ/eiD+azsVSdqPRoG4xZYtmM71HO8q7Pz+xo/0i1rJoKsq+IP5GI6tm7M+lXTeioLJP8ny13zwPXOz/ml1HX2jmplyhLnPw+SkjKr5eaP1Y7ofoo7+XioGmeIbVJVQLLLnAGy2VOUPW0XaUwttg/rbAkzhSqrGWLRKiITrgAKOxnmgUwlcInQOU3I/sxMYeKjwH47PHOTLEJAmjW8qu/iWb8dJrbhLvQZvJs1/oiyG79z+CbjRUzJTIhhfUjE4f"></div>

```vue [3, 10]
<script setup>
  import { ref } from 'vue'
  import AppButton from './AppButton.vue';
  const positions = ref([]);
  document.addEventListener('click', ({ x, y }) =>
          positions.value.push({ left: `${x}px`, top: `${y}px` }));
</script>

<template>
  <AppButton v-for="position in positions" :position="position" />
</template>
```

</div>

<div class="fragment fade-in">

* Avantage
  * Meilleure lisibilité du code
  * Gabarits compilés en avance
  * Style avec portée limitée au composant
  * Enregistrement automatique et optimisé 
* Inconvénients
  * Phase de compilation obligatoire

</div>

</div>
