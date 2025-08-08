import DashboardLayout from "../features/dashboard/DashboardLayout";
import DashboardFilter from "../features/dashboard/DashboardFilter";
import Heading from "../../shared/ui/Heading";
import Row from "../../shared/ui/Row";
import WelcomeBanner from "../../components/WelcomeBanner";

function Dashboard() {
  return (
    <>
      <WelcomeBanner />
      <Row type="horizontal">
        <Heading as="h1">Analytics Overview</Heading>
        <DashboardFilter />
      </Row>

      <DashboardLayout />
    </>
  );
}

export default Dashboard;
