import BookingsTable from "../features/bookings/BookingsTable";
import BookingTableOperations from "../features/bookings/BookingTableOperations";

function Bookings() {
  return (
    <>
      <BookingTableOperations />
      <BookingsTable />
    </>
  );
}

export default Bookings; 