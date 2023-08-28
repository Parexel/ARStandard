import { ipcMain } from "electron";
import { promises as fs } from "fs";
import yaml from "yaml";

export default (): void => {
  ipcMain.on("health-check", () => {
    console.log("I am alive!");
  });

  ipcMain.handle("validate-file", async (_, filePath) => {
    const fileContent = await fs.readFile(filePath);
    const analysisResults = yaml.parse(fileContent.toString());
    return true;
  });
};
