import React from 'react';
import { TodosItem } from './TodosItem';

export const Todos = (props) => {
  return (
    <div>
      {props.todoo.length === 0
        ? ""
        : props.todoo.map((todo) => (
            <TodosItem key={todo.sno} toodo={todo} ondelete={props.ondelete} />
          ))
      }
    </div>
  );
};
