import Card from "../components/Card";
import starwars from "/starwars.jpg"
import starwars2 from "/rotj-poster.jpg"
import starwars3 from "/esstarwars.jpg"


export default function App () {

  return (
    <>
      <Card title="Poster: Star Wars 1" image={starwars} text="Um pôster decorativo épico do filme Star Wars, com moldura de MDF e tamanho A3. Uma ótima recordação de um dos mais icônicos filmes de todos os tempos. Este clássico pôster trará aventura, nostalgia e a magia de Star Wars para qualquer lugar que você decidir pendurar. Não perca a chance de adicionar essa linda memória ao seu acervo!" button="Compre agora" />
      <Card title="Poster: Star Wars 2" image={starwars2}  text="Um pôster decorativo épico do filme Star Wars, com moldura de MDF e tamanho A3. Uma ótima recordação de um dos mais icônicos filmes de todos os tempos. Este clássico pôster trará aventura, nostalgia e a magia de Star Wars para qualquer lugar que você decidir pendurar. Não perca a chance de adicionar essa linda memória ao seu acervo!" button="Compre agora" />
      <Card title= "Poster: Star Wars 3" image={starwars3}  text="Um pôster decorativo épico do filme Star Wars, com moldura de MDF e tamanho A3. Uma ótima recordação de um dos mais icônicos filmes de todos os tempos. Este clássico pôster trará aventura, nostalgia e a magia de Star Wars para qualquer lugar que você decidir pendurar. Não perca a chance de adicionar essa linda memória ao seu acervo!"  button="Compre agora"/>
    </>
  )
}
