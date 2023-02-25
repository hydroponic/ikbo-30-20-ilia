import React from 'react';
export default function Props(props) {
  if (props.name)
    return (
      <div><h1>Props: {props.name}</h1></div>
    );
    else if (props.num) return (
      <div><h1>Props: {props.num}</h1></div>
    );
    else if (props.someparam) return (
      <div><h1>Props: {props.someparam}</h1></div>
    );
  }
