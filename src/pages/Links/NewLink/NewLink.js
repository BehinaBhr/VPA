import { DocumentTitle } from "../../../utils/utils";
import { createLink } from "../../../utils/api";
import LinkForm from "../../../components/LinkForm/LinkForm";

const NewLink = () => {
  DocumentTitle("Add New Link");

  const handleSubmit = async (linkData) => {
    await createLink(linkData);
  };

  return <LinkForm header="Add New Link" formSubmitHandler={handleSubmit} />;
};

export default NewLink;
