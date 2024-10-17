import { DocumentTitle } from "../../../utils/utils";
import { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import { fetchLink, updateLink } from "../../../utils/api";
import Loading from "../../../components/Loading/Loading";
import ConnectionError from "../../../components/ConnectionError/ConnectionError";
import LinkForm from "../../../components/LinkForm/LinkForm";

const EditLink = () => {
  DocumentTitle("Edit Gruop_Link");

  const { linkId } = useParams();
  const [link, setLink] = useState([]);
  const [isLoading, setIsLoading] = useState(true);
  const [hasError, setHasError] = useState(false);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const link = await fetchLink(linkId);
        setLink(link);
        setIsLoading(false);
      } catch (error) {
        setIsLoading(false);
        setHasError(true);
      }
    };

    fetchData();
  }, [linkId]);

  if (hasError) return;
  <ConnectionError error={`Unable to access the link with ID: ${linkId} right now. Please try again later.`} />;
  if (isLoading) return <Loading />;

  const handleSubmit = async (linkData) => {
    await updateLink(linkId, linkData);
  };

  return <LinkForm header="Edit Link" formSubmitHandler={handleSubmit} link={link} />;
};

export default EditLink;
