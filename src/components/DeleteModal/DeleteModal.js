import "./DeleteModal.scss";
import CancelAndSubmit from "../CancelAndSubmit/CancelAndSubmit";
import SuccessfulSubmitMessage from "../SuccessfulSubmitMessage/SuccessfulSubmitMessage";
import FailedSubmitError from "../FailedSubmitError/FailedSubmitError";

// A confirmation modal displayed after the delete button being clicked
const DeleteModal = ({ target, onCancel, onDelete, error, success }) => {
  return (
    <div className="delete-modal__background">
      <div className="delete-modal">
        <h1 className="delete-modal__header">Are you sure?</h1>
        <p className="delete-modal__body">
          Are you sure you want to delete this {target}? You won't be able to undo this action.
        </p>
        <CancelAndSubmit onCancel={onCancel} onDelete={onDelete} submitType="delete" />
        {/* Display success or error messages */}
        {success && <SuccessfulSubmitMessage message={`${target} deleted successfully!`} />}
        {error && <FailedSubmitError error={error} />}
      </div>
    </div>
  );
};

export default DeleteModal;
