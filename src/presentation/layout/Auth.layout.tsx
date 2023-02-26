import { ReactNode } from "react";

type props = {
  children: ReactNode;
};

const AuthLayout = ({ children }: props) => {
  return <div>{children}</div>;
};

export default AuthLayout;
