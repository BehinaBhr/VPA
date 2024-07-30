import "./Gallery.scss";
import { DocumentTitle } from "../../utils/utils";
import Masonry, { ResponsiveMasonry } from "react-responsive-masonry";
import GalleryElements from "./GalleryElements.js";

function Gallery() {
  DocumentTitle("Gallery");

  return (
    <div className="gallery">
      <h2 className="gallery__title">VPA Gallery</h2>
      {GalleryElements.map((album) => (
        <section className="gallery__album">
          <h3 className="gallery__album-header">
            {album.date} | {album.info}
          </h3>
          <ResponsiveMasonry columnsCountBreakPoints={{ 320: 3, 767: 5, 1279: 7 }}>
            <Masonry gutter="10px">
              {album.list.map((image, index) => (
                <img
                  className="gallery__album-item"
                  key={index}
                  src={image}
                  alt={`${album.info} - ${index}`}
                  loading="lazy"
                />
              ))}
            </Masonry>
          </ResponsiveMasonry>
        </section>
      ))}
    </div>
  );
}

export default Gallery;
