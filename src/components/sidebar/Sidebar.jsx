import "./sidebar.css";
import {
  LineStyle,
  Timeline,
  TrendingUp,
  PermIdentity,
  Storefront,
  AttachMoney,
  BarChart,
  MailOutline,
  DynamicFeed,
  ChatBubbleOutline,
  WorkOutline,
  Report,
  Delete,
  Add,
  Edit,
  AccountBalanceWallet,
  Iso
  
  
} from "@material-ui/icons";

// import AddIcon from '@mui/icons-material/Add';
import { Link } from "react-router-dom";
// import { FolderDelete } from "@mui/icons-material";
// import { PersonRemove } from "@mui/icons-material";

export default function Sidebar() {
  return (
    <div className="sidebar">
      <div className="sidebarWrapper">
        <div className="sidebarMenu">
          <h3 className="sidebarTitle">Dashboard</h3>
          <ul className="sidebarList">
            <Link to="/" className="link">
            <li className="sidebarListItem active">
              <LineStyle className="sidebarIcon" />
              Home
            </li>
            </Link>
            <li className="sidebarListItem">
              <Add className="sidebarIcon" />
              Add new Customer
            </li>
            <li className="sidebarListItem">
              <Edit className="sidebarIcon" />
              Edit Customer
            </li>
            <Link to="/users" className="link">
              <li className="sidebarListItem">
                <Delete className="sidebarIcon" />
                Delete Customer
              </li>
            </Link>
            <Link to="/products" className="link">
              <li className="sidebarListItem">
                <AccountBalanceWallet className="sidebarIcon" />
                New Account
              </li>
            </Link>
            <Link to="/products" className="link">
              <li className="sidebarListItem">
                <Iso className="sidebarIcon" />
                Edit Account
              </li>
            </Link>
            <Link to="/products" className="link">
              <li className="sidebarListItem">
                <Iso className="sidebarIcon" />
                Delete Account
              </li>
            </Link>
            <Link to="/products" className="link">
              <li className="sidebarListItem">
                <Storefront className="sidebarIcon" />
                Deposit
              </li>
            </Link>
            <Link to="/products" className="link">
              <li className="sidebarListItem">
                <Storefront className="sidebarIcon" />
                Withdrawal
              </li>
            </Link>
            <Link to="/products" className="link">
              <li className="sidebarListItem">
                <Storefront className="sidebarIcon" />
                Fund Transfer
              </li>
            </Link>
            <Link to="/products" className="link">
              <li className="sidebarListItem">
                <Storefront className="sidebarIcon" />
                Change Password
              </li>
            </Link>
            <Link to="/products" className="link">
              <li className="sidebarListItem">
                <Storefront className="sidebarIcon" />
                Balance Enquiry
              </li>
            </Link>
            <Link to="/products" className="link">
              <li className="sidebarListItem">
                <Storefront className="sidebarIcon" />
                Mini Statement
              </li>
            </Link>
            <Link to="/products" className="link">
              <li className="sidebarListItem">
                <Storefront className="sidebarIcon" />
                Balance Enquiry
              </li>
            </Link>
            <Link to="/products" className="link">
              <li className="sidebarListItem">
                <Storefront className="sidebarIcon" />
                Login & Logout
              </li>
            </Link>
          </ul>
        </div>
        
      </div>
    </div>
  );
}
