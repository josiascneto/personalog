function Duvidabox() {
    return(
        <div>
            <div className="card bg-base-100 w-96 shadow-2xl">
            <div className="card-body">
            <h1 className="card-title text-2xl justify-center font-bold text-[oklch(84.8%_0.1962_84.62)]">O que é esse Personalog?</h1>
            <p className="text-justify text-2xl">Trata-se de um pequeno projeto pessoal para práticar desenvolvimento web, com React + Typescript, 
            e o uso do TailwindCSS e DaisyUI para estilização. <br></br>É baseado na ideia dos 4 favoritos do  
            <a href="https://letterboxd.com/" target="_blank" className="text-white font-bold hover:text-sky-600 transition-colors duration-600"> Letterboxd</a>, porém com mais espaço 
            para comentário pessoal de porque esses são meus favoritos.
            </p>
            </div>
            </div>
        </div>
    )
}

export default Duvidabox