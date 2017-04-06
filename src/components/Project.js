import React from 'react'

export const Project = (props) => (
  <div>
    {/*TODO: responsive sizes for images*/}
    <img src={"images/" + props.image} alt={props.alt} height="200px" width="200px"/>
    <h1>{props.name}</h1>
    <p>{props.description}</p>
  </div>
);