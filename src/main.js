import Reveal from 'reveal.js';
import RevealMarkdown from 'reveal.js/plugin/markdown/markdown';
import RevealHighlight from 'reveal.js/plugin/highlight/highlight';
import RevealNotes from 'reveal.js/plugin/notes/notes';

function createCodeIcons(example, height, width) {
    return `
        <iframe style="min-height: ${height}px; min-width: ${width}px" src="code/${example}/index.html"></iframe>
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
                    <img src="images/view.svg" alt="Afficher"/>
            </a>
        </div>
    `;
}

Reveal.initialize({
    hash: true,
    plugins: [ RevealMarkdown, RevealHighlight, RevealNotes ],
    navigationMode: 'linear',
}).then(() => {
    console.log('On document load');
    document.querySelectorAll('.reveal section [data-code-example]').forEach(codeExampleElement => {
        const example = codeExampleElement.getAttribute('data-code-example');
        if (!example) return;
        const size = codeExampleElement.getAttribute('data-code-example-size');
        const height = size === 'big' ? 400 : 25;
        const width = size === 'big' ? 600 : 100;
        codeExampleElement.innerHTML += createCodeIcons(example, height, width);
    });
    Reveal.sync();
});
