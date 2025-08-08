import BookingDetail from "../features/bookings/BookingDetail";
import { useParams } from "react-router-dom";

function Booking() {
  const { bookingId } = useParams();
  return <BookingDetail bookingId={Number(bookingId)} />;
}

export default Booking;
