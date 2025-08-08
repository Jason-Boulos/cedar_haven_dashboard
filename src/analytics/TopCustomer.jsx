import styled from "styled-components";
import { useState } from "react";
import DashboardBox from "../modules/features/dashboard/DashboardBox";
import Heading from "../shared/ui/Heading";

import { Flag } from "../shared/ui/Flag";
import Table from "../shared/ui/Table";

const VIPContainer = styled(DashboardBox)`
  grid-column: 1 / -1;
  .dark-mode & {
    background: rgba(24, 33, 47, 0.9);
  }
`;

const TableContainer = styled.div`
  overflow-x: auto;
  border-radius: 0.5rem;
  border: 1px solid var(--color-grey-200);
  background: white;

  .dark-mode & {
    background: var(--color-grey-900);
    border-color: var(--color-grey-700);
  }
`;

const RankBadge = styled.span`
  display: inline-flex;
  align-items: center;
  gap: 0.5rem;
  padding: 0.25rem 0.75rem;
  border-radius: 9999px;
  font-weight: 600;
  font-size: 0.875rem;

  ${(props) => {
    if (props.rank === 1)
      return `
      background: linear-gradient(135deg, #fbbf24, #f59e0b);
      color: white;
    `;
    if (props.rank === 2)
      return `
      background: linear-gradient(135deg, #9ca3af, #6b7280);
      color: white;
    `;
    if (props.rank === 3)
      return `
      background: linear-gradient(135deg, #cd7c2f, #92400e);
      color: white;
    `;
    return `
      background: var(--color-grey-200);
      color: var(--color-grey-700);
      .dark-mode & {
        background: var(--color-grey-700);
        color: var(--color-grey-300);
      }
    `;
  }}
`;

const DetailsPanel = styled.div`
  background: var(--color-grey-25);
  border-top: 1px solid var(--color-grey-200);
  padding: 0;

  .dark-mode & {
    background: var(--color-grey-0);
    border-top-color: var(--color-grey-600);
  }
`;

const DetailsContent = styled.div`
  padding: 2rem;
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(200px, 1fr));
  gap: 2rem;
`;

const StatCard = styled.div`
  background: white;
  padding: 1.5rem;
  border-radius: 0.5rem;
  border: 1px solid var(--color-grey-200);
  box-shadow: 0 1px 3px rgba(0, 0, 0, 0.1);

  .dark-mode & {
    background: var(--color-grey-25);
    border-color: var(--color-grey-600);
    box-shadow: 0 1px 3px rgba(0, 0, 0, 0.3);
  }
`;

const StatValue = styled.div`
  font-size: 1.5rem;
  font-weight: 700;
  color: var(--color-brand-600);
  margin-bottom: 0.25rem;

  .dark-mode & {
    color: var(--color-brand-400);
  }
`;

const StatLabel = styled.div`
  font-size: 0.875rem;
  color: var(--color-grey-600);

  .dark-mode & {
    color: var(--color-grey-300);
  }
`;

const EmptyState = styled.div`
  text-align: center;
  padding: 3rem;
  color: var(--color-grey-500);

  .dark-mode & {
    color: var(--color-grey-400);
  }
`;

function VIPGuestTracker({ bookings, confirmedStays }) {
  const [selectedGuest, setSelectedGuest] = useState(null);

  const findAllGuests = () => {
    if (!bookings || bookings.length === 0) {
      return [];
    }

    // Extract unique guests from bookings
    const uniqueGuests = bookings
      .filter((booking) => booking.guests)
      .reduce((acc, booking) => {
        const guestId = booking.guestId || booking.guests.id;
        if (!acc[guestId]) {
          acc[guestId] = {
            id: guestId,
            fullName: booking.guests.fullName,
            email: booking.guests.email,
            nationality: booking.guests.nationality,
            flag: booking.guests.countryFlag || null,
          };
        }
        return acc;
      }, {});

    const guests = Object.values(uniqueGuests);

    if (guests.length === 0) {
      return [];
    }

    // Use confirmedStays if available, otherwise filter bookings for completed stays
    const stays =
      confirmedStays ||
      bookings.filter((booking) => booking.status === "checked-out");

    // Calculate guest statistics
    const guestStats = guests
      .map((guest) => {
        const guestBookings = bookings.filter((b) => {
          const bookingGuestId = b.guestId || (b.guests && b.guests.id);
          return bookingGuestId === guest.id;
        });

        const guestStays = stays.filter((s) => {
          const stayGuestId = s.guestId || (s.guests && s.guests.id);
          return stayGuestId === guest.id;
        });

        const totalNights = guestStays.reduce(
          (sum, stay) => sum + (stay.numNights || 0),
          0
        );
        const totalRevenue = guestBookings.reduce(
          (sum, booking) => sum + (booking.totalPrice || 0),
          0
        );

        return {
          id: guest.id,
          name: guest.fullName,
          email: guest.email,
          nationality: guest.nationality,
          totalBookings: guestBookings.length,
          totalNights,
          totalRevenue,
          avgStayLength:
            guestStays.length > 0 ? totalNights / guestStays.length : 0,
          avgSpendPerNight: totalNights > 0 ? totalRevenue / totalNights : 0,
          flag: guest.flag,
        };
      })
      .sort((a, b) => b.totalNights - a.totalNights); // Sort by total nights (loyalty)

    return guestStats;
  };

  const allGuests = findAllGuests();
  const activeGuests = allGuests.filter((guest) => guest.totalNights > 0);

  const getRankIcon = (index) => {
    if (index === 0) return "👑";
    if (index === 1) return "🥈";
    if (index === 2) return "🥉";
    return "";
  };

  const handleRowClick = (guest) => {
    setSelectedGuest(selectedGuest?.id === guest.id ? null : guest);
  };

  if (activeGuests.length === 0) {
    return (
      <VIPContainer>
        <Heading as="h2">Top guest</Heading>
        <EmptyState>
          <div style={{ fontSize: "3rem", marginBottom: "1rem" }}>👑</div>
          <div
            style={{
              fontSize: "1.25rem",
              fontWeight: "600",
              marginBottom: "0.5rem",
            }}
          >
            No guest data available
          </div>
          <div>Complete some guest stays to see your VIP customers here</div>
        </EmptyState>
      </VIPContainer>
    );
  }

  return (
    <VIPContainer>
      <Heading as="h2">Top Guests</Heading>

      <TableContainer>
        <Table columns="1fr 2.5fr 1fr 1fr 1fr 2fr">
          <Table.Header>
            <div>Rank</div>
            <div>Guest Name</div>
            <div>Total Nights</div>
            <div>Total Spent</div>
            <div>Bookings</div>
            <div>Nationality</div>
          </Table.Header>

          <Table.Body
            data={activeGuests}
            render={(guest, index) => (
              <>
                <Table.Row key={guest.id} onClick={() => handleRowClick(guest)}>
                  <div>
                    <RankBadge rank={index < 3 ? index + 1 : null}>
                      {getRankIcon(index)} #{index + 1}
                    </RankBadge>
                  </div>

                  <div>
                    <div style={{ fontWeight: "600" }}>{guest.name}</div>
                    <div
                      style={{
                        fontSize: "0.875rem",
                        color: "var(--color-grey-500)",
                      }}
                    >
                      {guest.email}
                    </div>
                  </div>

                  <div>
                    <strong>{guest.totalNights}</strong> nights
                  </div>

                  <div>
                    <strong>${guest.totalRevenue.toFixed(0)}</strong>
                  </div>

                  <div>{guest.totalBookings} stays</div>

                  <div
                    style={{
                      display: "flex",
                      alignItems: "center",
                      gap: "0.5rem",
                    }}
                  >
                    {guest.flag && (
                      <Flag
                        src={guest.flag}
                        alt={`Flag of ${guest.nationality}`}
                      />
                    )}
                    {guest.nationality || "Not specified"}
                  </div>
                </Table.Row>

                {selectedGuest?.id === guest.id && (
                  <Table.Row>
                    <div
                      colSpan="6"
                      style={{ padding: 0, gridColumn: "1 / -1" }}
                    >
                      <DetailsPanel>
                        <DetailsContent>
                          <StatCard>
                            <StatValue>{guest.totalNights}</StatValue>
                            <StatLabel>Total Nights Stayed</StatLabel>
                          </StatCard>

                          <StatCard>
                            <StatValue>
                              ${guest.totalRevenue.toFixed(0)}
                            </StatValue>
                            <StatLabel>Total Revenue Generated</StatLabel>
                          </StatCard>

                          <StatCard>
                            <StatValue>{guest.totalBookings}</StatValue>
                            <StatLabel>Total Bookings Made</StatLabel>
                          </StatCard>

                          <StatCard>
                            <StatValue>
                              {guest.avgStayLength.toFixed(1)}
                            </StatValue>
                            <StatLabel>Average Stay Length</StatLabel>
                          </StatCard>

                          <StatCard>
                            <StatValue>
                              ${guest.avgSpendPerNight.toFixed(0)}
                            </StatValue>
                            <StatLabel>Avg Spend Per Night</StatLabel>
                          </StatCard>

                          <StatCard>
                            <StatValue>
                              {guest.nationality || "Unknown"}
                            </StatValue>
                            <StatLabel>Nationality</StatLabel>
                          </StatCard>
                        </DetailsContent>
                      </DetailsPanel>
                    </div>
                  </Table.Row>
                )}
              </>
            )}
          />
        </Table>
      </TableContainer>
    </VIPContainer>
  );
}

export default VIPGuestTracker;
