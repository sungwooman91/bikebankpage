/* eslint-disable */
import "./App.css";
import { useState } from "react";

import { Mainlayout } from "./pages/Mainlayout";
import {
  DataContext,
  ServiceStatusContext,
  SetDataContext,
  SetServiceStatusContext,
} from "./common/DataContext";
// import GetStoreData from "./components/api/GetStoreData";

function App() {
  const [storeInfo, setStoreInfo] = useState(null);
  const [status, setStatus] = useState("default");

  return (
    <SetServiceStatusContext.Provider value={setStatus}>
      <ServiceStatusContext.Provider value={status}>
        <SetDataContext.Provider value={setStoreInfo}>
          <DataContext.Provider value={storeInfo}>
            <Mainlayout />
          </DataContext.Provider>
        </SetDataContext.Provider>
      </ServiceStatusContext.Provider>
    </SetServiceStatusContext.Provider>
  );
}

export default App;
