import React from 'react'

export default function ImportExport() {
    return(
    <>
    <p>------------------------------------------------------------------------------------------</p>
<h1>Import and Exporting Components</h1>
<p>
You can export a component into its own file, and then import that component from another file<br />
<br />
You can create components that are composed of other components<br />
<br />
The root component file is usually the 'index.js' file, which is responsible for rendering the top-level 'App' Component into the DOM, typically using 'ReactDOM.render'<br />
<br />
When importing a file you don't need to add the '.js' part. Example: './Gallery.js' or './Gallery' either will work with React<br />
<br />
There are two primary ways to export values with JavaScript: default exports and named exports. <br />
<br />
A file can have no more than one default export, but it can have as many named exports as you like<br />
<br />
How you export your component dictates how you must import it<br />
<br />
For named imports you must use the exact component name. While in default imports you can name it whatever as it will still import its default function.<br />
<br />
People often use default exports if the file exports only one component and use named exports if the file exports multiple components and values.<br />
<br />
Always give you component functions meaningful names because components without names, like 'export default () = { }',  are discouraged because they make debugging harder<br />
<br />
Tip: To reduce the potential confusion between default and named exports, some teams choose to only stick to one style (default or named), or avoid mixing them in a single file<br />
</p>


    </>)
}

