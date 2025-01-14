import "./CancelAndSubmit.scss";

// cancel button along with delete or save button
const CancelAndSubmit = ({ onCancel, onDelete = null, submitType = "save" }) => {
  return (
    <section className="cancel-and-submit">
      <button className="cancel-and-submit__cancel" onClick={onCancel} type="button">
        Cancel
      </button>

      {submitType === "delete" ? (
        <button className="cancel-and-submit__delete" onClick={onDelete} type="button">
          Delete
        </button>
      ) : (
        <button className="cancel-and-submit__save" type="submit">
          Save
        </button>
      )}
    </section>
  );
};

export default CancelAndSubmit;
