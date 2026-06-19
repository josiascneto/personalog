type Filme = {
    imagem: string
    titulo: string
}

type Props = {
    filmes: Filme[]
    setFilmeAtual: (index: number) => void
}

function Carrosel({ filmes, setFilmeAtual }: Props) {
    return (
        <div className="carousel carousel-vertical rounded-box h-129">
            {filmes.map((filme, index) => (
                <div
                    key={index}
                    className="carousel-item h-full cursor-pointer"
                    onClick={() => setFilmeAtual(index)}
                >
                    <img 
                        src={filme.imagem} 
                        className="rounded-box"
                    />
                </div>
            ))}
        </div>
    )
}

export default Carrosel