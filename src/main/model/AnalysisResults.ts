import { promises as fs } from "fs";
import * as io from "io-ts";
import yaml from "yaml";
import { Analysis } from "./Analysis";

export const AnalysisResult = io.type({
  analyses: io.array(Analysis)
});

export type AnalysisResult = io.TypeOf<typeof AnalysisResult>;

export async function parseFile<T = unknown>(filePath: string): Promise<T> {
  const fileContent = await fs.readFile(filePath);
  return yaml.parse(fileContent.toString()) as T;
}
