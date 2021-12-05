const {ipcMain} = require('electron');
const fs = require('fs');
const path = require('path');
const { dialog } = require("electron");
// require("../wasm_exec.js");


ipcMain.on('call-parser', (event,data)=> {
  let x = Object.keys(data).length;
  let text = data[Object.keys(data)[Object.keys(data).length - 1]].text;
  let key = data[Object.keys(data)[Object.keys(data).length - 1]].key;
    console.log("parse has been called.", text);
    console.log("the key for the last val is: ", key);
});

// console.log(window.electron.doThing());
