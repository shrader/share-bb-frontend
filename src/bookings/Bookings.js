import BookingCard from "./BookingCard";
import {useEffect, useState} from "react";
import Loading from "../Loading";
import Api from "../api";

function Bookings() {

  //const History = useHistory();
  const [bookings, setBookings] = useState(null);
  //const user = useContext(UserContext);
  
  useEffect(function makeList() {
    bookingsList()
  }, [])

  // if (!user.loggedIn) {
  //   History.push("/");
  // }

  async function bookingsList() {
    let bookingsList = await Api.getBookings();
    setBookings(bookingsList);
  }

  console.log("bookings", bookings);

  if (bookings === null) {
    return (<Loading/>);
  }


  return(
    <div>
      {
        bookings.map(b => (
       <BookingCard key={b.id} listingId={b.listing_id} startDate={b.start_date} endDate={b.end_date} />
        ))
      }
    </div>
  )
}

export default Bookings;