import { BrowserRouter, Route, Routes } from 'react-router';
import '../styles/App.css';
import Navbar from '../components/Navbar';
import PageNotFound from '../components/PageNotFound';
import BranchRoleAccess from '../pages/BranchRoleAccess';
import CreateUser from '../pages/CreateUser';
import Dashboard from '../pages/Dashboard';
import InquiryForm from '../pages/Inquiry';
import InquiryList from '../pages/InquiryLIst';
import LoginPage from '../pages/LoginPage';
import Reports from '../pages/Report';
import RoleUserManagement from '../pages/UserRole';
import UserRoleMapping from '../pages/UserRoleMapping';
import ActualVendorQuotes from '../pages/VendorQuoteActual';
import VendorQuoteGet from '../pages/VendorQuoteGet';
import ProtectedRoute from './ProtectedRoute';
function App() {
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path='/' element={<><LoginPage /></>} />
          <Route path='/dashboard' element={<><ProtectedRoute><Navbar /><Dashboard /></ProtectedRoute></>} />
          <Route path='/inquiry' element={<><ProtectedRoute><Navbar /><InquiryForm /></ProtectedRoute></>} />
          <Route path='/inquiry-list' element={<><ProtectedRoute><Navbar /><InquiryList /></ProtectedRoute></>} />
          <Route path="/vendor-quote-get" element={<><ProtectedRoute><Navbar /><VendorQuoteGet /></ProtectedRoute></>} />
          <Route path="/vendor-quote-actual" element={<><ProtectedRoute><Navbar /> <ActualVendorQuotes /></ProtectedRoute></>} />
          <Route path="/users" element={<><ProtectedRoute><Navbar /><CreateUser /></ProtectedRoute></>} />
          <Route path="/roles" element={<><ProtectedRoute><Navbar /><RoleUserManagement /></ProtectedRoute></>} />
          <Route path="/role-mapping" element={<><ProtectedRoute><Navbar /><UserRoleMapping /></ProtectedRoute></>} />
          <Route path="/branch-role-access" element={<><ProtectedRoute><Navbar /><BranchRoleAccess /></ProtectedRoute></>} />
          <Route path="/reports" element={<><ProtectedRoute><Navbar /><Reports /></ProtectedRoute></>} />
          <Route path='*' element={<><PageNotFound /></>} />
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
