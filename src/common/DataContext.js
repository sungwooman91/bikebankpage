import { createContext } from "react";

export const DataContext = createContext(null);
export const SetDataContext = createContext(() => {});

export const ServiceStatusContext = createContext(null);
export const SetServiceStatusContext = createContext(() => {});
