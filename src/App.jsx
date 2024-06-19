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

function App() {

  return (
    <NextUIProvider>
      {/* {loading ? <LoadingComponent /> : <></>} */}
      <BrowserRouter>
        <div className="app bg-gradient-to-b from-[#64996f] via-[#9ebf6d] to-[#c8de96] xs:p-[10px] p-[3px] pb-0">
          <main>
            <Routes>
              <Route path="/exchange" Component={Exchange} />
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
    </NextUIProvider>
  );
}

export default App;
