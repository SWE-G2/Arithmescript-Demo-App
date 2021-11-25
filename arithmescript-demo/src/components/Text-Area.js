import React from 'react';
import * as util from '../functions/saveText.js';
import { MathComponent } from 'mathjax-react';

import Editor from '@draft-js-plugins/editor';
import {EditorState, convertToRaw, ContentState, convertFromRaw} from 'draft-js';
import createMarkdownShortcutsPlugin from 'draft-js-markdown-shortcuts-plugin';
import 'draft-js/dist/Draft.css';
import { getLaTeXPlugin } from 'draft-js-latex-plugin';
import 'draft-js-latex-plugin/lib/styles.css';
import 'katex/dist/katex.min.css';
import debounce from 'lodash/debounce';
const { ipcRenderer } = window.require('electron');
const LaTeXPlugin = getLaTeXPlugin();
const plugins = [createMarkdownShortcutsPlugin(), LaTeXPlugin];

export class TextArea extends React.Component {
  constructor(props) {
    super(props);
    this.state = { };


  }

  saveContent = debounce((content) => {
    ipcRenderer.send('asynchronous-message', JSON.stringify(convertToRaw(content)));
    console.log("Saving data...");
  }, 1000);

  onChange = (editorState) => {
    const contentState = editorState.getCurrentContent();
    this.saveContent(contentState);
    this.setState({
      editorState,
    });
  }

  componentDidMount(){
    console.log("componentDidMount");
    ipcRenderer.send('pull-data', null);
    ipcRenderer.on('Async-reply', (event, result) => {
      console.log("why is this not always executing...");
      console.log("Result from ipcRenderer call: ", convertFromRaw(result));
      if(result){
        this.setState({editorState: EditorState.createWithContent(convertFromRaw(result))});
      }else{
        this.setState({editorState: EditorState.createEmpty()});
      }
    });
  }
  render() {
    if(!this.state.editorState){
      return(
        <h3>Loading...</h3>
      );
    }
    return (
      <Editor editorState={this.state.editorState} onChange={this.onChange} plugins={plugins}/>
    );
  }
}
