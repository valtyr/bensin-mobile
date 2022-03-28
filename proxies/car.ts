import { proxy } from "valtio";

const carProxy = proxy({
  avgFuelEconomy: 4.5,
  fuelLevel: 0.5,
  tankSize: 50,
  fuelType: "gas" as "gas" | "diesel",
});

export default carProxy;
