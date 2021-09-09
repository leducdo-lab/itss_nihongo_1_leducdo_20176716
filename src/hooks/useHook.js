import React, { useState } from "react";

function useHook() {
  const defaultStudents = ["Huyen", "Hoa", "Hung", "Long"];
  const [students, setStudents] = useState(defaultStudents);

  const listStudent = React.useCallback(() => {
    let result = null;
    result = students.map((st, i) => {
      if (i === students.length - 1) {
        return <span key={i}>{st}</span>;
      }
      return <span key={i}>{`${st},`}</span>;
    });
    return result;
  }, [students]);

  const removeStudent = (list) => {
    setStudents([...list]);
  };

  return [students, listStudent, defaultStudents, removeStudent];
}

export default useHook;
