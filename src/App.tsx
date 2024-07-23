import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { Footer } from "./components/Footer";
import { Header } from "./components/Header";
import Home from "./pages/Home";
import About from "./pages/About";
import Resume from "./pages/Resume";
import { routes } from "./routes"
import { LanguageProvider } from './context/LanguageContext';


function App() {

  return (
    <Router>
      <div className="page-container">
        <LanguageProvider>
          <Header />
          <Routes>
            <Route path={routes.home} element={<Home />} />
            <Route path={routes.about} element={<About />} />
            <Route path={routes.resume} element={<Resume />} />
          </Routes>
          <Footer />
        </LanguageProvider>
      </div>
    </Router>
  );
}

export default App;
