import { ipcRenderer } from "electron";

export interface MainProcess {
  healthCheck(): void
}

export const api: MainProcess = {
  healthCheck: () => ipcRenderer.send("health-check")
};
