import { ipcMain } from "electron";


export default () => {
  ipcMain.on("health-check", () => {
    console.log("I am alive!");
  });
}
