export type GasvaktinData = {
  stations: {
    bensin95: number;
    bensin95_discount: number;
    diesel: number;
    diesel_discount: number;
    geo: { lat: number; lon: number };
    company: string;
    key: string;
    name: string;
  }[];
};

export type DistancesData =
  | { error: string; result: undefined }
  | {
      error: undefined;
      start_coords: [number, number];
      result: {
        destinations: {
          id?: string;
          result?: { distance_km: number; time_ms: number };
        }[];
      };
    };

export type EnrichedGasData = {
  stations: {
    bensin95: number;
    bensin95_discount: number;
    diesel: number;
    diesel_discount: number;
    geo: { lat: number; lon: number };
    company: string;
    key: string;
    name: string;
    distanceKm?: number;
    timeMs?: number;
  }[];
};
