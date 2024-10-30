### DOM
## Example

<div class="r-stack">
<div class="fragment fade-out" data-fragment-index="3">

<pre><code
    class="javascript language-javascript"
    data-trim
    data-noescape
    data-line-numbers="[|1, 4, 13, 16]"
    data-fragment-index="1">
const body = document.querySelector('body');
function onMouseClick(event) {
    const x = event.x, y = event.y;
    const button = document.createElement('button');
    button.innerText = 'X';
    button.style.position = 'absolute';
    button.style.left = `${x}px`;
    button.style.top = `${y}px`;
    button.addEventListener('click', event => {
        button.remove();
        event.stopPropagation();
    })
    body.append(button);
}

document.addEventListener('click', onMouseClick);
</code>
</pre>

</div>
<div class="fragment" data-fragment-index="3">
Result

<div>
<iframe style="min-height: 400px; min-width: 600px" src="../../code/dom-manipulation-example.html"></iframe>
</div>

</div>

</div>
