import React from 'react';
export const TodosItem = (props) => {
  const { toodo, ondelete } = props;

  return (
    <div className="card my-2 p-2">
      <h3>{toodo.name}</h3>
      <p>{toodo.desc}</p>
      <button className="btn btn-danger" onClick={() => ondelete(toodo)}>
        Delete
      </button>
    </div>
  );
};
