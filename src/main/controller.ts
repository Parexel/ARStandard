import { ipcMain } from "electron";
import { isRight } from "fp-ts/Either";
import { AnalysisResult, parseFile } from "./model/AnalysisResults";
import { Analysis } from "./model/Analysis";

export default (): void => {
  ipcMain.handle("validate-file", async (_, filePath): Promise<boolean> => {
    const analysisResults = await parseFile(filePath);
    const decoded = AnalysisResult.decode(analysisResults);
    return isRight(decoded);
  });

  ipcMain.handle("get-analyses", async (_, filePath): Promise<Analysis[]> => {
    const analysisResults = await parseFile<AnalysisResult>(filePath);
    return analysisResults.analyses;
  });
};
