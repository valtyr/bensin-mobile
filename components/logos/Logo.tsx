import React from "react";
import { Atlantsolia, Costco, Ob, Olis, N1, Orkan } from ".";

const Logo: React.FC<{ company: string; size?: number }> = ({
  company,
  size = 40,
}) => {
  switch (company) {
    case "Orkan":
      return <Orkan width={size} height={size} />;
    case "N1":
      return <N1 width={size} height={size} />;
    case "Costco Iceland":
      return <Costco width={size} height={size} />;
    case "Olís":
      return <Olis width={size} height={size} />;
    case "ÓB":
      return <Ob width={size} height={size} />;
    case "Atlantsolía":
      return <Atlantsolia width={size} height={size} />;
    default:
      return null;
  }
};

export default Logo;
