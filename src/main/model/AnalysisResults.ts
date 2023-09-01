import { promises as fs } from "fs";
import yaml from "yaml";
import { Analysis } from "./Analysis";

export interface AnalysisResult {
  analyses: Array<Analysis>;
}

export async function parseFile(filePath: string): Promise<AnalysisResult> {
  const fileContent = await fs.readFile(filePath);
  return yaml.parse(fileContent.toString());
}
