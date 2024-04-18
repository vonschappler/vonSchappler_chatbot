// import Versions from "./components/Versions";
// import electronLogo from "./assets/electron.svg";
// import "./assets/main.css";

// function App() {
//   const ipcHandle = () => window.electron.ipcRenderer.send("ping");

//   return (
//     <>
//       <img alt="logo" className="logo" src={electronLogo} />
//       <div className="creator">Powered by electron-vite</div>
//       <div className="text">
//         Build an Electron app with <span className="react">React</span>
//       </div>
//       <p className="tip">
//         Please try pressing <code>F12</code> to open the devTool
//       </p>
//       <div className="actions">
//         <div className="action">
//           <a href="https://electron-vite.org/" target="_blank" rel="noreferrer">
//             Documentation
//           </a>
//         </div>
//         <div className="action">
//           <a target="_blank" rel="noreferrer" onClick={ipcHandle}>
//             Send IPC
//           </a>
//         </div>
//       </div>
//       <Versions></Versions>
//     </>
//   );
// }

// export default App;

import { createBrowserRouter, RouterProvider } from "react-router-dom";
import { useDispatch } from "react-redux";
import { useEffect } from "react";

import AppLayout from "./ui/AppLayout";

import { setPage } from "./features/view/viewFeatures.slice";

import Console from "./pages/Console";
import Commands from "./pages/Commands";
import Settings from "./pages/Settings";

const routes = createBrowserRouter([
  {
    element: <AppLayout />,
    children: [
      { path: "/", element: <Console /> },
      { path: "/commands", element: <Commands /> },
      { path: "/settings", element: <Settings /> },
    ],
  },
]);

const App = () => {
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(setPage("Console"));
  }, [dispatch]);
  return <RouterProvider router={routes} />;
};

export default App;
