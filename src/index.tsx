import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import App from "./App";
import fa_IR from "antd/locale/fa_IR";
import ConfigProvider from "antd/es/config-provider";
import Layout from "antd/es/layout";
import { BrowserRouter } from "react-router-dom";
const root = ReactDOM.createRoot(
  document.getElementById("root") as HTMLElement
);
root.render(
  <React.StrictMode>
    <ConfigProvider locale={fa_IR} direction="rtl">
      <BrowserRouter>
        <Layout>
          <App />
        </Layout>
      </BrowserRouter>
    </ConfigProvider>
  </React.StrictMode>
);
