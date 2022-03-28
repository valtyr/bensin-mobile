import * as React from "react";
import Svg, { SvgProps, G, Rect, Path } from "react-native-svg";

const SvgN1 = (props: SvgProps) => (
  <Svg
    width={104}
    height={104}
    viewBox="0 0 104 104"
    xmlns="http://www.w3.org/2000/svg"
    {...props}
  >
    <G fill="none" fillRule="evenodd">
      <Rect fill="#ED1B24" width={104} height={104} rx={11} />
      <G fill="#FFF">
        <Path d="M18 31.103v37.535S18.701 73 24.113 73h7.022V48.98l10.21 15.583c2.67 4.075 6.738 8.437 11.1 8.437h10.023c.13-20.793.13-32.604 0-35.432-.196-4.243-3.455-6.465-6.285-6.465H49.3v22.84c-1.744-3.213-4.395-7.56-7.954-13.046-5.338-8.227-7.617-9.794-12.697-9.794H18ZM67.624 33.447v11.365l5.538-.83v22.975c.642 3.648 2.383 5.472 5.224 5.472h7.993V31l-18.755 2.447Z" />
      </G>
    </G>
  </Svg>
);

export default SvgN1;
