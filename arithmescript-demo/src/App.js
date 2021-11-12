import Header from './components/header/header'
// import TextEditor from "./components/TextEditor.js"
import SideBySide from "./components/SideBySide"
import { CKEditor } from '@ckeditor/ckeditor5-react';
import ClassicEditor from '@ckeditor/ckeditor5-build-classic';

function App() {
  return (
    <div className="App">
        <Header />
        <h2>Using CKEditor 5 from source in React</h2>
        <CKEditor
          editor={ ClassicEditor }

          data="<p>Hello from CKEditor 5!</p>"
          onInit={ editor => {
            // You can store the "editor" and use when it is needed.
            console.log( 'Editor is ready to use!', editor );
          } }
          onChange={ ( event, editor ) => {
            const data = editor.getData();
            console.log( { event, editor, data } );
          } }
          onBlur={ editor => {
            console.log( 'Blur.', editor );
          } }
          onFocus={ editor => {
            console.log( 'Focus.', editor );
          } }
        />


    </div>
  );
}

export default App;
