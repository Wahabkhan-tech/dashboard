import { PageBreadcrumb } from "../../components";
import Tasks from "./Tasks";
import ProjectChart from "./ProjectChart";
// import ProjectSummary from "./ProjectSummary";
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