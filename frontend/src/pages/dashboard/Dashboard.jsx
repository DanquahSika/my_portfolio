import DashboardNavbar from "../../components/dashboard-components/db-navbar";
import Sidebar from "../../components/dashboard-components/sidebar";

const Dashboard = () => {
  return (
    <div style={{ position: 'relative' }}>
      <DashboardNavbar style={{ position: 'fixed', width: '100%', zIndex: 1 }} />
      <div style={{ marginTop: '64px', zIndex: 0 }}>
      <Sidebar />
      </div>
    </div>
  );
};

export default Dashboard;
