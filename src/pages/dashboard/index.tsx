import { PageBreadcrumb } from "../../components";
import Tasks from "./admin/Tasks";
import ProjectChart from "./admin/ProjectChart";
import QuickActions from "./admin/QuickActions";
import AIInsights from "./admin/AIInsights";
import BillingSummary from "./admin/BillingSummary";
import SupportTickets from "./admin/SupportTickets";
import RecentActivity from "./admin/RecentActivity";
import UploadArea from "../UploadFilesPage/UploadArea";
import PendingTasks from "./admin/PendingTasks";
import RecentNotifications from "./admin/RecentNotifications";
import YourClients from "./YourClients";
import LatestFileStatus from "./admin/LatestFileStatus";

const Dashboard = () => {
  return (
    <>
      <PageBreadcrumb title="Dashboard" name="Dashboard" breadCrumbItems={["Emirates", "Menu", "Dashboard"]} />

      <div className="grid 2xl:grid-cols-4 gap-6 mb-6">
        <div className="2xl:col-span-3">
          <Tasks />
          <ProjectChart />
        </div>
        <div className="2xl:col-span-1 space-y-6">
          <UploadArea />
          <YourClients />
        </div>
      </div>

      <div className="grid grid-cols-3 gap-6 mb-6">
        <QuickActions />
        <AIInsights />
        <BillingSummary />
        <PendingTasks />
        <RecentNotifications />
        <LatestFileStatus />
      </div>

      <div className="grid grid gap-6 mb-6">
        <SupportTickets />
        <RecentActivity />
      </div>
    </>
  );
};

export default Dashboard;