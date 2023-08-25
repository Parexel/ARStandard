import { ipcRenderer } from "electron";

export interface MainProcess {
  healthCheck(): void;
  validateFile(filePath: string): Promise<boolean>;
}

export const api: MainProcess = {
  healthCheck: () => ipcRenderer.send("health-check"),
  validateFile: (filePath) => ipcRenderer.invoke("validate-file", filePath)
};
