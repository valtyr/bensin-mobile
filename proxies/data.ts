import { proxy } from "valtio";
import { EnrichedGasData } from "./types";

const dataProxy = proxy({
  data: null as EnrichedGasData | null,
});

export default dataProxy;
