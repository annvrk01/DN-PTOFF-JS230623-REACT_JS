import './App.css';
import { BrowserRouter } from "react-router-dom";
import { Context } from "./context/ContextHelper";
import RoutesForCustomer from "./routes/customer"
import RoutesForAdmin from './routes/admin';
import TopWrap from './components/organisms/admin/topWrap/topWrap';


function App() {
  return (
    <div>
      <BrowserRouter basename="/">
        <Context.Provider value="Nguyen Van E">
          <RoutesForCustomer>
          </RoutesForCustomer>

          <RoutesForAdmin>
          </RoutesForAdmin>
          
        </Context.Provider>
      </BrowserRouter>
    </div>
  );
}

export default App;
