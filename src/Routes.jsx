import Employee from "./components/Employee";
import Home from "./components/Home";
import Admin from "./components/Admin";

export const routes = [
  {
    path: "/home",
    component: <Home />,
  },
  {
    path: "/employee",
    component: <Employee />,
  },
  {
    path: "/",
    component: <Admin/>
  }
];
