import Reveal from 'reveal.js';
import RevealMarkdown from 'reveal.js/plugin/markdown/markdown';
import RevealHighlight from 'reveal.js/plugin/highlight/highlight';
import RevealNotes from 'reveal.js/plugin/notes/notes';

Reveal.initialize({
    hash: true,
    plugins: [ RevealMarkdown, RevealHighlight, RevealNotes ],
    navigationMode: 'linear',
});
