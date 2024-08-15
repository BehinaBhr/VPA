import "./Gallery.scss";
import { DocumentTitle } from "../../utils/utils";
import GalleryElements from "./GalleryElements.js";

const Gallery = () => {
  DocumentTitle("Gallery");
  return (
    <div className="gallery">
      <h2 className="gallery__title">VPA Gallery</h2>

      {GalleryElements.map((album) => (
        <section className="gallery__album" key={album.id}>
          <h3 className="gallery__album-header">
            {album.date} | {album.name}
          </h3>
          <iframe
            src={`https://drive.google.com/embeddedfolderview?id=${album.src}#grid`}
            className="gallery__album-fram"
            title={`Google Drive Folder - ${album.name}`}
            allowFullScreen
          ></iframe>
        </section>
      ))}
    </div>
  );
};

export default Gallery;
