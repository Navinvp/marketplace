import { createContext, useContext, useState } from 'react';

import collectionData from './collection-data.json';
import nftData from './nft-data.json';

const GlobalContext = createContext();

export const GlobalProvider = ({ children }) => {
  const [user, setUser] = useState(null);
  const [balance, setBalance] = useState(0.129);
  const [accountNFTs, setAccountNFTs] = useState([]);
  const [collections, setCollections] = useState([...collectionData]);
  const [nfts, setNFTs] = useState([...nftData]);
  const [isAccountVisible, setAccountVisible] = useState(false);

  const login = (userData) => {
    setUser({...userData});
    setBalance(userData?.balance);
  }

  const logout = () => {
    setUser(null);
    setAccountNFTs([]);
  };
  
  const addNFTToAccount = (nft) => setAccountNFTs((prev) => [...prev, nft]);

  return (
    <GlobalContext.Provider
      value={{
        user,
        accountNFTs,
        collections,
        nfts,
        balance,
        isAccountVisible,
        login,
        logout,
        setCollections,
        setNFTs,
        addNFTToAccount,
        setBalance,
        setAccountNFTs,
        setAccountVisible
      }}
    >
      {children}
    </GlobalContext.Provider>
  );
};

export const useGlobalContext = () => {
  const context = useContext(GlobalContext);
  return context;
};
