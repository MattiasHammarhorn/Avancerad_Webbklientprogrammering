to install locally, in the folder containing package.json, do:
npm install

this makes npm check the relevant node modules in the package.json and installs them. (React, React-router-dom, React-strap, etc)

This is NOT a start of the lab4, but it is showing you the techniques you'll need to be able to complete lab4:

* passing objects and variables via props down to child element

* passing data up to parent elements by passing a function down to child element (as we did with the price sum).

* install npm-package (reactstrap)

* routing

* get data from JSON

Tip: when you make your own project for lab4, make App.js the parent react-component, and have it manage the data from JSON and user input (sum, chosen options) but only render a empty div. This way it only gets rendered once, and the state persists. In my sollution Navigation is the parent react-component, which doesn't make sense.

good luck!

