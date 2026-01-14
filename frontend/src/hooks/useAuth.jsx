

import { useEffect, useState } from "react";
import API_BASE from '../landingpage/config/api';
const useAuth = () => {
  const [loading, setLoading] = useState(true);
  const [isAuthenticated, setIsAuthenticated] = useState(false);

  useEffect(() => {
    fetch(`${API_BASE}/api/me`, {
      credentials: "include",
    })
      .then(res => {
        setIsAuthenticated(res.ok);
        setLoading(false);
      })
      .catch(() => {
        setIsAuthenticated(false);
        setLoading(false);
      });
  }, []);

  return { loading, isAuthenticated };
};

export default useAuth;
