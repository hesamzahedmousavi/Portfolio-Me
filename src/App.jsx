import { Route, Routes } from "react-router-dom";
import Header from "./components/Header/Header";
import Home from "./pages/Home";
import Resume from "./pages/Resume";
import DisplayWarning from "./components/DisplayWarning/DisplayWarning";
import Work from "./pages/Work";
import Contact from "./pages/Contact";
import { Toaster } from "react-hot-toast";
function App() {
  return (
    <div>
      <DisplayWarning />
      <Toaster />
      <Header />
      <Routes>
        <Route path="/" element={<Home />}></Route>
        <Route path="/resume" element={<Resume />}></Route>
        <Route path="/work" element={<Work />}></Route>
        <Route path="/contact" element={<Contact />}></Route>
      </Routes>
    </div>
  );
}
export default App;
