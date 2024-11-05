import ReactDOM from "react-dom/client";
import React from "react";
import "./index.css";
import {
  createBrowserRouter,
  createRoutesFromElements,
  Route,
  RouterProvider,
} from "react-router-dom";
// ----------components
import App from "./App";
import Dashboard from "./pages/dashboard/Dashboard";
import Team from "./pages/team/Team";
import Contacts from "./pages/contact/Contact";
import Invoices from "./pages/invoices/Invoices";
import Profile from "./pages/profile/Profile";
import Calendar from "./pages/Calendar/Calendar";
import Faq from "./pages/faq/Faq";
import BarChart from "./pages/BarChart/BarChart";
import PieChart from "./pages/PieChart/PieChart";
import LineChart from "./pages/LineChart/LineChart";
import GeographyChart from "./pages/GeographyChart/GeographyChart";

//-----------router
const router = createBrowserRouter(
  createRoutesFromElements(
    <Route path="/" element={<App />}>
      <Route index element={<Dashboard />} />
      <Route path="team" element={<Team />} />
      <Route path="contacts" element={<Contacts />} />
      <Route path="invoices" element={<Invoices />} />
      <Route path="from" element={<Profile />} />
      <Route path="calender" element={<Calendar />} />
      <Route path="faq" element={<Faq />} />
      <Route path="bar" element={<BarChart />} />
      <Route path="pie" element={<PieChart />} />
      <Route path="line" element={<LineChart />} />
      <Route path="geography" element={<GeographyChart />} />
    </Route>
  )
);
ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
);
