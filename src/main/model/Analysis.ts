import * as io from "io-ts";

export const Analysis = io.type({
  id: io.string,
  name: io.string,
  description: io.union([io.string, io.undefined])
});

export type Analysis = io.TypeOf<typeof Analysis>;
