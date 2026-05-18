import { createContext, useContext } from "react";
import { useApi } from "../hooks/useApi";

const AppContext = createContext(null);

export function AppProvider({ children }) {
  const doctorsApi = useApi("doctors");
  const bookingsApi = useApi("bookings");
  const usersApi = useApi("users");

  return (
    <AppContext.Provider
      value={{
        doctors: doctorsApi.data,
        doctorsLoading: doctorsApi.loading,
        doctorsError: doctorsApi.error,
        bookings: bookingsApi.data,
        bookingsLoading: bookingsApi.loading,
        bookingsError: bookingsApi.error,
        users: usersApi.data,
        usersLoading: usersApi.loading,
        usersError: usersApi.error,
        refreshDoctors: doctorsApi.refresh,
        refreshBookings: bookingsApi.refresh,
        refreshUsers: usersApi.refresh,
        createBooking: bookingsApi.create,
        updateBooking: bookingsApi.update,
        deleteBooking: bookingsApi.remove,
        createUser: usersApi.create,
      }}
    >
      {children}
    </AppContext.Provider>
  );
}

export function useAppContext() {
  const context = useContext(AppContext);
  if (!context) {
    throw new Error("useAppContext must be used inside AppProvider");
  }
  return context;
}
