import React from "react";

function FormField({
  id,
  label,
  type = "text",
  value,
  onChange,
  placeholder = "",
  helperText = "",
  name,
}) {
  return (
    <div className="form-field">
      <label htmlFor={id}>{label}</label>

      <input
        id={id}
        name={name}
        type={type}
        value={value}
        onChange={onChange}
        placeholder={placeholder}
      />

      {helperText && <small>{helperText}</small>}
    </div>
  );
}

export default FormField;