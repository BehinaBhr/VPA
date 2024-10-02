import { DocumentTitle } from "../../../utils/utils";
import { createAlbum } from "../../../utils/api";
import AlbumForm from "../../../components/AlbumForm/AlbumForm";

const NewAlbum = () => {
  DocumentTitle("Add New Album");

  const handleSubmit = async (albumData) => {
    await createAlbum(albumData);
  };

  return <AlbumForm header="Add New Album" formSubmitHandler={handleSubmit} />;
};

export default NewAlbum;
