import { Route, Routes } from 'react-router-dom';
import DashboardHome from '../pages/AdminDashboard/DashboardHome';
import Categories from '../pages/AdminDashboard/Categories';
import Products from '../pages/AdminDashboard/Products';
import AdminLayout from '../layouts/AdminLayout';

const AdminRoutes = () => {
  return (
    <AdminLayout>
      <Routes>
        <Route path="/" element={<DashboardHome />} />
        <Route path="categories" element={<Categories />} />
        <Route path="products" element={<Products />} />
      </Routes>
    </AdminLayout>
  );
};

export default AdminRoutes;
