# Glide Theme

A multi-purpose theme of HTML, CSS, and JS templates.
[See live demo](http://ui.maurojflores.com/glide/dist/)

## Setup
* Download, or fork & clone repo

* Install dependencies
```text 
npm install
``` 
* Create bundle for production
```text 
npm run build
```
* Start development server 
```text
npm start
```

## File structure
```text
root
* dist
  * img
    * (all images)
  * js
    * script.js
  * index.html
  * all html templates...
* src
  * js
    * lib
    * scripts
      * generals
      * landing
      * portfolio
      * portfolio-single
    * index.js
  * sass
    * components
      * components partials
    * generals
      * _vars.sass
      * _mixins.sass
      * (all partials for general styles and utility classes)
    * elements-ref
      * (all partials for elements reference page)
    * landing-page
      * (all partials for landing page)
    * generic-page
      * (all partials for generic page)
    * portfolio
      * (all partials for portfolio page)
    * portfolio-single
      * (all partials for single portfolio project page)
    * style.sass
```

