import { useState, useEffect } from "react";

import "../App.css";

function Carousal(props: {
  images: { src: string; alt: string; timeout: number }[];
}) {
  const { images } = props;

  const [imagePath, setImagePath] = useState("");
  const [imageIndex, setImageIndex] = useState(0);

  useEffect(() => {
    if (images.length === 0) return;
    initialiseCarousal(images[0]);
  }, [images]);

  const initialiseCarousal = async (item: { src: string; alt: string; timeout: number }) => {
    console.log("Displaying image:", item.alt);
    setImagePath(item.src);
    await sleep(item.timeout);
    setImageIndex(imageIndex + 1);
  };

  useEffect(() => {
    if (images[imageIndex] !== undefined)
      initialiseCarousal(images[imageIndex]);
  }, [imageIndex]);

  const sleep = (ms: number) => {
    return new Promise((resolve) => setTimeout(resolve, ms));
  };

  return (
    <div className="carousal">
      <p>
        {imageIndex + 1} of {images.length}
      </p>
      <img src={imagePath} alt={images[imageIndex].alt} />
    </div>
  );
}

export default Carousal;
