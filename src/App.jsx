import { Route, Routes } from "react-router-dom";
import DisplayWarning from "./components/DisplayWarning/DisplayWarning";
import { Toaster } from "react-hot-toast";
import { lazy, Suspense } from "react";

const Home = lazy(() => import("./pages/Home"));
const Resume = lazy(() => import("./pages/Resume"));
const Work = lazy(() => import("./pages/Work"));
const Contact = lazy(() => import("./pages/Contact"));
const Header = lazy(() => import("./components/Header/Header"));
function App() {
  return (
    <div>
      <DisplayWarning />
      <Toaster />
      <Suspense
        fallback={
          <div className="flex items-center justify-center h-screen">
            loading ...
          </div>
        }
      >
        <Header />
        <Routes>
          <Route path="/" element={<Home />}></Route>
          <Route path="/resume" element={<Resume />}></Route>
          <Route path="/work" element={<Work />}></Route>
          <Route path="/contact" element={<Contact />}></Route>
        </Routes>
      </Suspense>
    </div>
  );
}
export default App;
