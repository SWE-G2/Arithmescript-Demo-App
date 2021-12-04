"use strict";
//
// if (process.argv.length < 3) {
// 	console.error("usage: go_js_wasm_exec [wasm binary] [arguments]");
// 	process.exit(1);
// }
//
// import fetch from 'node-fetch';
globalThis.require = require;
globalThis.fs = require("fs");
globalThis.TextEncoder = require("util").TextEncoder;
globalThis.TextDecoder = require("util").TextDecoder;

const fs = require('fs');
const path = require('path');

globalThis.performance = {
	now() {
		const [sec, nsec] = process.hrtime();
		return sec * 1000 + nsec / 1000000;
	},
};

const crypto = require("crypto");
globalThis.crypto = {
	getRandomValues(b) {
		crypto.randomFillSync(b);
	},
};

require("./wasm_exec");


const wasmBuffer = fs.readFileSync(path.join(__dirname, 'asparser.wasm'));
async function test(){

  // const lib = await WebAssembly.instantiate(new Uint8Array(wasmBuffer)).then(res =>{
  //   console.log(res);
  // });

    let result = await WebAssembly.instantiateStreaming(window.fetch("wasmBuffer"), go.importObject);
    go.run(result.instance);

//   WebAssembly.instantiate(wasmBuffer).then(wasmModule => {
//   // Exported function live under instance.exports
//   // const test = wasmModule.instance.exports.main;
//   console.log(wasmModule); // Outputs: 11
// });
}

module.exports = test();

// go.argv = process.argv.slice(2);
// go.env = Object.assign({ TMPDIR: require("os").tmpdir() }, process.env);
// go.exit = process.exit;
// WebAssembly.instantiate(fs.readFileSync(process.argv[2]), go.importObject).then((result) => {
// 	process.on("exit", (code) => { // Node.js exits if no event handler is pending
// 		if (code === 0 && !go.exited) {
// 			// deadlock, make Go print error and stack traces
// 			go._pendingEvent = { id: 0 };
// 			go._resume();
// 		}
// 	});
// 	return go.run(result.instance);
// }).catch((err) => {
// 	console.error(err);
// 	process.exit(1);
// });
