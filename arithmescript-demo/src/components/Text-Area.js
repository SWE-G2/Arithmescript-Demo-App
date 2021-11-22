import React from 'react';
import { CKEditor } from '@ckeditor/ckeditor5-react';
import ClassicEditor from '@ckeditor/ckeditor5-build-classic';
import * as util from '../functions/saveText.js';

const { ipcRenderer } = window.require('electron');



export class TextArea extends React.Component {
  render() {
    return (
      <CKEditor
        editor={ ClassicEditor }

        data="<p>Hello from CKEditor 5!</p>"
        onInit={ editor => {
          // You can store the "editor" and use when it is needed.
          console.log( 'Editor is ready to use!', editor );

        } }
        onChange={ ( event, editor ) => {
          const data = editor.getData();
          util.test();
          ipcRenderer.send('asynchronous-message', editor.getData());
          console.log( { event, editor, data } );
        } }
        onBlur={ editor => {
          console.log( 'Blur.', editor );
        } }
        onFocus={ editor => {
          console.log( 'Focus.', editor );
        } }
      />
    );
  }
}
