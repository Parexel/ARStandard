import { ipcRenderer } from "electron";

interface Analysis {
  id: string;
  name: string;
  description: string;
}

export interface MainProcess {
  healthCheck(): void;
  validateFile(filePath: string): Promise<boolean>;
  getAnalyses(filePath: string): Promise<Analysis>;
}

export const api: MainProcess = {
  healthCheck: () => ipcRenderer.send("health-check"),
  validateFile: (filePath) => ipcRenderer.invoke("validate-file", filePath),
  getAnalyses: (filePath) => ipcRenderer.invoke("get-analyses", filePath)
};
