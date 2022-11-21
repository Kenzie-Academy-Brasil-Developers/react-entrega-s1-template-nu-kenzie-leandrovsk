import React from "react";
import './style.css'

const Select = ({ formData, setFormData, className }) => {
  return (
    <select className={className} value={formData.option} onChange={(event) => setFormData({ ...formData, option: event.target.value })}>
      <option value="entrada">Entrada</option>
      <option value="despesas">Despesas</option>
    </select>
  );
};

export default Select;
