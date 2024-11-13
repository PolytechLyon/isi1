import Reveal from 'reveal.js';
import RevealMarkdown from 'reveal.js/plugin/markdown/markdown';
import RevealHighlight from 'reveal.js/plugin/highlight/highlight';
import RevealNotes from 'reveal.js/plugin/notes/notes';

function createCodeIcons(example) {
    return `
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
                    <img src="images/view.svg" alt="Afficher"/>
            </a>
        </div>
    `;
}

function createCopyIcon() {
    return `<img
                src="images/copy.svg"
                alt="copier"
                class="icon"
                onclick="navigator.clipboard.writeText(event.target.parentElement.innerText).then()"/>`;
}

Reveal.initialize({
    hash: true,
    plugins: [ RevealMarkdown, RevealHighlight, RevealNotes ],
    navigationMode: 'linear',
}).then(() => {
    document.querySelectorAll('.reveal section [data-code-example]').forEach(codeExampleElement => {
        const example = codeExampleElement.getAttribute('data-code-example');
        if (!example) return;
        const size = codeExampleElement.getAttribute('data-code-example-size');
        codeExampleElement.innerHTML += createCodeIcons(example);
        size && codeExampleElement.classList.add(size);
    });

    document.querySelectorAll('.reveal section pre code').forEach(codeSnippetElement => {
        codeSnippetElement.innerHTML += createCopyIcon();
    });

    Reveal.sync();
});
