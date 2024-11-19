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

* Déclarer les attributs avec `defineProps()`
* Déclarer les événements avec `defineEmits()`

<div data-external-example="https://play.vuejs.org/#eNqFU99vmzAQ/lc8axJEYuRhe8qSbOuUh037Ua2bNKlMKoWjdQu2ZRtGRPnfd7aBkK5KecG+++67O993Hf0gZdzUQFd0rTPFpCEaTC23CSeEVVIoQzqioIiI4F9FzQ3k9viLV/5CelIoUZEASYJZEPKe1cYIPrjj5WSx+YK3FpsJrg2RQjPD8Eg2NlN4+Wcx8+ZKSHSEHSmhMBExeO0XZLMlnQWNMC7MRVoBIhG9JTK2aPJis3Fh5OEBTTbUWvDvEpBD6rhJy9pFH1vexQUrDahw4PeV9fPih+raiOx9YZ76P/JY1vp2aGNFrl52bS/bK9eQu+7tFRlchumxw9D1mousroCbOM3zXYOHL0wb4FhYkJUsuw8iW8liDJ7G8zhcQSUaeIZhvfRSwE7WBipZpgZcV+vDVJtXhVCbhI5NEsYPDSd0fAP8VqN5hk4oee9LQaOdMBqWNt1ylo9G1Gh85YLdxHdacNSoG3lCM1FJVoL6Lod0q1EMCU3LUvz97GxG1RCN9uwWsvsn7He6tbaEnivQoBpI6OQzqboB4927i2/Q4nlyViKvS0SfcP4ALcraN2xhZzXPsewZzlX7ya0M4zc/9a7FmeixKVuo05vDJxQX5+OJ1g/lvo7fDDrt8RWPNu+JTZ/2PIeCcTjHeehouOwqZvTRkqNABulbHIp/FhVeBuOIA7fFHglIMgEdIwL9/Ocwb7Hr5ERro8IRhuq0CeKR/rROr71IV9rsSyuxue6c2mONa4cOzx4uErr9vV76sMc6XDsWPAys3ST0FUmv3YTBPjWWMwBp/w+rXNHM"></div>

```vue
<script setup>
  import { defineProps, defineEmits } from 'vue';
  const props = defineProps(['position']);
  const emit = defineEmits(['remove']);
  const remove = () => emit('remove', props.position);
</script>
<template>
  <button :style="position" @click.stop="remove()">X</button>
</template>
<style>
  button { position: absolute }
</style>
```

</div>

<div class="fragment fade-in-then-out">

* Les composants importés sont enregistrés

<div data-external-example="https://play.vuejs.org/#eNqFU99vmzAQ/lc8axJEYuRhe8qSbOuUh037Ua2bNKlMKoWjdQu2ZRtGRPnfd7aBkK5KecG+++67O993Hf0gZdzUQFd0rTPFpCEaTC23CSeEVVIoQzqioIiI4F9FzQ3k9viLV/5CelIoUZEASYJZEPKe1cYIPrjj5WSx+YK3FpsJrg2RQjPD8Eg2NlN4+Wcx8+ZKSHSEHSmhMBExeO0XZLMlnQWNMC7MRVoBIhG9JTK2aPJis3Fh5OEBTTbUWvDvEpBD6rhJy9pFH1vexQUrDahw4PeV9fPih+raiOx9YZ76P/JY1vp2aGNFrl52bS/bK9eQu+7tFRlchumxw9D1mousroCbOM3zXYOHL0wb4FhYkJUsuw8iW8liDJ7G8zhcQSUaeIZhvfRSwE7WBipZpgZcV+vDVJtXhVCbhI5NEsYPDSd0fAP8VqN5hk4oee9LQaOdMBqWNt1ylo9G1Gh85YLdxHdacNSoG3lCM1FJVoL6Lod0q1EMCU3LUvz97GxG1RCN9uwWsvsn7He6tbaEnivQoBpI6OQzqboB4927i2/Q4nlyViKvS0SfcP4ALcraN2xhZzXPsewZzlX7ya0M4zc/9a7FmeixKVuo05vDJxQX5+OJ1g/lvo7fDDrt8RWPNu+JTZ/2PIeCcTjHeehouOwqZvTRkqNABulbHIp/FhVeBuOIA7fFHglIMgEdIwL9/Ocwb7Hr5ERro8IRhuq0CeKR/rROr71IV9rsSyuxue6c2mONa4cOzx4uErr9vV76sMc6XDsWPAys3ST0FUmv3YTBPjWWMwBp/w+rXNHM"></div>

```vue [3, 15-16]
<script setup>
  import { ref, onMounted, onUnmounted } from 'vue'
  import AppButton from './AppButton.vue';
  const positions = ref([]);
  const drop = ({ left, top }) => {
    const notSame = p => p.left !== left || p.top !== top;
    positions.value = positions.value?.filter(notSame);
  }
  const pop = ({ x, y }) =>
      positions.value.push({ left: `${x}px`, top: `${y}px` });
  onMounted(() => document.addEventListener('click', pop));
  onUnmounted(() => document.removeEventListener('click', pop));
</script>
<template>
  <AppButton v-for="position in positions"
         :position="position" @remove="drop" />
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
