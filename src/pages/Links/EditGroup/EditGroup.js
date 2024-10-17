import { DocumentTitle } from "../../../utils/utils";
import { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import { fetchGroup, updateGroup } from "../../../utils/api";
import Loading from "../../../components/Loading/Loading";
import ConnectionError from "../../../components/ConnectionError/ConnectionError";
import GroupForm from "../../../components/GroupForm/GroupForm";

const EditGroup = () => {
  DocumentTitle("Edit Gruop");

  const { groupId } = useParams();
  const [group, setGroup] = useState([]);
  const [isLoading, setIsLoading] = useState(true);
  const [hasError, setHasError] = useState(false);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const group = await fetchGroup(groupId);
        setGroup(group);
        setIsLoading(false);
      } catch (error) {
        setIsLoading(false);
        setHasError(true);
      }
    };

    fetchData();
  }, [groupId]);

  if (hasError) return;
  <ConnectionError error={`Unable to access the group with ID: ${groupId} right now. Please try again later.`} />;
  if (isLoading) return <Loading />;

  const handleSubmit = async (groupData) => {
    await updateGroup(groupId, groupData);
  };

  return <GroupForm header="Edit Group" formSubmitHandler={handleSubmit} group={group} />;
};

export default EditGroup;
