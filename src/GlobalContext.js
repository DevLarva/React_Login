import React, { createContext, useState } from 'react';

const GlobalContext = createContext();

export const GlobalContextProvider = ({ children }) => {
  const [user, setUser] = useState(null);

  return (
    <GlobalContext.Provider value={{ user, setUser }}>
      {children}
    </GlobalContext.Provider>
  );
};

export default GlobalContext;



//로그인 분기처리 코드
// import React, { createContext, useState } from 'react';

// export const GlobalContext = createContext();

// export const GlobalContextProvider = ({ children }) => {
//     const [isAuthenticated, setIsAuthenticated] = useState(false);

//     const login = () => {
//         setIsAuthenticated(true);
//     };

//     const logout = () => {
//         setIsAuthenticated(false);
//     };

//     return (
//         <GlobalContext.Provider value={{ isAuthenticated, login, logout }}>
//             {children}
//         </GlobalContext.Provider>
//     );
// };
