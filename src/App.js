import { Route, Routes } from "react-router-dom";
import "./App.css";
import EditProspects from "./Pages/EditProspects";
import EditCtwo from "./Pages/EditCtwo";
import Form from "./Pages/Form";
import Home from "./Pages/Home";
import PageNotFound from './Pages/PageNotFound'

function App() {
  return (
    <div className="App">
      <Routes>
        <Route path="/" element={<Home/>}></Route>
        <Route path="/form" element={<Form/>}></Route>
        <Route path="/editprospects/:id" element={<EditProspects/>}></Route>
        <Route path="/editc2/:id" element={<EditCtwo/>}></Route>
        <Route path="/*" element={<PageNotFound/>}></Route>
      </Routes>
      
    </div>
  );
}

export default App;
