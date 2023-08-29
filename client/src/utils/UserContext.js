import React, { useEffect, useState, createContext, useContext } from 'react';
import { QUERY_ME } from './queries';
import { useQuery } from '@apollo/client';

// Initialize new context for students
const UserContext = createContext();

// We create a custom hook to provide immediate usage of the student context in other components
export const useUserContext = () => useContext(UserContext);

// StudentProvider component that holds initial state, returns provider component
export const UserProvider = ({ children }) => {
  const { loading, data } = useQuery(QUERY_ME);
  const [userInfo, setUserInfo] = useState();
  
  useEffect(() => {
    if (data !== undefined) {
     setUserInfo(data);
     console.log(data);
    }
   }, [data]);

  // Provider components expect a value prop to be passed
  return (
    <UserContext.Provider value={userInfo}>
      {/* Render children passed from props */}
      {children}
    </UserContext.Provider>
  );
};
