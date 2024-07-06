import './App.css';

function First() {
  return (
    <>
    <h1>Today I learned more about Components</h1>
    <h2>Notes</h2>
    <p>
    1. Export the Component<br />
    <br />
	The 'export default' prefix is a standard JavaScript syntax. It lets you mark the main function in a file so that you can later import it from other files<br />
  <br />
2.  Define the function<br />
<br />
	With 'function Profile Parenthesis, Curly braces' you define a JavaScript function with the name 'Profile'<br />
	* React components must start name with a capital letter<br />
  <br />
3.  Add markup
<br />
	Use JSX<br />
<br />
You can keep multiple components in the same file. If the file gets crowded you can have some of the functions in a separate file and then import them. <br />
<br />
If components are nested then the outside one is the parent component and the component inside of the parent component is the child component<br />
* Components can render other components, but never nest their definition as this is very slow and causes bugs<br />
<br />
Instead define components at the top level<br />
<br />
When a child component needs some data from a parent, pass it by props instead of nesting definitions<br />
<br />
Your React application begins at a "root" component, often created automatically when starting a new project<br />
<br />
Reacts apps typically use components for reusable pieces like buttons or larger structures that you wouldn't expect like the sidebars, lists and even complete pages!<br />
<br />
Components help organize UI code and markup, even if some are only used once<br />
<br />
React-based frameworks can generate HTML automatically from React components, allowing content to display before JavaScript even loads!!<br />
<br />
Fragments are unnecessary if you component return a single top-level JSX element like only an h1, which is valid without needing to wrap it in a fragment or any other container<br />
    </p>
    </>
  )

}

export default First