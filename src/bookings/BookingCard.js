import Api from "../api";
import { Link, Route } from "react-router-dom";
import ListingCard from "../listings/ListingCard";


function BookingCard({ startDate, endDate, listing }) {


  // let listData = getListData();

  console.log("listData2", listing);
  const {title, description, price, capacity} = listing;

  return (
    <div style={{ boxShadow: "0px 1px 5px black", padding: "15px", margin: "15px" }} onClick={null}>
      <div>
        Start Date: {startDate.split('T')[0]}
      </div>
      <div>
        End Date: {endDate.split('T')[0]}
      </div>
      <ListingCard style={null} title={title} price={price} description={description} capacity={capacity} />
    </div>
  )
}

export default BookingCard;