const { BrowserWindow, app } = require("electron");

if (require("electron-squirrel-startup")) app.quit();

const createWindow = () => {
  const newWindow = new BrowserWindow({
    width: 1700,
    height: 1000,
  });
  newWindow.loadFile("dist/index.html");
};

app.whenReady().then(() => {
  createWindow();

  app.on("activate", () => {
    if (BrowserWindow.getAllWindows().length === 0) createWindow();
  });
});

app.on("window-all-closed", () => {
  if (process.platform !== "darwin") app.quit();
});
