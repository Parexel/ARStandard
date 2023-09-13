import { promises as fs } from "fs";
import * as io from "io-ts";
import { isLeft } from "fp-ts/Either";
import yaml from "yaml";
import { AnalysisStruct } from "./Analysis";

export const AnalysisResultsStruct = io.type({
  analyses: io.array(AnalysisStruct)
});

export type AnalysisResults = io.TypeOf<typeof AnalysisResultsStruct>;

export class InvalidFileStructure extends Error {
  constructor() {
    super("Invalid ARS file structure");
  }
}

export async function parseFile(filePath: string): Promise<AnalysisResults> {
  const fileContent = await fs.readFile(filePath);
  const object = yaml.parse(fileContent.toString());
  const decoded = AnalysisResultsStruct.decode(object);

  if (isLeft(decoded)) {
    throw new InvalidFileStructure();
  }

  return decoded.right as AnalysisResults;
}

export function validateResults(results: AnalysisResults): boolean {
  // TODO: implement
  return results !== undefined;
}
