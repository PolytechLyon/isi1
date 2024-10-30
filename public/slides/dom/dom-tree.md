### DOM
## Arborescence
<div class="r-stack">

<div class="fragment fade-out" data-fragment-index="1">

```html
<!DOCTYPE html>
<html lang="en">
  <head><meta charset="UTF-8"><title>DOM</title></head>
  <body>
    <h1 class="focus">Le modèle objet de document</h1>
    <main id="course">
        Le <span class="focus">DOM</span> est
      une réprésentation <em>arborescente</em>.
    </main>
  </body>
</html>
```

</div>

<div class="fragment" data-fragment-index="1">

```
  html
  ├ head
  │ ├ meta[charset="UTF-8"]  
  │ └ title
  └ body
    ├ h1.focus
    └ main#course
      ├ span.focus
      └ em
```

</div>

</div>
