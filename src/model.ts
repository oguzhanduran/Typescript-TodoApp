export interface Todo {
  id: number;
  todo: string;
  isDone: boolean;
}

// import { useReducer } from "react";

// type Actions =
//   | { type: "add"; payload: string }
//   | { type: "remove"; payload: number } // id -> number
//   | { type: "done"; payload: number };

// // add, remove and done are actions.

// const TodoReducer = (state: Todo[], action: Actions) => {};

// function ReducerExample() {
//   const [state, dispatch] = useReducer(TodoReducer, []);
//   return <div>model</div>;
// }

// export default ReducerExample;
