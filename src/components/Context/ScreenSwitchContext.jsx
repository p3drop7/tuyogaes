import React from "react";

export const ScreenSwitchContext = React.createContext();

const ScreenSwitchContextProvider = ({children}) => {

  const [screen, setScreen] = React.useState(1);

  const switchScreen = () => {
    screen === 1 && setScreen(2);
    screen === 2 && setScreen(1);
  };

  return (
    <ScreenSwitchContext.Provider value={{switchScreen, screen}}>
        {children}
    </ScreenSwitchContext.Provider>
  );
};

export default ScreenSwitchContextProvider;
