import Profile from "../components/Profile"
import fotoPerfil from "/2.jpg" 

export default function App () {
  return (
    <div className="app">
      <Profile
       image={fotoPerfil}
       nome= "André Barros Araújo"
       stack="Full Stack Developer"
       email="andrebarros0794@gmail.com"
       telefone="(85)988590794"
       github="https://github.com/andrebarrosa"
       linkedIn="https://www.linkedin.com/in/andrebarrosaraujo/"
       twitter="https://twitter.com/Andreaba1994"
       />
    </div>
  )
}
