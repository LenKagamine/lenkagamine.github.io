---
layout: project
title: xkcd explainer
description: Chrome extension for xkcd
tools: Javascript, CSS, Chrome
github: xkcd-explainer
link: https://chrome.google.com/webstore/detail/xkcd-explainer/foejkfobkipagoaicljcokpdbdldfmdn
date: 2016-07-27
---

### About

xkcd explainer is a Chrome extension that inserts explanations of [xkcd comics](https://xkcd.com/) directly next to the comic itself. The explanations are retrieved from the [explain xkcd wiki](http://www.explainxkcd.com/).

I'm a fan of xkcd and enjoy reading new comics when they come up (and noticing how relevant xkcd comics can be in real life). Some comics contain hidden references to something historic and obscure, usually in the title text, and leaves me unable to fully appreciate the humor of the comic. The explain xkcd wiki helped uncover many questions I've had, but it was slightly cumbersome having to switch to the wiki page in order to understand.

I've also always wanted to make a Chrome extension before, and was curious what went into making one. So, I made this extension to allow a seamless transition between comic and explanation, and also get a taste for developing a Chrome extension.

### Development

Using Javascript, the explanation is retrieved from the respective comic's wiki page as wikitext (done in `main.js`). `parser.js` is a wikitext parser which goes through the markup line by line, replacing any wikitext syntax with the corresponding HTML, for example: `== Hello world ==` becomes `<h2>Hello world</h2>`.

An "Explanation" button is inserted into the xkcd page right below the navigation buttons, which toggles the explanation from showing on the page.
