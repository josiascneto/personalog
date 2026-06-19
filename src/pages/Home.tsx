import { useState } from "react"
import Carrosel from "../components/Carrosel"
import Navhome from "../components/Navhome"

function Home() {
    const filmes = [
        {
            imagem: "https://a.ltrbxd.com/resized/sm/upload/g7/2e/vi/vy/A9ANrAWlmIovxzjAIiOgseSLNc9-0-2000-0-3000-crop.jpg?v=6bcb14c88c",
            titulo: "Nightcrawler",
        },
        {
            imagem: "https://a.ltrbxd.com/resized/sm/upload/cl/dn/kr/f1/4C9LHDxMsoYI0S3iMPZdm3Oevwo-0-2000-0-3000-crop.jpg?v=d13ea36528",
            titulo: "Whiplash",
        },
        {
            imagem: "https://a.ltrbxd.com/resized/film-poster/4/5/9/0/4/3/459043-a-faithful-man-0-2000-0-3000-crop.jpg?v=cace28a32a",
            titulo: "L'Homme fidèle",
        },
        {
            imagem: "https://a.ltrbxd.com/resized/film-poster/4/3/3/0/2/43302-up-0-2000-0-3000-crop.jpg?v=eac6a19a4c",
            titulo: "Up",
        }
    ]

    const [filmeAtual, setFilmeAtual] = useState(0)

    return (
        <div className='min-h-screen bg-base-200'>
            <Navhome />
            <div className="flex justify-left items-center gap-10 py-10 ml-4">
                <Carrosel 
                    filmes={filmes} 
                    setFilmeAtual={setFilmeAtual} 
                />
                <div className="max-w-md">
                    <h2 className="text-5xl font-bold -mt-65 text-white">
                        {filmes[filmeAtual].titulo}
                    </h2>
                </div>
            </div>
        </div>
    )
}

export default Home