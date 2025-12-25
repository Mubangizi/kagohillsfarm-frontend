"use client";
import { createContext, useContext, useState, ReactNode } from "react";

// Create context for header light mode
const HeaderLightContext = createContext<{
  isLight: boolean;
  setIsLight: (value: boolean) => void;
} | null>(null);

export const useHeaderLight = () => {
  const context = useContext(HeaderLightContext);
  if (!context) {
    throw new Error("useHeaderLight must be used within HeaderLightProvider");
  }
  return context;
};

export default function HeaderLightProvider({ children }: { children: ReactNode }) {
  const [isLight, setIsLight] = useState(false);

  return (
    <HeaderLightContext.Provider value={{ isLight, setIsLight }}>
      {children}
    </HeaderLightContext.Provider>
  );
}

