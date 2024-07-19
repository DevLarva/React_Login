import React, { useContext } from 'react';
import { Navigate } from 'react-router-dom';
import GlobalContext from './GlobalContext';

const PrivateRoute = ({ children }) => {
    const { user } = useContext(GlobalContext);

    return user ? children : <Navigate to="/" />;
};

export default PrivateRoute;


//로그인 분기처리 코드
// import React, { useContext } from 'react';
// import { Navigate } from 'react-router-dom';
// import { GlobalContext } from './GlobalContext';

// const PrivateRoute = ({ children }) => {
//     const { isAuthenticated } = useContext(GlobalContext);

//     return isAuthenticated ? children : <Navigate to="/" />;
// };

// export default PrivateRoute;
