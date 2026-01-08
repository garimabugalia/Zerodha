

import { useEffect, useState } from "react";

const useAuth = () => {
  const [loading, setLoading] = useState(true);
  const [isAuthenticated, setIsAuthenticated] = useState(false);

  useEffect(() => {
    fetch("http://localhost:3000/api/me", {
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
