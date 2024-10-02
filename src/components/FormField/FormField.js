import "./FormField.scss";
import FieldError from "../../components/FieldError/FieldError";
import FormLabel from "../../components/FormLabel/FormLabel";

// A single field in a form
const FormField = ({ field_name, errors, errorSetter, value, valueSetter, type = "text"}) => {
  function onChange(e) {
    valueSetter(e.target.value);
    const updatedErrors = { ...errors };
    delete updatedErrors[field_name];
    errorSetter(updatedErrors);
  }
  
  return (
    <div className="form-field">
      <FormLabel field_name={field_name} />
      <input
        className={`${errors[field_name] !== undefined ? "form-field__error" : ""} form-field__input`}
        placeholder={field_name}
        type={type}
        id={field_name}
        value={value}
        onChange={onChange}
      />
      {errors[field_name] !== undefined &&
        errors[field_name].map((error) => <FieldError message={error} key={`${field_name} ${error}`} />)}
    </div>
  );
};

export default FormField;
