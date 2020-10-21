import React from "react";
import List from "./List";
import { Route, Link, Switch } from "react-router-dom"


const Category = (props) => {
    console.log('category props',props)
  return (
    <div>
        <article>
          <p>{props.category}</p>
        
          <Link to={'categories/' + props.category}><button>Go to List</button></Link>
        </article>
    
      <List url={props.url}/>
      <Link to="/lists/"><button>Add to list</button></Link>
    </div>
  );
};

export default Category;
