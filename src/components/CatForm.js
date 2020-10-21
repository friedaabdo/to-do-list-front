import React, { useState } from "react";

const CatForm = (props) => {
    console.log(props)
  const url = props.url;

  const emptyCateg = {
    category: "",
    list: [],
  };

  const handleCreateCateg = (newCateg) => {
    fetch(url + "/categories/create/", {
      method: "post",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(newCateg),
    }).then((res) => props.getCategs());
  };

  const [formData, setFormData] = useState(emptyCateg);

  const handleChange = event => {
      console.log('event.target.value',event.target.value) 

      setFormData({...formData, [event.target.name]: event.target.value})}

  const handleSubmitCateg = (event) => {
      event.preventDefault()
      handleCreateCateg(formData)
      props.history.push('/')
  }


  return (
    <form>
      <input
        type="text"
        name="category"
        value={formData.category}
        onChange={handleChange}
      />
      {/* <input  type="text"
        name="name"
        value={formData.category}
        onChange={handleChange}/> */}
      <button onClick={handleSubmitCateg}>Create Category</button>
    </form>
  );
};

export default CatForm;
