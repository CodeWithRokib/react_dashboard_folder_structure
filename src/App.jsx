import { Route, Routes } from 'react-router-dom';
import Home from './pages/Home';
import Login from './pages/Login';
import AdminRoutes from './routes/AdminRoutes';
import Header from './components/Header';
import Footer from './components/Footer';
import Register from './pages/Register';

const App = () => {
  return (
    <div>
      <Routes>
      <Route path="/" element={<MainLayout />}>
          <Route index element={<Home />} />
          <Route path="register" element={<Register />} />
          <Route path="login" element={<Login />} />
      </Route>
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
      <Route path="register" element={<Register />} /> 
      <Route path="login" element={<Login />} />

    </Routes>
    <Footer />
  </>
);

export default App;
