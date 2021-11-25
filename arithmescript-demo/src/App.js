import { Header } from './components/header/header'
import { TextArea } from './components/Text-Area.js';
import { MathComponent } from 'mathjax-react'

// import Desmos from 'desmos';
// import {Expression, GraphingCalculator, useHelperExpression} from "desmos-react";
import {Editor, EditorState} from 'draft-js';

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
