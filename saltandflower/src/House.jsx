import Room from "./Room"

function House(props) {
  return (
    <>
      <div>This is a house called {props.name} </div>
    
      <Room name="bedroom" houseName={props.name} />
      <Room name="kitchen" houseName={props.name} />
    </>
  )
}
export default House
