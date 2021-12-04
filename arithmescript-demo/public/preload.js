const fs = require('fs');
const path = require('path');
const { dialog } = require("electron");
require("./wasm_exec.js");

if (WebAssembly) {
  // WebAssembly.instantiateStreaming is not currently available in Safari
  if (WebAssembly && !WebAssembly.instantiateStreaming) { // polyfill
    WebAssembly.instantiateStreaming = async (resp, importObject) => {
      const source = await (await resp).arrayBuffer();
      return await WebAssembly.instantiate(source, importObject);
    };
  }

  const go = new Go();
  WebAssembly.instantiateStreaming(fetch("asparser.wasm"), go.importObject).then((result) => {
    go.run(result.instance);
    console.log(ConvertASToLatex("8th root 256 times 7; root of 16;"));

    // dialog.showMessageBox({ message: ConvertASToLatex("8th root 256 times 7; root of 16;") });

  });

} else {
  console.log("WebAssembly is not supported in your browser");
}
