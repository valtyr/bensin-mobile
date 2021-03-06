import * as React from "react";
import Svg, { SvgProps, G, Rect, Path } from "react-native-svg";

const SvgOb = (props: SvgProps) => (
  <Svg
    width={104}
    height={104}
    viewBox="0 0 104 104"
    xmlns="http://www.w3.org/2000/svg"
    {...props}
  >
    <G fill="none" fillRule="evenodd">
      <Rect fill="#FEE800" width={104} height={104} rx={11} />
      <Path
        d="M78.482 31c6.982 0 13.963 4.725 13.963 14.452 0 4.327-1.467 7.362-4.4 9.106C92.014 56.722 94 60.753 94 66.651 94 77.944 82.963 80 80.042 80H47l9.503-25.5L47 31Zm-3.911 29H70v7h4.571C75.609 67 77 65.62 77 63.5S75.61 60 74.571 60Zm0-17H70v7h4.571C75.609 50 77 48.62 77 46.5S75.61 43 74.571 43Z"
        stroke="#FFF"
        strokeWidth={2}
        fill="#04883B"
      />
      <Path
        d="M38 27c7.732 0 14.732 3.134 19.799 8.201S66 47.268 66 55c0 7.732-3.134 14.732-8.201 19.799S45.732 83 38 83c-7.732 0-14.732-3.134-19.799-8.201S10 62.732 10 55c0-7.732 3.134-14.732 8.201-19.799S30.268 27 38 27Zm-.5 16c-3.176 0-6.05 1.287-8.132 3.368A11.464 11.464 0 0 0 26 54.5c0 3.176 1.287 6.05 3.368 8.132A11.464 11.464 0 0 0 37.5 66c3.176 0 6.05-1.287 8.132-3.368A11.464 11.464 0 0 0 49 54.5c0-3.176-1.287-6.05-3.368-8.132A11.464 11.464 0 0 0 37.5 43Z"
        stroke="#FFF"
        strokeWidth={2}
        fill="#04883B"
      />
      <Path
        d="M47.774 19.556a37.769 37.769 0 0 1 14.495 8.056L45.16 45.944a11.42 11.42 0 0 0-3.587-2.136Z"
        stroke="#FFF"
        strokeWidth={2}
        fill="#C82254"
        strokeLinejoin="round"
      />
    </G>
  </Svg>
);

export default SvgOb;
