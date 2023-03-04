import React from "react";

export const ClassContext = React.createContext();

const ClassContextProvider = ({ children }) => {
  const [myClassList, setMyClassList] = React.useState([]);

  const addClass = (selectedClass) => {
    setMyClassList([...myClassList, selectedClass]);
  };

  const deleteClass = (selectedClass) => {
    const newClassArray = myClassList.filter(
      (item) => item.key === !selectedClass.key
    );
    setMyClassList(newClassArray);
  };

  React.useEffect(() => {
    console.log(myClassList)
  }, [myClassList])
  
  return (
    <ClassContext.Provider
      value={{ myClassList, setMyClassList, addClass, deleteClass }}
    >
      {children}
    </ClassContext.Provider>
  );
};

export default ClassContextProvider;
