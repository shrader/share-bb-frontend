import { useParams } from "react-router-dom";
import Api from "../api";

function ListingCard() {
    let { id } = useParams();
    
    async function getListData() {
        let listData = await Api.getListing(id);
        console.log("listData",listData);
        return listData;
    }
    let listData = getListData();

    return (
      <div style={{boxShadow: "0px 1px 5px black", padding: "15px", margin: "15px"}} onClick={null}>
        <div>
          title: {listData.title}
        </div>
        <div>
          description: {listData.description}
        </div>
        <div>
          price: {listData.price}
        </div>
        <div>
          capacity: {listData.capacity}
        </div>
      </div>
    )
  }
  
  export default ListingCard;