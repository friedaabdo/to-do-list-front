import React from "react";
import List from "./List";
import { Route, Link, Switch } from "react-router-dom"


const Category = (props) => {
  return (
    <div>
        <h2>{props.catName}</h2>
      <List />
      <Link to="/lists/"><button>Add to list</button></Link>
    </div>
  );
};

export default Category;
