import './App.css';
// Câu lệnh import để file liên kết với các function của file được export
// import Session02Component from './lesson/components/Session02Component'
import NavBar from './components/organisms/navbar.js/navbar';
import { BrowserRouter } from "react-router-dom";
import { Context } from "./context/ContextHelper";
import RoutesAdmin from "./routes/admin"
import RoutesUser from "./routes/user";

function App () {
  
  return (
    <div>
      <BrowserRouter basename="/admin">
        <Context.Provider value="Nguyen Van E">
          <NavBar></NavBar>
          <RoutesAdmin> </RoutesAdmin>
        </Context.Provider>
      </BrowserRouter>
      

      <BrowserRouter basename="/">
        <RoutesUser> </RoutesUser>
      </BrowserRouter>
    </div>
  );
}
export default App;
