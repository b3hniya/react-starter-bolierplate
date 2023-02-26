import { ReactNode, useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";

type props = {
  children: ReactNode;
};

const AppLayout = ({ children }: props) => {
  const navigate = useNavigate();
  const [isAuthenticated, setIsAuthenticated] = useState(true);

  useEffect(() => {
    if (!isAuthenticated) navigate("/auth/login");
  }, [isAuthenticated]);

  return <div>{children}</div>;
};

export default AppLayout;
