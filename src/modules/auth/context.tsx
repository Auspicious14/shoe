import React, { createContext, useContext, useState, useEffect } from "react";

interface IStoreContext {
  currentUser: null;
  setCurrentUser: (params: any) => void;
}
const UserContext = createContext<IStoreContext>({
  currentUser: null,
  setCurrentUser(params) {},
});

const useUserState = () => {
  const context = React.useContext(UserContext);
  return context;
};

interface IProps {
  children: React.ReactNode;
}
const UserContextProvider: React.FC<IProps> = ({ children }) => {
  const [currentUser, setCurrentUser] = useState(null);
  // const value = { currentUser, setCurrentUser };
  useEffect(() => {
    // const logOut = onAuthStateChangedListener((user: any) => {
    //   console.log(user);
    //   setCurrentUser(user);
    // });
    // return logOut;
  }, []);
  return (
    <UserContext.Provider value={{ currentUser, setCurrentUser }}>
      {children}
    </UserContext.Provider>
  );
};

export { UserContextProvider, useUserState };
