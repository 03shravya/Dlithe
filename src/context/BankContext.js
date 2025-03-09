import React, { createContext, useState } from "react";

const BankContext = createContext();

export function BankProvider({ children }) {
  const [user, setUser] = useState(null);

  return (
    <BankContext.Provider value={{ user, setUser }}>
      {children}
    </BankContext.Provider>
  );
}

export default BankContext;

import { BankProvider } from "./context/BankContext";

function App() {
  return (
    <BankProvider>
      {/* Router and components here */}
    </BankProvider>
  );
}

