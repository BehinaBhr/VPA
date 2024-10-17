import { DocumentTitle } from "../../../utils/utils";
import { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import { fetchAlbum, updateAlbum } from "../../../utils/api";
import AlbumForm  from "../../../components/AlbumForm/AlbumForm";
import Loading from "../../../components/Loading/Loading";
import ConnectionError from "../../../components/ConnectionError/ConnectionError";

const EditAlbum = () => {
  DocumentTitle("Edit Album");

  const { albumId } = useParams();
  const [album, setAlbum] = useState({});
  const [isLoading, setIsLoading] = useState(true);
  const [hasError, setHasError] = useState(false);
 

  useEffect(() => {
    const fetchData = async () => {
      try {
        const album = await fetchAlbum(albumId);
        setAlbum(album);
        setIsLoading(false);
      } catch (error) {
        setIsLoading(false);
        setHasError(true);
      }
    };

    fetchData();
  }, [albumId]);

  if (hasError)
    return <ConnectionError error={`Unable to access the album with ID: ${albumId} right now. Please try again later.`} />;
  if (isLoading) return <Loading />;

  const handleSubmit = async (albumData) => {
    await updateAlbum(albumId, albumData);
  };

  return <AlbumForm title="Edit Album" formSubmitHandler={handleSubmit} album={album} />;
};

export default EditAlbum;
