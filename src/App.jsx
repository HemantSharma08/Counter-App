import Header from "./components/Header"
import "bootstrap/dist/css/bootstrap.min.css"
import './App.css'
import DisplayCounter from "./components/DisplayCounter"
import Card from "./components/card"
import Controls from "./components/controls"

function App() {
  
  return (
    <>
<center className="px-4 py-5 my-5 text-center">  
    <Card>
    <Header></Header>
    <div className="col-lg-6 mx-auto">
      <DisplayCounter></DisplayCounter>
      <Controls></Controls>
  </div>
      </Card>
</center>
    </>
  )
}

export default App
