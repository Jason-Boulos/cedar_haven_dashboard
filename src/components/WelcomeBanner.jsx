import styled from "styled-components";
import { useUser } from "../modules/authentication/useUser";
import { format } from "date-fns";

const StyledWelcomeBanner = styled.div`
  background: linear-gradient(
    135deg,
    var(--color-brand-600) 0%,
    var(--color-brand-700) 100%
  );
  border-radius: 1.2rem;
  padding: 3.2rem;
  color: white;
  position: relative;
  overflow: hidden;
  margin-bottom: 2.4rem;

  &::before {
    content: "";
    position: absolute;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    background: url('data:image/svg+xml,<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 100 100"><defs><pattern id="welcome-pattern" width="50" height="50" patternUnits="userSpaceOnUse"><circle cx="25" cy="25" r="2" fill="white" opacity="0.1"/><circle cx="10" cy="10" r="1" fill="white" opacity="0.05"/><circle cx="40" cy="40" r="1" fill="white" opacity="0.05"/></pattern></defs><rect width="100" height="100" fill="url(%23welcome-pattern)"/></svg>');
    pointer-events: none;
  }

  @media (max-width: 768px) {
    padding: 2rem;
  }
`;

const BannerContent = styled.div`
  position: relative;
  z-index: 1;
  display: flex;
  justify-content: space-between;
  align-items: center;

  @media (max-width: 768px) {
    flex-direction: column;
    gap: 1.6rem;
    text-align: center;
  }
`;

const WelcomeText = styled.div`
  h1 {
    font-size: 2.4rem;
    font-weight: 700;
    margin-bottom: 0.8rem;
  }

  p {
    font-size: 1.6rem;
    opacity: 0.9;
    margin: 0;
  }

  @media (max-width: 768px) {
    h1 {
      font-size: 2rem;
    }

    p {
      font-size: 1.4rem;
    }
  }
`;

const DateDisplay = styled.div`
  text-align: right;

  .date {
    font-size: 1.8rem;
    font-weight: 600;
    margin-bottom: 0.4rem;
  }

  .time {
    font-size: 1.4rem;
    opacity: 0.8;
  }

  @media (max-width: 768px) {
    text-align: center;

    .date {
      font-size: 1.6rem;
    }

    .time {
      font-size: 1.2rem;
    }
  }
`;

function WelcomeBanner() {
  const { user } = useUser();
  const currentDate = new Date();

  return (
    <StyledWelcomeBanner>
      <BannerContent>
        <WelcomeText>
          <h1>Welcome back, {user?.user_metadata?.fullName || "Manager"}!</h1>
          <p>Here's what's happening at The Cedar Haven today</p>
        </WelcomeText>
        <DateDisplay>
          <div className="date">{format(currentDate, "EEEE, MMMM do")}</div>
          <div className="time">{format(currentDate, "h:mm a")}</div>
        </DateDisplay>
      </BannerContent>
    </StyledWelcomeBanner>
  );
}

export default WelcomeBanner;
