import React from 'react'
import { Gallery } from "react-grid-gallery";
import Lightbox from 'react-image-lightbox';
import 'react-image-lightbox/style.css';
import images from './Images'

const Pictures = () => {
  return (
    <div>
        <Gallery images={images} />
    </div>
  )
}

export default Pictures