import { useContext } from "react";
import { getImageUrl } from "./utils";
import { ImageSizeContext } from "./Context";

export default function PlaceImage({ place }) {
  const imageSize = useContext(ImageSizeContext); 
  return (
    <img
      src={getImageUrl(place)}
      alt={place.name}
      width={imageSize}
      height={imageSize}
    />
  );
}
