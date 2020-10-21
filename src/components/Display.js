import React from "react";
import { Route, Link, Switch } from "react-router-dom";
import Category from "./Category";

const Display = (props) => {
  console.log("display props", props);
  const { categs } = props;
  const onLoad = () => (
    <div>
      <Link to="/categories/create">
        <button>Add Category</button>
      </Link>
      {categs.map((categ) => (
        <Category categ={categ} />
      ))}
    </div>
  );
  return categs.length > 0 ? (
    onLoad()
  ) : (
    <>
      <h3>Create a Category for your list!</h3>
      <Link to="/categories/create">
        <button>Add Category</button>
      </Link>
    </>
  );
};

export default Display;
