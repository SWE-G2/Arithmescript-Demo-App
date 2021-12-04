const path = require("path");
const { app, BrowserWindow, dialog } = require("electron");
const isDev = require("electron-is-dev");
const {ipcMain} = require('electron');
const fs = require('fs');

const crypto = require("crypto");
const { electron } = require("process");
globalThis.crypto = {
	getRandomValues(b) {
		crypto.randomFillSync(b);
	},
};
// const wasm_exec = require("./wasm_exec_node.js.old");

function createWindow() {
  // Create the browser window.
  const win = new BrowserWindow({
    width: 1400,
    height: 1200,
    webPreferences: {
      nodeIntegration: true,
      preload: path.join(__dirname, 'preload.js')
    }
  });

  // and load the index.html of the app.
  // win.loadFile("index.html");
  win.loadURL(
    isDev
      ? "http://localhost:3000"
      : `file://${path.join(__dirname, "../build/index.html")}`
  );

  // Open the DevTools.
  if (isDev) {
    win.webContents.openDevTools({ mode: "detach" });
  }
}

// This method will be called when Electron has finished
// initialization and is ready to create browser windows.
// Some APIs can only be used after this event occurs.
app.whenReady().then(createWindow);

// Quit when all windows are closed, except on macOS. There, it's common
// for applications and their menu bar to stay active until the user quits
// explicitly with Cmd + Q.
app.on("window-all-closed", () => {
  if (process.platform !== "darwin") {
    app.quit();
  }
});

app.on("activate", () => {
  // On macOS it's common to re-create a window in the app when the
  // dock icon is clicked and there are no other windows open.
  if (BrowserWindow.getAllWindows().length === 0) {
    createWindow();
  }
});




ipcMain.on('asynchronous-message', (event, arg) => {
  fs.writeFile("data/test.txt", arg, err =>{
    console.log("writing to file");
    if(err){
      console.log(err);
      return;
    }
  })
  // wasm_exec;
  // console.log(wasm_exec);
  dialog.showMessageBox({ message: ConvertASToLatex("(a times b) times (c times d)") });
})

ipcMain.on('pull-data', (event, arg) =>{
  // fs.readFile("data/test.txt", function(err, data){
  //   let test = JSON.parse(data);

  //   event.sender.send('Async-reply', test);
  // });


});
