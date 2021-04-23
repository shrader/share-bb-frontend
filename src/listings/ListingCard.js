//import { useHistory } from "react-router-dom"

function ListingCard({title, description, price, capacity, style}) {
  //let History = useHistory()

  // function routeToCompany() {
  //   History.push(`/companies/${handle}`)
  // }

  return (
    <div style={style} onClick={null}>
      <div>
        <h3>title: {title}</h3>
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