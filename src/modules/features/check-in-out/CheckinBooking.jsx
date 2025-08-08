import styled from "styled-components";
import BookingDataBox from "../../features/bookings/BookingDataBox";

import Row from "../../../shared/ui/Row";
import Heading from "../../../shared/ui/Heading";
import ButtonGroup from "../../../shared/ui/ButtonGroup";
import Button from "../../../shared/ui/Button";
import ButtonText from "../../../shared/ui/ButtonText";
import Spinner from "../../../shared/ui/Spinner";

import { useMoveBack } from "../../../hooks/useMoveBack";
import { useBooking } from "../bookings/useBooking";
import { useEffect, useState } from "react";
import Checkbox from "../../../shared/ui/Checkbox";

import { useCheckin } from "./useCheckin";
import { useSettings } from "../settings/useSettings";
import { formatCurrency } from "../../../shared/ui/utils/Helper";
import Empty from "../../../shared/ui/Empty";

const Box = styled.div`
  /* Box */
  background-color: var(--color-grey-0);
  border: 1px solid var(--color-grey-100);
  border-radius: var(--border-radius-md);
  padding: 2.4rem 4rem;
`;

function CheckinBooking({ bookingId }) {
  const [confirmPaid, setConfirmPaid] = useState(false);
  const [addBreakfast, setAddBreakfast] = useState(false);
  const { booking, isLoading } = useBooking(bookingId);
  const { settings, isLoading: isLoadingSettings } = useSettings();

  useEffect(() => setConfirmPaid(booking?.isPaid ?? false), [booking]);

  const moveBack = useMoveBack();
  const { checkin, isCheckingIn } = useCheckin();

  if (isLoading || isLoadingSettings) return <Spinner />;
  if (!booking) return <Empty resourceName="booking" />;

  const { id, guests, totalPrice, numGuests, hasBreakfast, numNights } =
    booking;

  // Debug: log the settings object
  console.log("Settings object:", settings);
  console.log("Breakfast price from settings:", settings?.breakfastPrice);
  console.log("Breakfast price lowercase:", settings?.breakfastprice);

  const optionalBreakfastPrice =
    (settings?.breakfastprice || 0) * (numNights || 0) * (numGuests || 0);

  function handleCheckin() {
    if (!confirmPaid) return;

    if (addBreakfast) {
      checkin({
        bookingId: bookingId,
        breakfast: {
          hasbreakfast: true,
          totalPrice: Number(totalPrice) + Number(optionalBreakfastPrice),
        },
      });
    } else {
      checkin({ bookingId: bookingId, breakfast: {} });
    }
  }

  return (
    <>
      <Row type="horizontal">
        <Heading as="h1">Check in booking #{id}</Heading>
        <ButtonText onClick={moveBack}>&larr; Back</ButtonText>
      </Row>

      <BookingDataBox booking={booking} />

      {!hasBreakfast && (
        <Box>
          <Checkbox
            checked={addBreakfast}
            onChange={() => {
              setAddBreakfast((add) => !add);
              setConfirmPaid(false);
            }}
            id="breakfast"
          >
            Want to add breakfast for {formatCurrency(optionalBreakfastPrice)}?
          </Checkbox>
        </Box>
      )}

      <Box>
        <Checkbox
          checked={confirmPaid}
          onChange={() => setConfirmPaid((confirm) => !confirm)}
          disabled={confirmPaid || isCheckingIn}
          id="confirm"
        >
          I confirm that {guests?.fullName || "Guest"} has paid the total amount
          of{" "}
          {!addBreakfast
            ? formatCurrency(totalPrice || 0)
            : `${formatCurrency(
                (totalPrice || 0) + optionalBreakfastPrice
              )} (${formatCurrency(totalPrice || 0)} + ${formatCurrency(
                optionalBreakfastPrice
              )})`}
        </Checkbox>
      </Box>

      <ButtonGroup>
        <Button onClick={handleCheckin} disabled={!confirmPaid || isCheckingIn}>
          Check in booking #{id}
        </Button>
        <Button variation="secondary" onClick={moveBack}>
          Back
        </Button>
      </ButtonGroup>
    </>
  );
}

export default CheckinBooking;
