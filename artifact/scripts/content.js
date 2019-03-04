// Create and append a CSS.
const newStyle = document.createElement('style');
newStyle.type = "text/css";
document.getElementsByTagName('head').item(0).appendChild(newStyle);

// Append the target button display style.
const css = document.styleSheets.item(0)
const index = document.styleSheets[0].cssRules.length;
css.insertRule("div.post-merge-message a.btn { display: none; }", index);
