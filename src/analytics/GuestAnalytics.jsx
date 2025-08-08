import styled from "styled-components";
import DashboardBox from "../modules/features/dashboard/DashboardBox";
import Heading from "../shared/ui/Heading";
import {
  LineChart,
  Line,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  ResponsiveContainer,
  BarChart,
  Bar,
} from "recharts";
import { useDarkMode } from "../context/DarkModeContext";
import { format, eachDayOfInterval, subDays, isSameDay } from "date-fns";

const StyledGuestAnalytics = styled(DashboardBox)`
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

const GuestStats = styled.div`
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

function GuestAnalytics({ bookings, numDays }) {
  const { isDarkMode } = useDarkMode();

  // Calculate guest arrival trends
  const allDates = eachDayOfInterval({
    start: subDays(new Date(), numDays - 1),
    end: new Date(),
  });

  const arrivalData = allDates.map((date) => {
    const arrivals = bookings.filter((booking) =>
      isSameDay(date, new Date(booking.startDate))
    );

    return {
      date: format(date, "MMM dd"),
      arrivals: arrivals.length,
      totalGuests: arrivals.reduce(
        (acc, booking) => acc + booking.numGuests,
        0
      ),
    };
  });

  // Calculate guest group size distribution
  const groupSizes = {};
  bookings.forEach((booking) => {
    const size = booking.numGuests;
    groupSizes[size] = (groupSizes[size] || 0) + 1;
  });

  const groupSizeData = Object.entries(groupSizes).map(([size, count]) => ({
    size: `${size} Guest${size > 1 ? "s" : ""}`,
    count,
  }));

  // Calculate metrics
  const totalGuests = bookings.reduce(
    (acc, booking) => acc + booking.numGuests,
    0
  );
  const avgGroupSize = bookings.length > 0 ? totalGuests / bookings.length : 0;
  const uniqueGuests = new Set(bookings.map((b) => b.guestId)).size;
  const repeatBookings = bookings.length - uniqueGuests;

  const colors = isDarkMode
    ? {
        text: "#e5e7eb",
        background: "#18212f",
        grid: "#374151",
        line: "#8b5cf6",
        bar: "#06b6d4",
      }
    : {
        text: "#374151",
        background: "#fff",
        grid: "#e5e7eb",
        line: "#8b5cf6",
        bar: "#06b6d4",
      };

  return (
    <StyledGuestAnalytics>
      <div>
        <Heading as="h3">Guest Arrival Trends</Heading>
        <GuestStats>
          <StatCard>
            <StatValue>{totalGuests}</StatValue>
            <StatLabel>Total Guests</StatLabel>
          </StatCard>
          <StatCard>
            <StatValue>{avgGroupSize.toFixed(1)}</StatValue>
            <StatLabel>Avg Group Size</StatLabel>
          </StatCard>
        </GuestStats>
        <ChartContainer>
          <ResponsiveContainer width="100%" height="100%">
            <LineChart data={arrivalData}>
              <CartesianGrid strokeDasharray="3 3" stroke={colors.grid} />
              <XAxis
                dataKey="date"
                tick={{ fill: colors.text }}
                tickLine={{ stroke: colors.text }}
              />
              <YAxis
                tick={{ fill: colors.text }}
                tickLine={{ stroke: colors.text }}
              />
              <Tooltip contentStyle={{ backgroundColor: colors.background }} />
              <Line
                type="monotone"
                dataKey="arrivals"
                stroke={colors.line}
                strokeWidth={2}
                name="Arrivals"
              />
              <Line
                type="monotone"
                dataKey="totalGuests"
                stroke={colors.bar}
                strokeWidth={2}
                name="Total Guests"
              />
            </LineChart>
          </ResponsiveContainer>
        </ChartContainer>
      </div>

      <div>
        <Heading as="h3">Group Size Distribution</Heading>
        <GuestStats>
          <StatCard>
            <StatValue>{uniqueGuests}</StatValue>
            <StatLabel>Unique Guests</StatLabel>
          </StatCard>
          <StatCard>
            <StatValue>{repeatBookings}</StatValue>
            <StatLabel>Repeat Bookings</StatLabel>
          </StatCard>
        </GuestStats>
        <ChartContainer>
          <ResponsiveContainer width="100%" height="100%">
            <BarChart data={groupSizeData}>
              <CartesianGrid strokeDasharray="3 3" stroke={colors.grid} />
              <XAxis
                dataKey="size"
                tick={{ fill: colors.text }}
                tickLine={{ stroke: colors.text }}
              />
              <YAxis
                tick={{ fill: colors.text }}
                tickLine={{ stroke: colors.text }}
              />
              <Tooltip contentStyle={{ backgroundColor: colors.background }} />
              <Bar dataKey="count" fill={colors.bar} />
            </BarChart>
          </ResponsiveContainer>
        </ChartContainer>
      </div>
    </StyledGuestAnalytics>
  );
}

export default GuestAnalytics;
