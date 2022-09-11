import Sidebar from "./components/sidebar/Sidebar";
import Topbar from "./components/topbar/Topbar";
import "./App.css";
import Home from "./pages/home/Home";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import UserList from "./pages/userList/UserList";
import User from "./pages/user/User";
import NewUser from "./pages/newCustomer/NewCustomer";
import ProductList from "./pages/productList/ProductList";
import Product from "./pages/product/Product";
import NewProduct from "./pages/newProduct/NewProduct";
import EditUser from "./pages/editCustomer/EditCustomer"
import DeleteCustomer from "./pages/deleteCustomer/DeleteCustomer";
import NewAccount from "./pages/newAccount/NewAccount";
import EditAccount from "./pages/editAccount/EditAccount";
import DeleteAccount from "./pages/deleteAccount/DeleteAccount";
import Deposit from "./pages/deposit/Deposit"
import Withdrawal from "./pages/withdrawal/Withdrawal"
import FundTransfer from "./pages/fundTransfer/FundTransfer";
import ChangePassword from "./pages/changePassword/ChangePassword";
import BalanceEnquiry from "./pages/balanceEnquiry/BalanceEnquiry";
import MiniStatement from './pages/miniStatement/MiniStatement'
function App() {
  return (
    <Router>
      <Topbar />
      <div className="container">
        <Sidebar />
        <Switch>
          <Route exact path="/">
            <Home />
          </Route>
          <Route path="/users">
            <UserList />
          </Route>
          
          <Route path="/user/:userId">
            <User />
          </Route>
          <Route path="/newUser">
            <NewUser />
          </Route>
          <Route path="/edituser">
            <EditUser />
          </Route>
          <Route exact path="/deletecustomer">
            <DeleteCustomer />
          </Route>
          <Route exact path="/newaccount">
            <NewAccount />
          </Route>
          <Route exact path="/editaccount">
            <EditAccount />
          </Route>
          <Route exact path="/deleteaccount">
            <DeleteAccount />
          </Route>
          <Route exact path="/deposit">
            <Deposit />
          </Route>
          <Route path="/withdrawal">
            <Withdrawal />
          </Route>
          <Route path="/fundtransfer">
            <FundTransfer />
          </Route>
          <Route path="/changepassword">
            <ChangePassword/>
          </Route>
          <Route path="/balanceenquiry">
            <BalanceEnquiry />
          </Route>
          <Route path="/ministatement">
            <MiniStatement />
          </Route>
          <Route path="/newproduct">
            <NewProduct />
          </Route>
          <Route path="/newproduct">
            <NewProduct />
          </Route>
          <Route path="/userlist">
            <UserList />
          </Route>
        </Switch>
      </div>
    </Router>
  );
}

export default App;
