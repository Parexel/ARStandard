import { ipcMain } from "electron";
import { AnalysisResult, parseFile } from "./model/AnalysisResults";

export default (): void => {
  ipcMain.on("health-check", () => {
    console.log("I am alive!");
  });

  ipcMain.handle("validate-file", async (_, filePath) => {
    const analysisResults: AnalysisResult = await parseFile(filePath);
    console.log(analysisResults);
    return true;
  });

  ipcMain.handle("get-analyses", async (_, filePath) => {
    const analysisResults = await parseFile(filePath);
    return analysisResults.analyses;
  });
};
