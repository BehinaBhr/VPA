import "./Gallery.scss";
import { DocumentTitle } from "../../utils/utils.js";
import { useEffect, useState } from "react";
import { fetchAlbums } from "../../utils/api.js";
import Loading from "../../components/Loading/Loading.js";
import ConnectionError from "../../components/ConnectionError/ConnectionError.js";
import Album from "../../components/Album/Album.js";
import AddButton from "../../components/AddButton/AddButton.js";

const Gallery = () => {
  DocumentTitle("Gallery");

  const [sortedAlbums, setSortedAlbums] = useState([]);
  const [isLoading, setIsLoading] = useState(true);
  const [hasError, setHasError] = useState(false);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const albums = await fetchAlbums();
        setSortedAlbums(albums);
        setIsLoading(false);
      } catch (error) {
        setIsLoading(false);
        setHasError(true);
      }
    };

    fetchData();
  }, []);

  if (hasError) return <ConnectionError error={`Unable to access albums in gallery right now. Please try again later`} />;
  if (isLoading) return <Loading />;

  return (
    <div className="gallery">
      <section className="gallery__header">
        <h2 className="gallery__header-title">VPA Gallery</h2>
        <AddButton target="Album" link_to="/gallery/new" />
      </section>
      {sortedAlbums.map((album) => (
        <Album key={album.id} id={album.id} date={album.date} name={album.name} src={album.src} />
      ))}
    </div>
  );
};

export default Gallery;
