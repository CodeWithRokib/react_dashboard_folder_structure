
import { Route, Routes } from 'react-router-dom';
import Header from './components/Header';
import Footer from './components/Footer';
import Home from './pages/Home';
import Login from './pages/Login';
import AdminRoutes from './routes/AdminRoutes';
import './App.css';

const App = () => {
  return (
    <div className="App">
      <Routes>
        <Route path="/*" element={<MainLayout />} />
        <Route path="/admin/*" element={<AdminRoutes />} />
      </Routes>
    </div>
  );
};

const MainLayout = () => (
  <>
    <Header />
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/login" element={<Login />} />
    </Routes>
    <Footer />
  </>
);

export default App;
