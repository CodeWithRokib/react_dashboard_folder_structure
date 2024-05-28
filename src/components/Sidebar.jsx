import { Link } from 'react-router-dom';

const Sidebar = () => {
  return (
    <aside className="w-64 h-screen bg-gray-900 text-white fixed">
      <nav className="mt-10">
        <ul>
          <li className="mb-4">
            <Link to="/admin/" className="block py-2 px-4 hover:bg-gray-700">Dashboard</Link>
          </li>
          <li className="mb-4">
            <Link to="/admin/categories" className="block py-2 px-4 hover:bg-gray-700">Categories</Link>
          </li>
          <li className="mb-4">
            <Link to="/admin/products" className="block py-2 px-4 hover:bg-gray-700">Products</Link>
          </li>
        </ul>
      </nav>
    </aside>
  );
};

export default Sidebar;
