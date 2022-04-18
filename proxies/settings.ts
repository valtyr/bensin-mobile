import proxyWithPersist, {
  PersistStrategy,
  ProxyPersistStorageEngine,
} from "valtio-persist";

import AsyncStorage from "@react-native-async-storage/async-storage";
import { derive } from "valtio/utils";

type Car = {
  id: string;
  description: string;
  plate: string;
  avgFuelEconomy: number;
  tankSize: number;
  fuelType: "gas" | "diesel";
};

const storage: ProxyPersistStorageEngine = {
  getItem: (name) => AsyncStorage.getItem(name),
  setItem: (name, value) => AsyncStorage.setItem(name, value),
  removeItem: (name) => AsyncStorage.removeItem(name),
  getAllKeys: () => AsyncStorage.getAllKeys(),
};

export const settingsProxy = proxyWithPersist<{
  cars: Record<string, Car>;
  activeCarId: string | null;
}>({
  name: "settings",
  initialState: {
    cars: {
      "1": {
        id: "1",
        plate: "KKA33",
        description: "VW Golf",
        fuelType: "gas",
        avgFuelEconomy: 7.5,
        tankSize: 50,
      },
      "2": {
        id: "2",
        plate: "VUM46",
        description: "Toyota Prius",
        fuelType: "diesel",
        avgFuelEconomy: 10,
        tankSize: 45,
      },
      "3": {
        id: "3",
        plate: "IMCEO",
        description: "Ford Kuga",
        fuelType: "diesel",
        avgFuelEconomy: 10,
        tankSize: 45,
      },
      "4": {
        id: "4",
        plate: "DRJÓLI",
        description: "Lada Sport",
        fuelType: "diesel",
        avgFuelEconomy: 10,
        tankSize: 45,
      },
    },
    activeCarId: null,
  },
  migrations: {},
  version: 0,
  persistStrategies: PersistStrategy.SingleFile,
  getStorage: () => storage,
});

const settings = derive({
  carList: (get) => Object.values(get(settingsProxy).cars),
  activeCar: (get) => {
    const activeId = get(settingsProxy).activeCarId;
    if (!activeId) return null;
    return get(settingsProxy).cars[activeId];
  },
});

export default settings;
