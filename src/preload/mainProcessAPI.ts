import { ipcRenderer } from "electron";
import { Analysis } from "../main/model/Analysis";

export interface MainProcess {
  validateFile(filePath: string): Promise<boolean>;
  getAnalyses(filePath: string): Promise<Analysis[]>;
}

export const api: MainProcess = {
  validateFile: (filePath) => ipcRenderer.invoke("validate-file", filePath),
  getAnalyses: (filePath) => ipcRenderer.invoke("get-analyses", filePath)
};
