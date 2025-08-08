import {
  HiOutlineBanknotes,
  HiOutlineBriefcase,
  HiOutlineCalendarDays,
  HiOutlineChartBar,
  HiOutlineUsers,
  HiOutlineClock,
  HiOutlineArrowTrendingUp,
} from "react-icons/hi2";
import Stat from "./Stat";
import { formatCurrency } from "../../../shared/ui/utils/Helper";

function Stats({ bookings, confirmedStays, numDays, cabinCount }) {
  // 1.
  const numBookings = bookings.length;

  // 2.
  const sales = bookings.reduce((acc, cur) => acc + cur.totalPrice, 0);

  // 3.
  const checkins = confirmedStays.length;

  // 4.
  const occupation =
    confirmedStays.reduce((acc, cur) => acc + cur.numNights, 0) /
    (numDays * cabinCount);
  // num checked in nights / all available nights (num days * num cabins)

  // 5. Total guests
  const totalGuests = bookings.reduce(
    (acc, cur) => acc + (cur.numGuests ?? 0),
    0
  );

  // 7. Average stay duration
  const avgStayDuration =
    confirmedStays.length > 0
      ? confirmedStays.reduce((acc, cur) => acc + cur.numNights, 0) /
        confirmedStays.length
      : 0;

  // 8. Revenue per night
  const revenuePerNight =
    sales / (confirmedStays.reduce((acc, cur) => acc + cur.numNights, 0) || 1);

  return (
    <>
      <Stat
        title="Bookings"
        color="blue"
        icon={<HiOutlineBriefcase />}
        value={numBookings}
      />
      <Stat
        title="Sales"
        color="green"
        icon={<HiOutlineBanknotes />}
        value={formatCurrency(sales)}
      />
      <Stat
        title="Check ins"
        color="indigo"
        icon={<HiOutlineCalendarDays />}
        value={checkins}
      />
      <Stat
        title="Occupancy rate"
        color="yellow"
        icon={<HiOutlineChartBar />}
        value={Math.round(occupation * 100) + "%"}
      />
      <Stat
        title="Total Guests"
        color="purple"
        icon={<HiOutlineUsers />}
        value={totalGuests}
      />

      <Stat
        title="Avg Stay"
        color="pink"
        icon={<HiOutlineClock />}
        value={avgStayDuration.toFixed(1) + " nights"}
      />
      <Stat
        title="Revenue/Night"
        color="emerald"
        icon={<HiOutlineArrowTrendingUp />}
        value={formatCurrency(revenuePerNight)}
      />
    </>
  );
}

export default Stats;
