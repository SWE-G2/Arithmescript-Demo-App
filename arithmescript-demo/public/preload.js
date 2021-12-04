const fs = require('fs');
const path = require('path');
require("./wasm_exec");


// async function test(){
//
//   // const lib = await WebAssembly.instantiate(new Uint8Array(wasmBuffer)).then(res =>{
//   //   console.log(res);
//   // });
//     const wasmBuffer = fs.readFileSync(path.join(__dirname, 'asparser.wasm'));
//     const go = new Go();
//     let result = await WebAssembly.instantiateStreaming(window.fetch(wasmBuffer), go.importObject);
//     go.run(result.instance);
// // Please god work
// //   WebAssembly.instantiate(wasmBuffer).then(wasmModule => {
// //   // Exported function live under instance.exports
// //   // const test = wasmModule.instance.exports.main;
// //   console.log(wasmModule); // Outputs: 11
// // });
// }
//
// test();
// if (process.argv.length < 3) {
// 	console.error("usage: go_js_wasm_exec [wasm binary] [arguments]");
// 	process.exit(1);
// }
//
// globalThis.require = require;
// globalThis.fs = require("fs");
// globalThis.TextEncoder = require("util").TextEncoder;
// globalThis.TextDecoder = require("util").TextDecoder;
//
// globalThis.performance = {
// 	now() {
// 		const [sec, nsec] = process.hrtime();
// 		return sec * 1000 + nsec / 1000000;
// 	},
// };
//
// const crypto = require("crypto");
// globalThis.crypto = {
// 	getRandomValues(b) {
// 		crypto.randomFillSync(b);
// 	},
// };
// const wasmBuffer = fs.readFileSync(path.join(__dirname, 'asparser.wasm'));
//
// const go = new Go();
// go.argv = process.argv.slice(2);
// go.env = Object.assign({ TMPDIR: require("os").tmpdir() }, process.env);
// go.exit = process.exit;
// WebAssembly.instantiate(fs.readFileSync(wasmBuffer), go.importObject).then((result) => {
// 	process.on("exit", (code) => { // Node.js exits if no event handler is pending
// 		if (code === 0 && !go.exited) {
// 			// deadlock, make Go print error and stack traces
// 			go._pendingEvent = { id: 0 };
// 			go._resume();
// 		}
//     go.run(result.instance);
// 	});
// 	return go.run(result.instance);
// }).catch((err) => {
// 	console.error(err);
// 	process.exit(1);
// });

if (!WebAssembly.instantiateStreaming) {
       // polyfill
       WebAssembly.instantiateStreaming = async (resp, importObject) => {
         const source = await (await resp).arrayBuffer();
         return await WebAssembly.instantiate(source, importObject);
       };
     }

const go = new Go();

let mod, inst;


WebAssembly.instantiateStreaming(fetch("asparser.wasm"), go.importObject).then(
        result => {
          mod = result.module;
          inst = result.instance;
          document.getElementById("runButton").disabled = false;
        }
      );

async function run() {
  await go.run(inst);
  inst = await WebAssembly.instantiate(mod, go.importObject); // reset instance
}

run();
