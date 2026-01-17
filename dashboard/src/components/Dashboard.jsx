


import { Route, Routes } from "react-router-dom";


import { useEffect } from "react";

// import Apps from "./Apps";
import Funds from "./Funds";
import Holdings from "./Holdings";

import Orders from "./Orders";
import Positions from "./Positions";
import Summary from "./Summary";
import WatchList from "./WatchList";
import { GeneralContextProvider } from "./GeneralContext";
import useAuth from "../hooks/useAuth";
import SIGNUP_URL from "../config/api";
const Dashboard = () => {


  const { loading, isAuthenticated } = useAuth();

  if (loading) return <p>Loading...</p>;

  if (!isAuthenticated) {
    window.location.href = `${SIGNUP_URL}`;
    return null;
  }

  return (
    <div className="dashboard-container">
      <GeneralContextProvider>
        <WatchList />
      </GeneralContextProvider>
      <div className="content">
        <Routes>
          <Route exact path="/" element={<Summary />} />
          <Route path="/orders" element={<Orders />} />
          <Route path="/holdings" element={<Holdings />} />
          <Route path="/positions" element={<Positions />} />
          <Route path="/funds" element={<Funds />} />
          {/* <Route path="/apps" element={<Apps />} /> */}
        </Routes>
      </div>
    </div>
  );
};

export default Dashboard;