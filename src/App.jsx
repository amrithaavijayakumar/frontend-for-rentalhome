import {BrowserRouter,Routes,Route} from "react-router-dom"
import HomePage from './Pages/HomePage';
import Register from './Pages/Register';
import Login from './Pages/Login';
import './App.css';
import CreateListing from "./Pages/CreateListing";
import ListingDetails from "./Pages/ListingDetails"
import TripList from "./Pages/TripList";

import PropertyList from "./Pages/PropertyList";
import ReservationList from "./Pages/ReservationList";
import CategoryPage from "./Pages/CategoryPage";
import SearchPage from "./Pages/SearchPage";



function App() {
  return (
    <div className="App">
     <BrowserRouter>
     <Routes>
      <Route path="/" element={<HomePage/>}/> 
      <Route path="/register" element={<Register/>}/>
      <Route path="/login" element={<Login/>}/>
      <Route path="/create-listing" element={<CreateListing/>}/>
      <Route path="/properties/:listingId" element={<ListingDetails/>}/>
      <Route path="/properties/category/:category" element={<CategoryPage />} />
      <Route path="/properties/search/:search" element={<SearchPage />} />
      <Route path="/:userId/trips" element={<TripList />} />
      
      <Route path="/:userId/properties" element={<PropertyList />} />
      <Route path="/:userId/reservations" element={<ReservationList />} />

      </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
