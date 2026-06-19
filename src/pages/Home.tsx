import { useState } from "react"
import Carrosel from "../components/Carrosel"
import Navhome from "../components/Navhome"

function Home() {
    const filmes = [
        {
            imagem: "https://a.ltrbxd.com/resized/sm/upload/g7/2e/vi/vy/A9ANrAWlmIovxzjAIiOgseSLNc9-0-2000-0-3000-crop.jpg?v=6bcb14c88c",
            titulo: "Nightcrawler",
            ano: 2014,
            diretor: "Dan Gilroy",
            genero: "Thriller",
            sinopse: "Quando Lou Bloom, desesperado por trabalho, se infiltra no mundo do jornalismo policial de Los Angeles, ele ultrapassa a linha entre observador e participante para se tornar a estrela de sua própria história. Ajudando-o nesse esforço está Nina, uma veterana do telejornalismo.",
            review: "legal"
        },
        {
            imagem: "https://a.ltrbxd.com/resized/sm/upload/cl/dn/kr/f1/4C9LHDxMsoYI0S3iMPZdm3Oevwo-0-2000-0-3000-crop.jpg?v=d13ea36528",
            titulo: "Whiplash",
            ano: 2014,
            diretor: "Damien Chazelle",
            genero: "Drama",
            sinopse: "Buscando se tornar um dos maiores da história, sob a direção de um instrutor implacável, o jovem baterista talentoso Andrew começa a buscar a perfeição a qualquer custo, até mesmo sua humanidade, suas relações e sua vida.",
            review: "legal"
        },
        {
            imagem: "https://a.ltrbxd.com/resized/film-poster/4/5/9/0/4/3/459043-a-faithful-man-0-2000-0-3000-crop.jpg?v=cace28a32a",
            titulo: "L'Homme fidèle",
            ano: 2018,
            diretor: "Louis Garrel",
            genero: "Drama/Comédia",
            sinopse: "Marianne deixa Abel por Paul, seu melhor amigo e pai de seu filho ainda não nascido. Oito anos depois, Paul morre e Marianne retorna para Abel. No entanto, as coisas mudaram para ambos e sentimentos de ciúmes cercam o novo relacionamento.",
            review: "legal"
        },
        {
            imagem: "https://a.ltrbxd.com/resized/film-poster/4/3/3/0/2/43302-up-0-2000-0-3000-crop.jpg?v=eac6a19a4c",
            titulo: "Up",
            ano: 2009,
            diretor: "Pete Docter",
            genero: "Aventura",
            sinopse: "Carl Fredricksen passou a vida inteira sonhando em explorar o mundo e viver a vida ao máximo. Mas, aos 78 anos, parece que a vida passou por ele até que uma reviravolta do destino (e um Escoteiro da Natureza de 8 anos chamado Russell) lhe dá uma nova chance de viver.",
            review: "legal"
        }
    ]

    const [filmeAtual, setFilmeAtual] = useState(0)

    return (
        <div className='min-h-screen bg-base-200'>
            <Navhome />
            <div className="flex justify-left items-center gap-10 py-10 ml-4">
                <Carrosel filmes={filmes} setFilmeAtual={setFilmeAtual} />
                
                {/* ficha tec */}
                <div className="max-w-md flex justify-center gap-30">
                    <div className="mt-3 text-sm  -ml-6">
                        <h2 className="text-5xl font-bold -mt-54 mb-4 text-white ">{filmes[filmeAtual].titulo}</h2>
                        <p><strong>Ano:</strong> {filmes[filmeAtual].ano}</p>
                        <p><strong>Diretor:</strong> {filmes[filmeAtual].diretor}</p>
                        <p><strong>Duração:</strong> {filmes[filmeAtual].genero}</p>
                        <p className="text-sm  w-60 text-justify"><strong>Sinopse:</strong> {filmes[filmeAtual].sinopse}</p>
                    </div>
                    {/* review */}
                    <div className="-mt-48">
                        <h2>Review</h2>
                        <p>{filmes[filmeAtual].review}</p>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Home