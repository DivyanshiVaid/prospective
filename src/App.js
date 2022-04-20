import { Route, Routes } from "react-router-dom";
import "./App.css";
import Form from "./Pages/Form";
import Home from "./Pages/Home";
import PageNotFound from './Pages/PageNotFound'

function App() {
  return (
    <div className="App">
      <Routes>
        <Route path="/" element={<Home/>}></Route>
        <Route path="/form" element={<Form/>}></Route>
        <Route path="/*" element={<PageNotFound/>}></Route>
      </Routes>
      
    </div>
  );
}

export default App;
