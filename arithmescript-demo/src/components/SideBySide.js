import React, { useState } from "react";
import "./sideBySide.css";

const SideBySide = () => {


  return(
    <>
      <div id="sidebyside">
      <h1> This is simply a test to see where this element will site. </h1>
      </div>

    </>
  );
}

export default SideBySide;


// <h2>Using CKEditor 5 from source in React</h2>
// <CKEditor
//   editor={ ClassicEditor }
//
//   data="<p>Hello from CKEditor 5!</p>"
//   onInit={ editor => {
//     // You can store the "editor" and use when it is needed.
//     console.log( 'Editor is ready to use!', editor );
//   } }
//   onChange={ ( event, editor ) => {
//     const data = editor.getData();
//     console.log( { event, editor, data } );
//   } }
//   onBlur={ editor => {
//     console.log( 'Blur.', editor );
//   } }
//   onFocus={ editor => {
//     console.log( 'Focus.', editor );
//   } }
// />
