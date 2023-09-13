import { ipcMain } from "electron";
import { AnalysisResults, parseFile, validateResults } from "./model/AnalysisResults";
import { Analysis } from "./model/Analysis";

export default (): void => {
  ipcMain.handle("validate-file", async (_, filePath): Promise<boolean> => {
    let analysisResults: AnalysisResults;
    try {
      analysisResults = await parseFile(filePath);
    } catch (e) {
      return false;
    }

    return validateResults(analysisResults);
  });

  ipcMain.handle("get-analyses", async (_, filePath): Promise<Analysis[]> => {
    const analysisResults = await parseFile(filePath);
    return analysisResults.analyses;
  });
};
