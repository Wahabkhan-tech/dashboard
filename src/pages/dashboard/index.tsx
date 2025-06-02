import { PageBreadcrumb } from "../../components";
import Tasks from "./Tasks";
import ProjectChart from "./ProjectChart";
import QuickActions from "./QuickActions";
import AIInsights from "./AIInsights";
import BillingSummary from "./BillingSummary";
import SupportTickets from "./SupportTickets";
import RecentActivity from "./RecentActivity";
import UploadArea from "../UploadFilesPage/UploadArea";
import PendingTasks from "./PendingTasks";
import RecentNotifications from "./RecentNotifications";
import YourClients from "./YourClients";
import LatestFileStatus from "./LatestFileStatus";

const Dashboard = () => {
  const userRole = JSON.parse(sessionStorage.getItem("konrix_user") || "{}")?.role || "Customer";

  const renderComponent = (component: React.ReactNode, roles: string[]) => {
    return roles.includes(userRole) ? component : null;
  };

  return (
    <>
      <PageBreadcrumb
        title="Dashboard"
        name="Dashboard"
        breadCrumbItems={["Emirates", "Menu", "Dashboard"]}
      />

      <div className=" p-4 sm:p-6 lg:p-8">
        <div className="grid 2xl:grid-cols-4 gap-6 mb-6">
          <div className="2xl:col-span-3">
            {renderComponent(<Tasks />, ["Admin", "Consultant", "Customer"])}
            {renderComponent(<ProjectChart />, ["Admin", "Customer"])}
          </div>
          <div className="2xl:col-span-1 space-y-6">
            {renderComponent(<UploadArea />, ["Customer"])}
            {renderComponent(<YourClients />, ["Consultant"])}
          </div>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 mb-6">
          {renderComponent(<QuickActions />, ["Admin"])}
          {renderComponent(<AIInsights />, ["Admin", "Consultant"])}
          {renderComponent(<BillingSummary />, ["Admin", "Customer"])}
          {renderComponent(<PendingTasks />, [])}
          {renderComponent(<RecentNotifications />, ["Consultant"])}
          {renderComponent(<LatestFileStatus />, ["Consultant", "Customer"])}
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 mb-6">
          {renderComponent(<SupportTickets />, ["Admin", "Consultant", "Customer"])}
          {renderComponent(<RecentActivity />, ["Admin", "Customer"])}
        </div>
      </div>
    </>
  );
};

export default Dashboard;