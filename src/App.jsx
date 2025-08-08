import { BrowserRouter, Route, Routes, Navigate } from "react-router-dom";
import "./App.css";

import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import Dashboard from "./modules/pages/Dashboard";
import Cabins from "./modules/pages/Cabins";
import Bookings from "./modules/pages/Bookings";

import AppLayout from "./shared/ui/AppLayout";
import GlobalStyles from "./styles/GlobalStyles";
import { Toaster } from "react-hot-toast";
import Booking from "./modules/pages/Booking";
import Checkin from "./modules/pages/Checkin";
import Settings from "./modules/pages/Settings";
import { DarkModeProvider } from "./context/DarkModeContext";
import ProtectedRoute from "./shared/ui/ProtectedRoute";
import Users from "./modules/pages/Users";
import Login from "./modules/pages/Login";
import PageNotFound from "./modules/pages/pageNotFound";
import Account from "./modules/pages/Account";

const queryClient = new QueryClient({
  defaultOptions: {
    queries: {
      staleTime: 0,
    },
  },
});

function App() {
  return (
    <DarkModeProvider>
      <QueryClientProvider client={queryClient}>
        <GlobalStyles />
        <BrowserRouter>
          <Routes>
            <Route
              element={
                <ProtectedRoute>
                  <AppLayout></AppLayout>
                </ProtectedRoute>
              }
            >
              <Route index element={<Navigate replace to="dashboard" />} />
              <Route path="dashboard" element={<Dashboard />} />
              <Route path="bookings" element={<Bookings />} />
              <Route path="bookings/:bookingId" element={<Booking />} />
              <Route path="checkin/:bookingId" element={<Checkin />} />
              <Route path="users" element={<Users/>} />
              <Route path="cabins" element={<Cabins />} />
              <Route path="settings" element={<Settings />} />
              <Route path="account" element={<Account />} />

              
            </Route>
            <Route path="login" element={<Login />} />
            <Route path="*" element={<PageNotFound/>} />
          </Routes>
        </BrowserRouter>
        <Toaster
          position="top-center"
          gutter={12}
          containerStyle={{ margin: "8px" }}
          toastOptions={{
            success: {
              duration: 3000,
            },
            error: {
              duration: 5000,
            },
            style: {
              fontSize: "16px",
              maxWidth: "500px",
              padding: "16px 24px",
              backgroundColor: "var(--color-grey-0)",
              color: "var(--color-grey-700)",
            },
          }}
        />
      </QueryClientProvider>
    </DarkModeProvider>
  );
}

export default App;
