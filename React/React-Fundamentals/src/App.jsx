import StatusText from "../components/StatusText"
import { Subtilte } from "../components/Subtitle"
import Title from "../components/Title"


function sum(a,b) {
  return a+b
}



export default function App() {
  return (
    <div>
      <Title/>
      <Subtilte/>
      <StatusText/>
    </div>
  )
} 

