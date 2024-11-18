import Reveal from 'reveal.js';
import RevealMarkdown from 'reveal.js/plugin/markdown/markdown';
import RevealHighlight from 'reveal.js/plugin/highlight/highlight';
import RevealNotes from 'reveal.js/plugin/notes/notes';

function createDemoFrame(element) {
    const example = element.getAttribute('data-code-example');
    if (!example) return;
    const size = element.getAttribute('data-code-example-size');
    size && element.classList.add(size);
    element.innerHTML += `
        <iframe src="code/${example}/index.html"></iframe>
        <div class="icons">
            <a
                href='https://github.com/PolytechLyon/isi1/tree/master/public/code/${example}'
                class="icon"
                target="_blank">
                    <img src="images/github.svg" alt="GitHub"/>
                </a>
            <a
                href='code/${example}/index.html'
                class="icon"
                target="_blank">
                    <img src="images/preview.svg" alt="Afficher"/>
            </a>
        </div>
    `;
}

function createCodeIcons(element) {
    const externalExample = element
        .parentElement
        .previousElementSibling?.getAttribute('data-external-example');
    const externalLink = externalExample ? `<a
                href='${externalExample}'
                target="_blank">
                <img
                    src="images/view.svg"
                    alt="Exemple extèrne" />
          </a>` : '';
    element.innerHTML += `<div class="icons">
            <a
                onclick="navigator.clipboard.writeText(event.target.closest('code')?.innerText)">
                <img src="images/copy.svg" alt="Copier" />
            </a>
            ${externalLink}
        </div>`;
}

Reveal.initialize({
    hash: true,
    plugins: [ RevealMarkdown, RevealHighlight, RevealNotes ],
    navigationMode: 'linear',
}).then(() => {
    document.querySelectorAll('.reveal section [data-code-example]').forEach(createDemoFrame);
    document.querySelectorAll('.reveal section pre code').forEach(createCodeIcons);
    Reveal.sync();
});
