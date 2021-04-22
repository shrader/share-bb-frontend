//import { useHistory } from "react-router-dom"

function ListingCard({title, description, price, capacity}) {
  //let History = useHistory()

  // function routeToCompany() {
  //   History.push(`/companies/${handle}`)
  // }

  return (
    <div style={{boxShadow: "0px 1px 5px black", padding: "15px", margin: "15px"}} onClick={null}>
      <div>
        title: {title}
      </div>
      <div>
        description: {description}
      </div>
      <div>
        price: {price}
      </div>
      <div>
        capacity: {capacity}
      </div>
    </div>
  )
}

export default ListingCard;