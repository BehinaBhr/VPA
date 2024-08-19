import "./Gallery.scss";
import { DocumentTitle } from "../../utils/utils";
import { useEffect, useState } from "react";
import { fetchAlbums } from "../../utils/api.js";
import Loading from "../../components/Loading /Loading.js";
import ConnectionError from "../../components/ConnectionError/ConnectionError";

const Gallery = () => {
  DocumentTitle("Gallery");

  const [sortedAlbums, setSortedAlbums] = useState([]);
  const [isLoading, setIsLoading] = useState(true);
  const [hasError, setHasError] = useState(false);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const links = await fetchAlbums();
        setSortedAlbums(links);
        setIsLoading(false);
      } catch (error) {
        setIsLoading(false);
        setHasError(true);
      }
    };

    fetchData();
  }, []);

  if (hasError) return <ConnectionError error={`Unable to access links right now. Please try again later`} />;
  if (isLoading) return <Loading />;

  return (
    <div className="gallery">
      <h2 className="gallery__title">VPA Gallery</h2>

      {sortedAlbums.map((album) => (
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
