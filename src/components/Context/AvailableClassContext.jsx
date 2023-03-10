import React from "react";

export const AvailableClassContext = React.createContext()

const AvailableClassContextProvider =({children})=> {

    const [availableClasses, setAvailableClasses] = React.useState([])

    const [fetched, setFetched] = React.useState([
		  {status: 'disponible', dateString: '2023-03-13', day: 13, month: 3, year: 2023, time: 10},
      {status: 'disponible', dateString: '2023-03-13', day: 13, month: 3, year: 2023, time: 17},
      {status: 'sin cupos', dateString: '2023-03-13', day: 13, month: 3, year: 2023, time: 18},
      {status: 'sin cupos', dateString: '2023-03-13', day: 13, month: 3, year: 2023, time: 19},
      {status: 'disponible', dateString: '2023-03-14', day: 14, month: 3, year: 2023, time: 10},
      {status: 'cancelada', dateString: '2023-03-14', day: 14, month: 3, year: 2023, time: 17},
      {status: 'disponible', dateString: '2023-03-14', day: 14, month: 3, year: 2023, time: 18},
      {status: 'disponible', dateString: '2023-03-14', day: 14, month: 3, year: 2023, time: 19},
      {status: 'sin cupos', dateString: '2023-03-15', day: 15, month: 3, year: 2023, time: 10},
      {status: 'disponible', dateString: '2023-03-15', day: 15, month: 3, year: 2023, time: 17},
      {status: 'disponible', dateString: '2023-03-15', day: 15, month: 3, year: 2023, time: 18},
      {status: 'sin cupos', dateString: '2023-03-15', day: 15, month: 3, year: 2023, time: 19},
      {status: 'disponible', dateString: '2023-03-16', day: 16, month: 3, year: 2023, time: 10},
      {status: 'disponible', dateString: '2023-03-16', day: 16, month: 3, year: 2023, time: 17},
      {status: 'sin cupos', dateString: '2023-03-16', day: 16, month: 3, year: 2023, time: 18},
      {status: 'disponible', dateString: '2023-03-16', day: 16, month: 3, year: 2023, time: 19},
    ])

  const getMonth = (monthNum) => {
    let months = {
      1: "Enero",
      2: "Febrero",
      3: "Marzo",
      4: "Abril",
      5: "Mayo",
      6: "Junio",
      7: "Julio",
      8: "Agosto",
      9: "Septiembre",
      10: "Octubre",
      11: "Noviembre",
      12: "Diciembre",
    };
    return months[monthNum];
  };

  React.useEffect(() => {
    let counter = 0
    const fetchedAvailableClasses = fetched.map((item) => {
      counter++
      return { ...item, monthName: getMonth(item.month), key: Date.now() + counter };
    });
    
    setAvailableClasses(fetchedAvailableClasses)
  }, [fetched])
  
  return (
    <AvailableClassContext.Provider value={availableClasses}>
      {children}
    </AvailableClassContext.Provider>
  );
}

export default AvailableClassContextProvider