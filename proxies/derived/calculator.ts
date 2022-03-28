import { derive } from "valtio/utils";
import carProxy from "../car";
import dataProxy from "../data";

const calculatorProxy = derive({
  stations: (get) => {
    const data = get(dataProxy).data;

    const { avgFuelEconomy, fuelLevel, fuelType, tankSize } = get(carProxy);

    const stations =
      data?.stations.map((station) => {
        const fuelPrice =
          fuelType === "gas" ? station.bensin95 : station.diesel;

        const foundRoute = typeof station.distanceKm === "number";

        const litersSpentDriving =
          ((station.distanceKm || 0) / 100) * avgFuelEconomy;
        const litersLeft = fuelLevel * tankSize;
        const priceToDrive = litersSpentDriving * fuelPrice;

        const fuelLeftWhenArrived = Math.max(
          litersLeft - litersSpentDriving,
          0
        );
        const fuelTaken = tankSize - fuelLeftWhenArrived;
        const priceToFill = fuelTaken * fuelPrice;

        return {
          priceToDrive,
          priceToFill,
          totalPrice: priceToFill + priceToDrive,
          company: station.company,
          name: station.name,
          key: station.key,
          fuelPrice,
          distanceKm: station.distanceKm,
          foundRoute,
          latitude: station.geo.lat,
          longitude: station.geo.lon,
        };
      }) || [];

    stations.sort((a, b) => {
      if (!a.foundRoute) return 1;
      if (!b.foundRoute) return -1;
      return a.totalPrice - b.totalPrice;
    });

    return stations.filter((s) => s.foundRoute);
  },
});

export default calculatorProxy;
