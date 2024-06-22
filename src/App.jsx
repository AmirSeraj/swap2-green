// import { useIntegration } from "@tma.js/react-router-integration";
// import {
//   bindMiniAppCSSVars,
//   bindThemeParamsCSSVars,
//   bindViewportCSSVars,
//   initClosingBehavior,
//   initNavigator,
//   useInitData,
//   useMiniApp,
//   useThemeParams,
//   useViewport,
// } from "@tma.js/sdk-react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Footer from "./components/Footer";
import { NextUIProvider } from "@nextui-org/system";
import Exchange from "./pages/Exchange";
import Friends from "./pages/Friends";
import Earn from "./pages/Earn";
import Boost from "./pages/Boost";
import Stats from "./pages/Stats";
import { useEffect, useState } from "react";
import LoadingComponent from "./components/LoadingComponent";
import { DataProvider, useData } from "./components/Context.jsx";
import { Navigate } from "react-router-dom";

function App() {
  const data = useData();
  const loading = data.loading;

  return (
    <NextUIProvider>
      {loading && <LoadingComponent />}
      <DataProvider>
        <BrowserRouter>
          <div className="app bg-gradient-to-b from-[#64996f] via-[#9ebf6d] to-[#c8de96] xs:px-3 px-1 pb-2">
            <main>
              <Routes>
                <Route path="/exchange" Component={Exchange} />
                <Route path="/" Component={Exchange} />
                <Route path="/friends" Component={Friends} />
                <Route path="/earn" Component={Earn} />
                <Route path="/boost" Component={Boost} />
                <Route path="/stats" Component={Stats} />
              </Routes>
            </main>
            <footer>
              <Footer />
            </footer>
          </div>
        </BrowserRouter>
      </DataProvider>
    </NextUIProvider>
  );
}

export default App;
