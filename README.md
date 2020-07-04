# steptip.js
steptip.js is a lightweight JavaScript library for adding tooltips for a stylish interactive tutorials.

### Docs
**Step 1:**

Add **steptip.min.js** inside your HTML header
```html
<head>
    <script src="https://tomocode.github.io/steptipjs/steptip.min.js"></script>
    <link rel="stylesheet" href="https://tomocode.github.io/steptipjs/steptip.css">
</head>
```

**Step 2:**

Add elements to have the tutorial tooltips:
```js
steptip.tooltip(element,message,order,theme);
```
_Example:_
```js
steptip.tooltip(document.getElementById("firstElement"),"This is first tutorial tooltip!",1,"light");

steptip.tooltip(document.getElementById("secondElement"),"This is second and last tutorial tooltip!",2,"dark");
```

**Step 3:**

Start the tutorial by calling a **steptip** function:
```js
steptip.startTutorial();
```
