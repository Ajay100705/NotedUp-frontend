// // App.tsx
// import { BrowserRouter as Router, Routes, Route, Navigate } from "react-router-dom";
// import Login from "./pages/auth/Login";
// import Signup from "./pages/auth/Signup";
// import ForgotPassword from "./pages/auth/Forgotpassword";
// import OtpVerification from "./pages/auth/OtpVerification";

// // import StudentDashboard from "./pages/dashboard/StudentDashboard";
// // import TeacherDashboard from "./pages/dashboard/TeacherDashboard";
// // import AdminDashboard from "./pages/dashboard/AdminDashboard";
// // import NotesList from "./pages/notes/NotesList";
// // import UploadNotes from "./pages/notes/UploadNotes";

// // import ProtectedRoute from "./components/ProtectedRoute";
// // import { AuthProvider } from "./context/AuthContext";

// export default function App() {
//   return (
//     <AuthProvider>
//       <Router>
//         <Routes>
//           {/* Default Route */}
//           <Route path="/" element={<Navigate to="/login" replace />} />

//           {/* Public Routes */}
//           <Route path="/login" element={<Login />} />
//           <Route path="/signup" element={<Signup />} />
//           <Route path="/forgot-password" element={<ForgotPassword />} />
//           <Route path="/verify-otp" element={<OtpVerification />} />

//           {/* Student Dashboard */}
//           <Route
//             path="/student"
//             element={
//               <ProtectedRoute allowedRoles={["student"]}>
//                 <StudentDashboard />
//               </ProtectedRoute>
//             }
//           />

//           {/* Teacher/Uploader Dashboard */}
//           <Route
//             path="/teacher"
//             element={
//               <ProtectedRoute allowedRoles={["teacher", "uploader"]}>
//                 <TeacherDashboard />
//               </ProtectedRoute>
//             }
//           />

//           {/* Admin Dashboard */}
//           <Route
//             path="/admin"
//             element={
//               <ProtectedRoute allowedRoles={["admin"]}>
//                 <AdminDashboard />
//               </ProtectedRoute>
//             }
//           />

//           {/* Notes Section */}
//           <Route
//             path="/notes"
//             element={
//               <ProtectedRoute allowedRoles={["student", "teacher", "uploader", "admin"]}>
//                 <NotesList />
//               </ProtectedRoute>
//             }
//           />
//           <Route
//             path="/upload"
//             element={
//               <ProtectedRoute allowedRoles={["teacher", "uploader", "admin"]}>
//                 <UploadNotes />
//               </ProtectedRoute>
//             }
//           />

//           {/* Catch-all (404 → redirect to login) */}
//           <Route path="*" element={<Navigate to="/login" replace />} />
//         </Routes>
//       </Router>
//     </AuthProvider>
//   );
// }

// App.tsx
import { BrowserRouter as Router, Routes, Route, Navigate } from "react-router-dom";
import Login from "./pages/auth/Login";
import Signup from "./pages/auth/Signup";
import ForgotPassword from "./pages/auth/ForgotPassword";
import OtpVerification from "./pages/auth/OtpVerification";

import { AuthProvider } from "./context/AuthContext";

export default function App() {
  return (
    <AuthProvider>
      <Router>
        <Routes>
          {/* Default Route */}
          <Route path="/" element={<Navigate to="/login" replace />} />

          {/* Auth Routes */}
          <Route path="/login" element={<Login />} />
          <Route path="/signup" element={<Signup />} />
          <Route path="/forgot-password" element={<ForgotPassword />} />
          <Route path="/verify-otp" element={<OtpVerification />} />

          {/* Catch-all → redirect to login */}
          <Route path="*" element={<Navigate to="/login" replace />} />
        </Routes>
      </Router>
    </AuthProvider>
  );
}
