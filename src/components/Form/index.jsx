import React from "react";
import { InputDesc, InputValue } from "../Input";
import Select from "../Select";
import { FormSubmitBtn } from "../Button";
import "./style.css";
import { useState } from "react";

const Form = ({ cashFlow, setCashFlow }) => {
  const [formData, setFormData] = useState({
    description: "",
    value: "",
    option: "entrada",
  });

  const submit = async (event) => {
    event.preventDefault();
    setCashFlow([...cashFlow, formData]);
    setFormData({
      description: "",
      value: "",
      option: "entrada",
    });
  };

  return (
    <form className="input-form" onSubmit={submit}>
      <label>Descrição</label>
      <InputDesc className={"form-desc"} placeholder={"Digite aqui sua descrição"} formData={formData} setFormData={setFormData} />
      <p className="input-desc">Ex: Compra de roupas</p>
      <span>
        <div>
          <label>Valor</label>
          <span className="form-value-container">
            <InputValue className={"form-value"} placeholder={"1"} formData={formData} setFormData={setFormData} />
            <p>R$</p>
          </span>
        </div>
        <div>
          <label>Tipo de valor</label>
          <Select className={"form-select"} formData={formData} setFormData={setFormData} />
        </div>
      </span>
      <FormSubmitBtn className={"form-submit"}>Inserir valor</FormSubmitBtn>
    </form>
  );
};

export default Form;
