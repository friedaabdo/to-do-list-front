import React from "react";
import { Route, Link, Switch } from "react-router-dom"


const Display = (props) => {
  const { categs } = props;
  const onLoad = () => (
    <div>
        
      {categs.map((categ) => (
        <article>
          <p>{categ.category}</p>
          <button>Expand List</button>
        </article>
      ))}
    </div>
  );
  return categs.length > 0 ? (
    onLoad()
  ) : (
      <>
    <h3>Create a Category for your list!</h3>
    <Link exact path="/categories/create"><button>Add Category</button></Link>
      </>
  );
};

export default Display;
