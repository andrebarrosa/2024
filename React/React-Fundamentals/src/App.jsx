import StatusText from "../components/StatusText"
import { Subtilte } from "../components/Subtitle"
import Title from "../components/Title"
import styles from "./app.module.css"


export default function App() {
  return (
    <div className={styles.app}
    // style = {{
    //   backgroundColor: "#2c2c2d",
    //   display: "grid",
    //   minHeight: "100vh",
    //   placeContent: "center",
    //   textAlign: "center"
    // }}
    >
      <Title/>
      <Subtilte/>
      <StatusText/>
    </div>
  )
} 

