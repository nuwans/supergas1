import React from "react";
const FloatingInput = ({handleChange,error = false,type='text',labelName='Pin Code',value=''})=>{
  return <div className="group">
    <input className={error ? "inputMaterial invalid" : "inputMaterial"}
      onChange={handleChange}
      type={type}
      defaultValue={value}
      required
      autoCapitalize="off"
      autoComplete="off"
      autoCorrect="off" />
    <span className={error ? "highlight invalid" : "highlight"}></span>
    <span className={error ? "bar invalid" :"bar"}></span>
    <label className={error ? "invalid" : "normal"}>{labelName}</label>
    {error ? <span className="error">{error} </span> : null}
  </div>;
};
export {FloatingInput};