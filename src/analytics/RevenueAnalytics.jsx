import styled from "styled-components";
import DashboardBox from "../modules/features/dashboard/DashboardBox";
import Heading from "../shared/ui/Heading";
import {
  BarChart,
  Bar,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  ResponsiveContainer,
  PieChart,
  Pie,
  Cell,
} from "recharts";
import { useDarkMode } from "../context/DarkModeContext";
import { formatCurrency } from "../shared/ui/utils/Helper";

const StyledRevenueAnalytics = styled(DashboardBox)`
  grid-column: 1 / -1;
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 2rem;

  .dark-mode & {
    background: rgba(24, 33, 47, 0.85);
  }

  @media (max-width: 768px) {
    grid-template-columns: 1fr;
  }
`;

const ChartContainer = styled.div`
  height: 300px;
`;

const RevenueStats = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 1rem;
  margin-bottom: 1rem;
`;

const StatCard = styled.div`
  background: var(--color-grey-0);
  border: 1px solid var(--color-grey-100);
  border-radius: 0.5rem;
  padding: 1rem;
  text-align: center;
`;

const StatValue = styled.div`
  font-size: 1.5rem;
  font-weight: 600;
  color: var(--color-brand-600);
`;

const StatLabel = styled.div`
  font-size: 0.875rem;
  color: var(--color-grey-600);
  margin-top: 0.25rem;
`;

function RevenueAnalytics({ bookings, cabins }) {
  const { isDarkMode } = useDarkMode();

  // Calculate revenue by cabin
  const revenueByCabin = cabins.map((cabin) => {
    const cabinBookings = bookings.filter(
      (booking) => booking.cabinId === cabin.id
    );
    const totalRevenue = cabinBookings.reduce(
      (acc, booking) => acc + booking.totalPrice,
      0
    );
    const avgRevenue =
      cabinBookings.length > 0 ? totalRevenue / cabinBookings.length : 0;

    return {
      name: cabin.name,
      revenue: totalRevenue,
      avgRevenue: avgRevenue,
      bookings: cabinBookings.length,
    };
  });

  // Calculate payment status distribution
  const paymentStats = [
    {
      name: "Paid",
      value: bookings.filter((b) => b.isPaid).length,
      color: "#22c55e",
    },
    {
      name: "Pending",
      value: bookings.filter((b) => !b.isPaid).length,
      color: "#f59e0b",
    },
  ];

  // Calculate total metrics
  const totalRevenue = bookings.reduce(
    (acc, booking) => acc + booking.totalPrice,
    0
  );
  const avgBookingValue =
    bookings.length > 0 ? totalRevenue / bookings.length : 0;
  const paidBookings = bookings.filter((b) => b.isPaid).length;
  const pendingBookings = bookings.filter((b) => !b.isPaid).length;

  const colors = isDarkMode
    ? {
        text: "#e5e7eb",
        background: "#18212f",
        grid: "#374151",
      }
    : {
        text: "#374151",
        background: "#fff",
        grid: "#e5e7eb",
      };

  return (
    <StyledRevenueAnalytics>
      <div>
        <Heading as="h3">Revenue by Cabin</Heading>
        <RevenueStats>
          <StatCard>
            <StatValue>{formatCurrency(totalRevenue)}</StatValue>
            <StatLabel>Total Revenue</StatLabel>
          </StatCard>
          <StatCard>
            <StatValue>{formatCurrency(avgBookingValue)}</StatValue>
            <StatLabel>Avg Booking Value</StatLabel>
          </StatCard>
        </RevenueStats>
        <ChartContainer>
          <ResponsiveContainer width="100%" height="100%">
            <BarChart data={revenueByCabin}>
              <CartesianGrid strokeDasharray="3 3" stroke={colors.grid} />
              <XAxis
                dataKey="name"
                tick={{ fill: colors.text }}
                tickLine={{ stroke: colors.text }}
              />
              <YAxis
                tick={{ fill: colors.text }}
                tickLine={{ stroke: colors.text }}
                unit="$"
              />
              <Tooltip
                contentStyle={{ backgroundColor: colors.background }}
                formatter={(value) => [formatCurrency(value), "Revenue"]}
              />
              <Bar dataKey="revenue" fill="#4f46e5" />
            </BarChart>
          </ResponsiveContainer>
        </ChartContainer>
      </div>

      <div>
        <Heading as="h3">Payment Status Distribution</Heading>
        <RevenueStats>
          <StatCard>
            <StatValue>{paidBookings}</StatValue>
            <StatLabel>Paid Bookings</StatLabel>
          </StatCard>
          <StatCard>
            <StatValue>{pendingBookings}</StatValue>
            <StatLabel>Pending Payments</StatLabel>
          </StatCard>
        </RevenueStats>
        <ChartContainer>
          <ResponsiveContainer width="100%" height="100%">
            <PieChart>
              <Pie
                data={paymentStats}
                cx="50%"
                cy="50%"
                outerRadius={80}
                dataKey="value"
                label={({ name, percent }) =>
                  `${name} ${(percent * 100).toFixed(0)}%`
                }
              >
                {paymentStats.map((entry, index) => (
                  <Cell key={`cell-${index}`} fill={entry.color} />
                ))}
              </Pie>
              <Tooltip contentStyle={{ backgroundColor: colors.background }} />
            </PieChart>
          </ResponsiveContainer>
        </ChartContainer>
      </div>
    </StyledRevenueAnalytics>
  );
}

export default RevenueAnalytics;
