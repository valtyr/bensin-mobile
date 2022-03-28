import * as React from "react";
import Svg, { SvgProps, G, Rect, Path } from "react-native-svg";

const SvgOlis = (props: SvgProps) => (
  <Svg
    width={104}
    height={104}
    viewBox="0 0 104 104"
    xmlns="http://www.w3.org/2000/svg"
    {...props}
  >
    <G fill="none" fillRule="evenodd">
      <Rect fill="#009247" width={104} height={104} rx={11} />
      <G fill="#FEF200">
        <Path d="M29.515 59.17c3.74 0 5.61 1.43 5.61 4.29v24.92c0 3.08-1.87 4.62-5.61 4.62H14.61c-3.657 0-5.526-1.472-5.607-4.416L9 88.38V63.459c0-2.795 1.786-4.224 5.358-4.288l15.157-.002Zm-5.642 7.08h-4.112v18.955h4.112V66.25ZM38.676 44h11.513v48.621H38.676zM54.301 58.834h10.691v33.788H54.301zM54.3 55.125V44h12.43l-5.516 11.125zM95 67.58v-8.41H73.811c-3.903 0-4.912 2.845-4.912 4.204v12.71c0 1.338 2.077 4.11 6.667 4.11h8.467v4.024H68.899v8.403c12.958.253 19.968.379 21.028.379C91.517 93 95 91.348 95 87.78V76.544c0-3.297-1.69-4.946-5.073-4.946h-9.77v-4.019H95Z" />
      </G>
    </G>
  </Svg>
);

export default SvgOlis;
