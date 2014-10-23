
// Full list of configuration options available here:
// https://github.com/hakimel/reveal.js#configuration
Reveal.initialize({
    controls: true,
    progress: true,
    history: true,
    center: true,

    theme: Reveal.getQueryHash().theme, // available themes are in /css/theme
    // transition: Reveal.getQueryHash().transition || 'default', // default/cube/page/concave/zoom/linear/fade/none
    transition: 'linear',
    // Parallax scrolling
    parallaxBackgroundImage: 'images/storm3.jpg',
    parallaxBackgroundSize: '2991px 980px',

    // Optional libraries used to extend on reveal.js
    dependencies: [
        // build:js lib/js/classList.js
        { src: 'bower_components/reveal.js/lib/js/classList.js', condition: function() { return !document.body.classList; } },
        // endbuild
        // build:js plugin/markdown/marked.js
        { src: 'bower_components/reveal.js/plugin/markdown/marked.js', condition: function() { return !!document.querySelector( '[data-markdown]' ); } },
        // endbuild
        { src: 'plugin/markdown/markdown.js', condition: function() { return !!document.querySelector( '[data-markdown]' ); } },
        // build:js plugin/highlight/highlight.js
        { src: 'bower_components/reveal.js/plugin/highlight/highlight.js', async: true, callback: function() { hljs.initHighlightingOnLoad(); } },
        // endbuild
        // build:js plugin/zoom-js/zoom.js
        { src: 'bower_components/reveal.js/plugin/zoom-js/zoom.js', async: true, condition: function() { return !!document.body.classList; } },
        // endbuild
        // build:js plugin/notes/notes.js
        { src: 'bower_components/reveal.js/plugin/notes/notes.js', async: true, condition: function() { return !!document.body.classList; } }
        // endbuild
    ]
});
