import React, { useState } from "react";

const Form = () => {
  const [value, setValue] = useState("");
  const handleChange = (e) => {
    setValue(e.target.value);
  };
  const changeFormData = () => {
    alert("success");
  };
  return (
    <form onSubmit={changeFormData} className="flex">
      <label className="text-black-500 font-semibold">
        Name : 
        <input type="email" className="border-2 m-4" value={ value} onChange={handleChange} />
      </label>
    </form>
  );
};

export default Form;
