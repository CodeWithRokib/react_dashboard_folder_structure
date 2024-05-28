import Sidebar from '../components/Sidebar';
import Topbar from '../components/Topbar';

const AdminLayout = ({ children }) => {
  return (
    <div className="flex">
      <Sidebar />
      <div className="ml-64 w-full">
        <Topbar />
        <main className="pt-16 p-4">
          {children}
        </main>
      </div>
    </div>
  );
};

export default AdminLayout;
