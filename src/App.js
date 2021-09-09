import { useState, useCallback } from "react";
import "./App.css";
import useHook from "./hooks/useHook";

function App() {
  const [students, listStudent, defaultStudents, removeStudent] = useHook();
  const [name, setName] = useState("");

  const removeStudentInList = () => {
    if (!name) {
      return;
    } else {
      let index = students.findIndex((student) => student === name);
      if (index !== -1) {
        students.splice(index, 1);
        removeStudent([...students]);
      }
    }
    setName("");
  };

  const showDefault = useCallback(() => {
    let result = null;
    result = defaultStudents.map((st, i) => {
      if (i === defaultStudents.length - 1) {
        return <span key={i}>{st}</span>;
      }
      return <span key={i}>{`${st},`}</span>;
    });
    return result;
  }, [defaultStudents]);

  return (
    <div className="App">
      <p>学生一覧：[{showDefault()}]</p>
      <p>削除値を入力してください。</p>
      <input
        type="text"
        name="name"
        className="input"
        value={name}
        onChange={(e) => {
          setName(e.target.value);
        }}
      />
      <button type="button" onClick={removeStudentInList} className="button">
        確定
      </button>
      <br />
      <p>削除した名前: {name}</p>
      <p>新しい一覧： [{listStudent()}]</p>
    </div>
  );
}

export default App;
