const Mensaje = (props) => {
  return( 
  <h1 style={{color: props.color}}>{props.message}</h1>
  )
}
const App = () => {
  return (
    <div>
      <Mensaje color='red' message='Estamos trabajando' />
      <Mensaje color='green' message='en un curso' />
    </div>
  )
}

export default App