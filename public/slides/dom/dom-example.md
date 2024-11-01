#### DOM
### Démo

<div class="r-stack">
<div class="fragment fade-out" data-fragment-index="3">

<pre><code
    class="javascript language-javascript"
    data-trim
    data-noescape
    data-line-numbers="[|1, 6, 11, 15, 20]"
    data-fragment-index="1">
const body = document.querySelector('body');
document.addEventListener('click', pop);

function pop(event) {
    const x = event.x, y = event.y;
    const button = document.createElement('button');
    button.innerText = 'X';
    button.style.left = `${x}px`;
    button.style.top = `${y}px`;
    button.addEventListener('click', event => {
        button.remove();
        event.stopPropagation();
    })
    body.append(button);
}
</code>
</pre>

</div>
<div class="fragment fade-in-then-out" data-fragment-index="3">

```css
button { position: absolute; }
```

```html [8-10]
<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <title>Buttons</title>
    <link rel="stylesheet" href="style.css" />
</head>
<body>
    <script src="app.js"></script>
</body>
</html>
```

</div>
<div class="fragment">
Result

<div>
<iframe style="min-height: 400px; min-width: 600px" src="../../code/dom-manipulation-example.html"></iframe>
</div>

</div>

</div>
