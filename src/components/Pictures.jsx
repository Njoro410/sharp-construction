import React, { useState } from "react";
import { Gallery } from "react-grid-gallery";
import Lightbox from "react-image-lightbox";
import "react-image-lightbox/style.css";
import images from "./Images";

const Pictures = () => {
  const [index, setIndex] = useState(-1);

  const currentImage = images[index];
  const nextIndex = (index + 1) % images.length;
  const nextImage = images[nextIndex] || currentImage;
  const prevIndex = (index + images.length - 1) % images.length;
  const prevImage = images[prevIndex] || currentImage;

  const handleClick = (index) => {
    setIndex(index);
  };
  const handleClose = () => setIndex(-1);
  const handleMovePrev = () => setIndex(prevIndex);
  const handleMoveNext = () => setIndex(nextIndex);

  console.log(images[0]);
  return (
    <div className="w-full h-full bg-slate-100">
      <div className="container mx-auto px-8 mt-12 mb-12">
        <div className="flex justify-center items-center mt-5">
          <h1 className="text-5xl mt-5">Gallery</h1>
        </div>
        <div className="flex justify-center items-center ">
          <span className="w-12 h-1 mb-6 rounded-lg bg-yellow-400"></span>
        </div>
        <div className="pb-24">
          <Gallery
            images={images}
            onClick={handleClick}
            enableImageSelection={false}
          />
          {currentImage && (
            <Lightbox
              mainSrc={currentImage.original}
              imageTitle={currentImage.caption}
              mainSrcThumbnail={currentImage.src}
              nextSrc={nextImage.original}
              nextSrcThumbnail={nextImage.src}
              prevSrc={prevImage.original}
              prevSrcThumbnail={prevImage.src}
              onCloseRequest={handleClose}
              onMovePrevRequest={handleMovePrev}
              onMoveNextRequest={handleMoveNext}
            />
          )}
        </div>
      </div>
    </div>
  );
};

export default Pictures;
