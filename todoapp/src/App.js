import './App.css';
import FirstComponent from './FirstComponent';
// import FirstComponent from './FirstComponent';
import ImportExport from './ImportExport';
import {MarkupJSX} from './MarkupJSX'
// import {JSCurlyBraces} from './JSCurlyBraces'

function App() {
  return (
    <>
    <FirstComponent />
    <ImportExport />
    <MarkupJSX />
    {/* <JSCurlyBraces /> */}
    </>
  )

}

export default App