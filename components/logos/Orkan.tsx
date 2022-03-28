import * as React from "react";
import Svg, { SvgProps, G, Rect, Path } from "react-native-svg";

const SvgOrkan = (props: SvgProps) => (
  <Svg
    width={104}
    height={104}
    viewBox="0 0 104 104"
    xmlns="http://www.w3.org/2000/svg"
    {...props}
  >
    <G fill="none" fillRule="evenodd">
      <Rect fill="#FF0098" width={104} height={104} rx={11} />
      <Path
        d="M16.07 52.225c0 3.579-.983 12.31 4.405 19.978C25.862 79.872 35.055 88 45.717 88c10.661 0 19.88-3.994 26.796-9.377 6.916-5.383 13.853-15.714 14.873-24.429 1.02-8.715-.485-20.31-3.304-24.438-2.82-4.129-4.315-6.091-5.263-6.827-.949-.737-1.826-.68-1.826-.342 0 .34 1.44 1.721 1.826 2.269.385.547.518 1.093 0 1.093-.519 0-2.911-2.486-4.303-3.6-1.392-1.114-5.144-3.422-8.92-4.531C61.823 16.708 57.35 16 54.603 16s-5.757-.034-6.41.698c-.654.731-.852 2.782 1.619 5.222 2.47 2.44 5.154 4.521 7.508 5.778 2.354 1.257 9.455 5.582 11.089 8.388 1.633 2.806 5.355 10.38.81 18.108-4.544 7.73-10.997 14.513-19.98 14.513s-15.691-7.13-15.155-15.875c.536-8.744 3.107-13.675 6.292-16.525 3.185-2.85 6.192-5.072 7.528-5.812 1.335-.74 3.506-1.036 3.506-2.033 0-.996-2.353-1.484-4.183-3.234-1.83-1.749-2.277-3.714-4.208-3.714s-11.788 3.822-15.212 8.981c-3.424 5.16-5.527 9.686-5.916 10.71-.39 1.023-.73 3.297-1.415 3.297-.686 0-.758-2.347-.758-2.822 0-.475-.016-.85-.65-1.05-.635-.199-2.047 3.472-2.335 4.975-.289 1.503-.662 3.042-.662 6.62Z"
        fill="#FFF"
      />
    </G>
  </Svg>
);

export default SvgOrkan;