import React from "react";

export const InputDesc = ({ placeholder, className, formData, setFormData }) => {
  return <input value={formData.description} onChange={(event) => setFormData({ ...formData, description: event.target.value })} className={className} type="text" placeholder={placeholder} />;
};

export const InputValue = ({ placeholder, className, formData, setFormData }) => {
  return <input value={formData.value} onChange={(event) => setFormData({ ...formData, value: event.target.value })} className={className} type="text" placeholder={placeholder} />;
};
