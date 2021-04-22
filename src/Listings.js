import {useEffect, useState} from "react";
import Loading from "./Loading";
import Api from "./api";
import ListingCard from "./ListingCard";

function Listings() {

  //const History = useHistory();
  const [listings, setListings] = useState(null);
  //const user = useContext(UserContext);
  
  useEffect(function makeList() {
    listingsList()
  }, [])

  // if (!user.loggedIn) {
  //   History.push("/");
  // }

  async function listingsList() {
    let listingsList = await Api.getListings();
    setListings(listingsList);
  }

  if (listings === null) {
    return (<Loading/>);
  }

  return(
    <div>
      {
        listings.map(l => (
        <ListingCard key={l.id} price={l.price} capacity={l.capacity} title={l.title} description={l.description}/>
        ))
      }
    </div>
  )
}

export default Listings;