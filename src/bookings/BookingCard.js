import Api from "../api";
import ListingCard from "../listings/ListingCard";

function BookingCard({startDate, endDate, listingId}) {
  //let History = useHistory()

  // function routeToCompany() {
  //   History.push(`/companies/${handle}`)
  // }

  async function getListData() {
    let listData = await Api.getListing(listingId);
    console.log("listData",listData);
    return listData;
  }

  let listData = getListData();

  console.log("listData", listData);



  return (
    <div style={{boxShadow: "0px 1px 5px black", padding: "15px", margin: "15px"}} onClick={null}>
      <div>
        Start Date: {startDate}
      </div>
      <div>
        End Date: {endDate}
      </div>
      <ListingCard  price={listData.price} capacity={listData.capacity} title={listData.title} description={listData.description}/>
    </div>
  )
}

export default BookingCard;