import Api from "../api";
import { Link } from "react-router-dom";
import { useEffect } from "react";

function BookingCard({ startDate, endDate, listingId }) {
  let listData;
  useEffect(function loadListData() {

    async function getListData() {
      listData = await Api.getListing(listingId);
      console.log("listData", listData);
      return listData;
    }
    getListData()
  },[])

  // let listData = getListData();

  console.log("listData", listData);

  return (
    <div style={{ boxShadow: "0px 1px 5px black", padding: "15px", margin: "15px" }} onClick={null}>
      <div>
        Start Date: {startDate}
      </div>
      <div>
        End Date: {endDate}
      </div>
      <Link listData={listData} to={`/listings/${listingId}`}>Listing Details</Link>
    </div>
  )
}

export default BookingCard;