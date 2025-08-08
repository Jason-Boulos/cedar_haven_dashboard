import styled from "styled-components";
import { format, isToday } from "date-fns";

import Tag from "../../../shared/ui/Tag";
import Table from "../../../shared/ui/Table";

import Menus from "../../../shared/ui/Menus";
import {
  HiEye,
  HiArrowDownOnSquare,
  HiArrowUpOnSquare,
  HiTrash,
} from "react-icons/hi2";
import { useNavigate } from "react-router-dom";

import Modal from "../../../shared/ui/Modal";
import ConfirmDelete from "../../../shared/ui/ConfirmDelete";

import { useCheckout } from "../check-in-out/useCheckout";
import {
  formatCurrency,
  formatDistanceFromNow,
} from "../../../shared/ui/utils/Helper";
import { useDeleteBooking } from "./useDeleteBooking";

const Cabin = styled.div`
  font-size: 1.6rem;
  font-weight: 600;
  color: var(--color-grey-700);
  font-family: "Sono";
  letter-spacing: 0.5px;

  /* Slight hover effect */
  transition:
    transform 0.2s ease,
    color 0.2s ease;
  ${Table.Row}:hover & {
    transform: translateX(2px);
    color: var(--color-brand-600);
  }
`;

const Stacked = styled.div`
  display: flex;
  flex-direction: column;
  gap: 0.2rem;

  & span:first-child {
    font-weight: 500;
    color: var(--color-grey-700);
  }

  & span:last-child {
    color: var(--color-grey-500);
    font-size: 1.2rem;
  }
`;

const Amount = styled.div`
  font-family: "Sono";
  font-weight: 600;
  color: var(--color-brand-700);

  /* Soft background badge style */
  background: var(--color-brand-50);
  padding: 0.2rem 0.6rem;
  border-radius: 0.4rem;
`;

function BookingRow({ booking }) {
  const { checkout, isCheckingOut } = useCheckout();
  const { isDeletingBooking, deleteBooking } = useDeleteBooking();
  const navigate = useNavigate();
  const {
    id: bookingId,
    startDate,
    endDate,
    numNights,
    totalPrice,
    status,
    guests,
    cabins,
  } = booking;

  const guestName = guests?.fullName || "Unknown Guest";
  const email = guests?.email || "No email";
  const cabinName = cabins?.name || "Unknown Cabin";

  // Updated to use colors that exist in your CSS
  const statusToTagName = {
    unconfirmed: "primary", // Uses --color-primary-100/700 (blue-ish)
    "checked-in": "success", // Uses --color-success-100/700 (green)
    "checked-out": "grey", // Uses --color-grey-100/700 (neutral)
  };

  return (
    <Table.Row>
      <Cabin>{cabinName}</Cabin>

      <Stacked>
        <span>{guestName}</span>
        <span>{email}</span>
      </Stacked>

      <Stacked>
        <span>
          {isToday(new Date(startDate))
            ? "Today"
            : formatDistanceFromNow(startDate)}{" "}
          &rarr; {numNights} night stay
        </span>
        <span>
          {format(new Date(startDate), "MMM dd yyyy")} &mdash;{" "}
          {format(new Date(endDate), "MMM dd yyyy")}
        </span>
      </Stacked>

      <Tag type={statusToTagName[status]}>{status.replace("-", " ")}</Tag>

      <Amount>{formatCurrency(totalPrice)}</Amount>

      <Modal>
        <Menus.Menu>
          <Menus.Toggle id={bookingId} />
          <Menus.List id={bookingId}>
            <Menus.Button
              icon={<HiEye />}
              onClick={() => navigate(`/bookings/${bookingId}`)}
            >
              See Details
            </Menus.Button>

            {status === "unconfirmed" && (
              <Menus.Button
                icon={<HiArrowDownOnSquare />}
                onClick={() => navigate(`/checkin/${bookingId}`)}
              >
                <span>Check in</span>
              </Menus.Button>
            )}

            {status === "checked-in" && (
              <Menus.Button
                icon={<HiArrowUpOnSquare />}
                disabled={isCheckingOut}
                onClick={() => {
                  if (status === "checked-in") checkout(Number(bookingId));
                }}
              >
                <span>Check Out</span>
              </Menus.Button>
            )}

            <Modal.Open opensWindow="booking-delete">
              <Menus.Button icon={<HiTrash />}>
                <span>Delete</span>
              </Menus.Button>
            </Modal.Open>
          </Menus.List>
          <Modal.Window windowName="booking-delete">
            <ConfirmDelete
              resourceName="booking"
              onConfirm={() => {
                deleteBooking(Number(bookingId), {
                  onSettled: () => {
                    // The query will be invalidated automatically by the hook
                  },
                });
              }}
              disabled={isDeletingBooking}
            />
          </Modal.Window>
        </Menus.Menu>
      </Modal>
    </Table.Row>
  );
}

export default BookingRow;
