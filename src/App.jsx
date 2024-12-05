import { BrowserRouter, Routes, Route, createBrowserRouter } from 'react-router-dom';
import 'bootstrap/dist/css/bootstrap.min.css';
import Home from './Home';
import About from './About';
import Education from './Education';
import Hobbies from './Hobbies';
import Contact from './Contact';
import './App.css';

// Enable the future flags for React Router v7
const router = createBrowserRouter(
  [
    { path: "/", element: <Home /> },
    { path: "/About", element: <About /> },
    { path: "/Education", element: <Education /> },
    { path: "/Hobbies", element: <Hobbies /> },
    { path: "/Contact", element: <Contact /> },
  ],
  {
    future: {
      v7_startTransition: true,       // Enable startTransition feature
      v7_relativeSplatPath: true,     // Enable relative splat path behavior
    },
  }
);

const App = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/About" element={<About />} />
        <Route path="/Education" element={<Education />} />
        <Route path="/Hobbies" element={<Hobbies />} />
        <Route path="/Contact" element={<Contact />} />
      </Routes>
    </BrowserRouter>
  );
};

export default App;
