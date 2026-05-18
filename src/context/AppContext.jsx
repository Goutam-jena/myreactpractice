import { createContext, useState, useContext } from 'react';
import { MOCK_PRODUCTS } from '../utils/mockData';

// 1. Initialize the Context
const AppContext = createContext();

// 2. Create the Provider Component wrapper
export function AppProvider({ children }) {
  const [products] = useState(MOCK_PRODUCTS);
  const [searchQuery, setSearchQuery] = useState('');

  return (
    <AppContext.Provider value={{ products, searchQuery, setSearchQuery }}>
      {children}
    </AppContext.Provider>
  );
}

// 3. Create a custom hook for easy importing later
export function useApp() {
  return useContext(AppContext);
}