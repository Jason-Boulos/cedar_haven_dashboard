import styled from "styled-components";
import { format, isToday } from "date-fns";
import {
  HiOutlineChatBubbleBottomCenterText,
  HiOutlineCheckCircle,
  HiOutlineCurrencyDollar,
  HiOutlineHomeModern,
} from "react-icons/hi2";

import DataItem from "../../../shared/ui/DataItem";
import { Flag } from "../../../shared/ui/Flag";
import {
  formatCurrency,
  formatDistanceFromNow,
} from "../../../shared/ui/utils/Helper";

const StyledBookingDataBox = styled.section`
  background: var(--color-grey-0);
  border-radius: var(--border-radius-lg);
  box-shadow: 0 4px 20px rgba(0, 0, 0, 0.06);
  overflow: hidden;
  border: 1px solid var(--color-grey-100);
`;

const Header = styled.header`
  background: linear-gradient(
    135deg,
    var(--color-brand-600),
    var(--color-brand-500)
  );
  padding: 2.4rem 3.2rem;
  color: #fff;
  display: flex;
  flex-direction: column;
  gap: 0.6rem;

  & > div {
    display: flex;
    align-items: center;
    gap: 1.2rem;
    font-size: 1.8rem;
    font-weight: 600;

    svg {
      height: 2.4rem;
      width: 2.4rem;
      color: #fff;
    }
  }

  & p:last-child {
    font-size: 1.4rem;
    opacity: 0.85;
  }

  span {
    font-family: "Sono";
    font-size: 2rem;
  }
`;

const Section = styled.section`
  padding: 2.4rem 3.2rem;
  display: flex;
  flex-direction: column;
  gap: 2rem;
`;

const Guest = styled.div`
  display: flex;
  flex-wrap: wrap;
  align-items: center;
  gap: 1.2rem;
  color: var(--color-grey-600);

  & p:first-of-type {
    font-weight: 600;
    color: var(--color-grey-800);
  }

  span {
    font-size: 1.4rem;
    color: var(--color-grey-400);
  }
`;

const Price = styled.div`
  background: ${(props) =>
    props.isPaid
      ? "linear-gradient(135deg, var(--color-green-50), var(--color-green-100))"
      : "linear-gradient(135deg, var(--color-yellow-50), var(--color-yellow-100))"};
  border-radius: var(--border-radius-md);
  padding: 2rem;
  display: flex;
  justify-content: space-between;
  align-items: center;
  box-shadow: inset 0 1px 0 rgba(255, 255, 255, 0.2);

  color: ${(props) =>
    props.isPaid ? "var(--color-green-800)" : "var(--color-yellow-800)"};

  & p:last-child {
    font-weight: 700;
    font-size: 1.4rem;
    text-transform: uppercase;
  }

  svg {
    color: currentColor !important;
    height: 2.4rem;
    width: 2.4rem;
  }
`;

const Footer = styled.footer`
  background-color: var(--color-grey-50);
  padding: 1.6rem 3.2rem;
  font-size: 1.3rem;
  color: var(--color-grey-500);
  text-align: right;
  border-top: 1px solid var(--color-grey-100);
`;

function BookingDataBox({ booking }) {
  const {
    created_at,
    startDate,
    endDate,
    numNights,
    numGuests,
    cabinPrice,
    extrasPrice,
    totalPrice,
    hasBreakfast,
    observation,
    isPaid,
    guests,
    cabins,
  } = booking;

  const guestName = guests?.fullName || "Unknown Guest";
  const email = guests?.email || "No email";
  const country = guests?.country || "Unknown";
  const countryFlag = guests?.countryFlag;
  const nationalID = guests?.nationalID || "No ID";
  const cabinName = cabins?.name || "Unknown Cabin";

  return (
    <StyledBookingDataBox>
      <Header>
        <div>
          <HiOutlineHomeModern />
          <p>
            {numNights} nights in Cabin <span>{cabinName}</span>
          </p>
        </div>
        <p>
          {format(new Date(startDate), "EEE, MMM dd yyyy")} (
          {isToday(new Date(startDate))
            ? "Today"
            : formatDistanceFromNow(startDate)}
          ) — {format(new Date(endDate), "EEE, MMM dd yyyy")}
        </p>
      </Header>

      <Section>
        <Guest>
          {countryFlag && <Flag src={countryFlag} alt={`Flag of ${country}`} />}
          <p>
            {guestName} {numGuests > 1 ? `+ ${numGuests - 1} guests` : ""}
          </p>
          <span>•</span>
          <p>{email}</p>
          <span>•</span>
          <p>National ID {nationalID}</p>
        </Guest>

        {observation && (
          <DataItem
            icon={<HiOutlineChatBubbleBottomCenterText />}
            label="Observations"
          >
            {observation}
          </DataItem>
        )}

        <DataItem icon={<HiOutlineCheckCircle />} label="Breakfast included?">
          {hasBreakfast ? "Yes" : "No"}
        </DataItem>

        <Price isPaid={isPaid}>
          <DataItem icon={<HiOutlineCurrencyDollar />} label="Total price">
            {formatCurrency(totalPrice)}
            {hasBreakfast &&
              ` (${formatCurrency(cabinPrice)} cabin + ${formatCurrency(
                extrasPrice
              )} breakfast)`}
          </DataItem>
          <p>{isPaid ? "Paid" : "Will pay at property"}</p>
        </Price>
      </Section>

      <Footer>
        <p>Booked {format(new Date(created_at), "EEE, MMM dd yyyy, p")}</p>
      </Footer>
    </StyledBookingDataBox>
  );
}

export default BookingDataBox;
