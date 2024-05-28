
import { Route, Routes } from 'react-router-dom';
import Sidebar from '../components/Sidebar';
import Topbar from '../components/Topbar';
import DashboardHome from '../pages/AdminDashboard/DashboardHome';
import Categories from '../pages/AdminDashboard/Categories';
import Products from '../pages/AdminDashboard/Products.jsx';

const AdminRoutes = () => {
  return (
    <div className="admin-layout">
      <Topbar />
      <div className="main-content">
        <Sidebar />
        <Routes>
          <Route path="/" element={<DashboardHome />} />
          <Route path="/categories" element={<Categories />} />
          <Route path="/products" element={<Products />} />
        </Routes>
      </div>
    </div>
  );
};

export default AdminRoutes;
