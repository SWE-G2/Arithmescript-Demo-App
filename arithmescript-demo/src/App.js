import { Header } from './components/header/header'
import { CKEditor } from '@ckeditor/ckeditor5-react';
import ClassicEditor from '@ckeditor/ckeditor5-build-classic';
import { TextArea } from './components/Text-Area.js';

function App() {
  return (
    <div className="App">
        <Header />
        <h2>Select a page!</h2>
        <TextArea />


    </div>
  );
}

export default App;

  // <TextArea />
