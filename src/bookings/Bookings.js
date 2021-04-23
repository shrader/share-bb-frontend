import BookingCard from "./BookingCard";
import {useEffect, useState} from "react";
import Loading from "../Loading";
import Api from "../api";

function Bookings() {

  //const History = useHistory();
  const [bookings, setBookings] = useState(null);
  const [listData, setListData] = useState(null);
  //const user = useContext(UserContext);
  
  useEffect(function makeList() {
    bookingsList();
  }, [])

  useEffect(function getListingData() {
    getListData()
  }, [bookings])

  // if (!user.loggedIn) {
  //   History.push("/");
  // }

  async function bookingsList() {
    let bookingsList = await Api.getBookings();
    setBookings(bookingsList);
  }

  async function getListData() {
    let listings = await Api.getListings();
    console.log("listDataArr", listings);
    setListData(listings);
  }

  function filterList(id){
    let matchingListing = listData.filter(listing => listing.id === id);
    return matchingListing[0];
  }

  console.log("bookings", bookings);

  if (bookings === null || listData === null) {
    return (<Loading/>);
  }


  return(
    <div>
      {
        bookings.map(b => (
       <BookingCard key={b.id} listing={filterList(b.listingid)} startDate={b.startdate} endDate={b.enddate} />
        ))
      }
    </div>
  )
}

export default Bookings;