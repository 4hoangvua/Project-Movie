import GlobalStyles from "~/GlobalStyles";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import ErrorBoundary from "~/components/ErrorBoundary/ErrorBoundary";
import ProtectedRoute from "~/Page/Routes/ProtectedRoute";
import React, { Suspense } from "react";
import CheckTicket from "./Page/checkTicket";
import Register from "./Page/register";
const HomeTemplates = React.lazy(() => import("~/Templates/HomeTemplates"));
const Ticket = React.lazy(() => import("~/Page/Ticket"));
const Login = React.lazy(() => import("~/Page/Login"));
const MovieDetail = React.lazy(() => import("~/Page/MovieDetail"));

function App() {
  return (
    <ErrorBoundary>
      <Suspense fallback={<h1>4hoangvua...</h1>}>
        <Router>
          <Routes>
            <Route path="/" element={<HomeTemplates />} />
            <Route path="signin" element={<Login />} />
            <Route path="register" element={<Register />} />
            <Route path="movie-detail/:maPhim" element={<MovieDetail />} />
            <Route
              path="check-ticket"
              element={
                <ProtectedRoute>
                  <CheckTicket />
                </ProtectedRoute>
              }
            />
            <Route path="ticket/:id" element={<Ticket />} />
          </Routes>
          <GlobalStyles />
        </Router>
      </Suspense>
    </ErrorBoundary>
  );
}

export default App;
