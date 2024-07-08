import React from 'react'

export function MarkupJSX() {
    return (
        <>
<h1>Writing markup with JSX</h1>
<p>
React components use a syntax extension called JSX to represent markup that React renders into the browser <br />
<br />
JSX is a syntax exension that lets you write HTML-like markup inside a JavaScript file.<br />
<br />
JSX and React are two seperate things. They're often used together, but you can use them independently of each other. JSX is a syntax extension, while React is a JavaScript library<br />
<br />
JSX Rules:<br />
1. Return a single root element<br />
To return multiple elements from a component, wrap them with a single parent tag such as a div or fragment<br />
- Fragments let you group things without leaving any trace in the browser HTML tree<br />
- JSX looks like HTML but under the hood it is transformed into plain JavaScript objects. You can't return two objects from a function without wrapping them into an array. This explains why you also can return two JSX tags without wrapping them into another tag<br />
<br />
2. Close all the tags<br />
* Even li and img tags<br />
<br />
Use a converter to translate your existing HTML and SVG to JSX<br />
<br />
React components group rendering logic together with markup because they are related<br />
</p>
        </>)
}