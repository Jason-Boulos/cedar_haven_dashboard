import CheckinBooking from "../features/check-in-out/CheckinBooking";
import { useParams } from "react-router-dom";

function Checkin() {
  const { bookingId } = useParams();
  return <CheckinBooking bookingId={Number(bookingId)} />;
}

export default Checkin;
