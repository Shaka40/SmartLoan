import { BrowserRouter, Routes, Route } from "react-router-dom";
import Welcome from "../pages/Welcome";
import RoleSelectionPage from "../pages/RoleSelectionPage";
import Login from "../pages/auth/Login";
import Register from "../pages/auth/Register";
import StudentDashboard from "../pages/student/StudentDashboard";
import LoanApplicationWizard from "../pages/student/LoanApplicationWizard";
import OcrVerificationPage from "../pages/student/OcrVerificationPage";
import AiDecisionExplanationPage from "../pages/student/AiDecisionExplanationPage";
import ApplicationStatusPage from "../pages/student/ApplicationStatusPage";
import NotificationsPage from "../pages/student/NotificationsPage";
import ProfilePage from "../pages/student/ProfilePage";
import SettingsPage from "../pages/student/SettingsPage";
import OfficerDashboard from "../pages/officer/OfficerDashboard";
import ApplicationListPage from "../pages/officer/ApplicationListPage";
import ApplicationDetailsPage from "../pages/officer/ApplicationDetailsPage";
import OcrReviewPage from "../pages/officer/OcrReviewPage";
import FraudDetectionPage from "../pages/officer/FraudDetectionPage";
import AiRecommendationPage from "../pages/officer/AiRecommendationPage";
import ApproveRejectPage from "../pages/officer/ApproveRejectPage";
import GenerateReportsPage from "../pages/officer/GenerateReportsPage";
import OfficerNotificationsPage from "../pages/officer/NotificationsPage";
import OfficerProfilePage from "../pages/officer/ProfilePage";
import AdminDashboard from "../pages/admin/AdminDashboard";
import UserManagementPage from "../pages/admin/UserManagementPage";
import StudentManagementPage from "../pages/admin/StudentManagementPage";
import OfficerManagementPage from "../pages/admin/OfficerManagementPage";
import AnalyticsDashboardPage from "../pages/admin/AnalyticsDashboardPage";
import ReportsPage from "../pages/admin/ReportsPage";
import AuditLogsPage from "../pages/admin/AuditLogsPage";
import SystemSettingsPage from "../pages/admin/SystemSettingsPage";
import AdminNotificationsPage from "../pages/admin/NotificationsPage";
import AdminProfilePage from "../pages/admin/ProfilePage";

export default function AppRouter() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Welcome />} />
        <Route path="/role-selection" element={<RoleSelectionPage />} />
        <Route path="/login" element={<Login />} />
        <Route path="/register" element={<Register />} />
        <Route path="/student/dashboard" element={<StudentDashboard />} />
        <Route path="/student/application" element={<LoanApplicationWizard />} />
        <Route path="/student/ocr-verification" element={<OcrVerificationPage />} />
        <Route path="/student/ai-decision" element={<AiDecisionExplanationPage />} />
        <Route path="/student/status" element={<ApplicationStatusPage />} />
        <Route path="/student/notifications" element={<NotificationsPage />} />
        <Route path="/student/profile" element={<ProfilePage />} />
        <Route path="/student/settings" element={<SettingsPage />} />
        <Route path="/officer/dashboard" element={<OfficerDashboard />} />
        <Route path="/officer/applications" element={<ApplicationListPage />} />
        <Route path="/officer/application-details" element={<ApplicationDetailsPage />} />
        <Route path="/officer/ocr-review" element={<OcrReviewPage />} />
        <Route path="/officer/fraud" element={<FraudDetectionPage />} />
        <Route path="/officer/ai-recommendation" element={<AiRecommendationPage />} />
        <Route path="/officer/approve-reject" element={<ApproveRejectPage />} />
        <Route path="/officer/reports" element={<GenerateReportsPage />} />
        <Route path="/officer/notifications" element={<OfficerNotificationsPage />} />
        <Route path="/officer/profile" element={<OfficerProfilePage />} />
        <Route path="/admin/dashboard" element={<AdminDashboard />} />
        <Route path="/admin/users" element={<UserManagementPage />} />
        <Route path="/admin/students" element={<StudentManagementPage />} />
        <Route path="/admin/officers" element={<OfficerManagementPage />} />
        <Route path="/admin/analytics" element={<AnalyticsDashboardPage />} />
        <Route path="/admin/reports" element={<ReportsPage />} />
        <Route path="/admin/audit-logs" element={<AuditLogsPage />} />
        <Route path="/admin/settings" element={<SystemSettingsPage />} />
        <Route path="/admin/notifications" element={<AdminNotificationsPage />} />
        <Route path="/admin/profile" element={<AdminProfilePage />} />
      </Routes>
    </BrowserRouter>
  );
}