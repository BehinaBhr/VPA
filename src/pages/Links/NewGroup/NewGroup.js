import { DocumentTitle } from "../../../utils/utils";
import { createGroup } from "../../../utils/api";
import GroupForm from "../../../components/GroupForm/GroupForm";

const NewGroup = () => {
  DocumentTitle("Add New Group");

  const handleSubmit = async (groupData) => {
    await createGroup(groupData);
  };

  return <GroupForm header="Add New Group" formSubmitHandler={handleSubmit} />;
};

export default NewGroup;
