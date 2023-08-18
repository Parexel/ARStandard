import { ElectronAPI } from "@electron-toolkit/preload";
import { MainProcess } from "./mainProcessAPI";

declare global {
  interface Window {
    electron: ElectronAPI;
    api: unknown;
    mainProcess: MainProcess;
  }
}
