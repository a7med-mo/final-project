import { RouterProvider } from "react-router-dom";
import { routes } from "./router/routing";


export default function App() {

  return <RouterProvider router={routes} />
}
