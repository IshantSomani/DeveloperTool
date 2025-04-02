import { Route, Routes } from "react-router-dom";
import Navbar from "./components/Navbar";
import Home from "./pages/Home";
import UiLibrary from "./pages/UiLibrary";
import VSCodeExtension from "./pages/VSCodeExtension";

function App() {
  return (
    <div className="min-h-screen flex flex-col relative overflow-hidden">
      <div className="absolute inset-0 -z-10 h-full w-full bg-white bg-[radial-gradient(#e5e7eb_1px,transparent_1px)] [background-size:16px_16px]" />
      <div className="absolute inset-0 -z-20 h-full w-full bg-gradient-to-br from-blue-50/30 via-transparent to-purple-50/30" />

      <div className="flex-grow sm:px-[5vw] md:px-[7vw] lg:px-[9vw] xl:px-[10vw] 2xl:px-[12vw]">
        <Navbar />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/ui-library" element={<UiLibrary />} />
          <Route path="/vs-code-extension" element={<VSCodeExtension />} />
        </Routes>
      </div>

      {/* Footer */}
      <footer className="py-8 mt-16 text-center text-gray-600 border-t border-gray-200">
        <p className="text-sm"> Built with ❤️ by Developer Tools Team </p>
      </footer>
    </div>
  );
}

export default App;
