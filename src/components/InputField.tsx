import { useRef } from "react";
import "./styles.css";

interface Props {
  todo: string;
  setTodo: React.Dispatch<React.SetStateAction<string>>;
  handleAdd: (e: React.FormEvent) => void; // we are supposed to define this over here as well. Because we are supposed to define it everywhere we are sending this variable.
}

function InputField({ todo, setTodo, handleAdd }: Props) {
  // InputField: React.FC<Props> // We could write this way.

  // useRef: while using documentgetElementById in vanilla javascript to access to the DOM in React we use useRef.
  // if you want to find the type of the input or type of the form you just need to hover form or input.

  const inputRef = useRef<HTMLInputElement>(null);
  return (
    <form
      className="input"
      onSubmit={(e) => {
        handleAdd(e);
        inputRef.current?.blur(); // blur shift the focus from this input box.
      }}
    >
      <input
        ref={inputRef}
        type="input"
        placeholder="Enter a task"
        className="input__box"
        value={todo}
        onChange={(e) => setTodo(e.target.value)}
      />
      <button className="input_submit" type="submit">
        Go
      </button>
    </form>
  );
}

export default InputField;
