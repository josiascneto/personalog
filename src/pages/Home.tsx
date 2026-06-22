import { useState } from "react"
import Carrosel from "../components/Carrosel"
import Navhome from "../components/Navhome"
import Footer from "../components/Footer"

function Home() {
    const filmes = [
        {
            imagem: "https://a.ltrbxd.com/resized/sm/upload/g7/2e/vi/vy/A9ANrAWlmIovxzjAIiOgseSLNc9-0-2000-0-3000-crop.jpg?v=6bcb14c88c",
            titulo: "Nightcrawler",
            ano: 2014,
            diretor: "Dan Gilroy",
            genero: "Thriller",
            sinopse: "Quando Lou Bloom, desesperado por trabalho, se infiltra no mundo do jornalismo policial de Los Angeles, ele ultrapassa a linha entre observador e participante para se tornar a estrela de sua própria história. Ajudando-o nesse esforço está Nina, uma veterana do telejornalismo.",
            review: `Honestamente, esse é um filme que parece meio complicado de dizer abertamente que gosto bastante. Ele acaba caindo naquele grupo de “mal compreendidos”, que viram meme “sigma” e coisas do tipo, ala Clube da Luta. Ainda assim, isso não me impede de gostar e de querer falar sobre.
Antes mesmo de me interessar mais profundamente por cinema e começar a entender sobre, eu já tinha uma afinidade grande com thrillers. Sempre achei que um thriller bem dirigido pode ser mais assustador do que muitos filmes de terror cheios de sustos. A construção lenta, a tensão implícita e a sensação constante de que algo pode acontecer ou não geram um desconforto e insegurança muito mais eficaz. Essa incerteza prende a atenção e coloca o espectador em um estado contínuo de alerta, exigindo que ele fique atento a tela a todo segundo pois pode ser pego de surpresa ou perder algo. Dentro disso, entra o chamado “slow burn”, que segue exatamente essa ideia: construir tudo aos poucos, sem pressa, criando momentos prolongados de tensão e silêncio. Em vez de entregar respostas rápidas, o filme “cozinha” o espectador até chegar em uma conclusão mais impactante. Em uma época em que o tempo de atenção é tão baixo, esse tipo de abordagem é um ar fresco e pode criar cenários muito interessante e mais engajáveis ao exigir mais do espectador e fazer ele ouvir seus próprios pensamentos.
E é justamente aí que Nightcrawler se destaca para mim. O filme consegue criar uma atmosfera constante de desconforto, algo que não explode de uma vez, mas que permanece e cresce ao longo do tempo de forma progressiva. O mais curioso é que, olhando superficialmente, a premissa nem parece se encaixar nesse tipo de construção: não há elementos sobrenaturais ou de inevitabilidade. A história é simples, ainda assim, o tom que o filme atinge vai muito além do que se espera inicialmente, e isso me pegou de surpresa de forma muito positiva, não de uma forma ruim como se eles estivessem forçando e vendo oque cola.
Se fosse para destacar um ponto principal, seria a combinação de performance e atmosfera. Jake Gyllenhaal constrói um personagem extremamente convincente. Lou Bloom não parece um personagem, ele é uma pessoa real. Suas ações são plausíveis, suas reações fazem sentido dentro do contexto estabelecido, e isso torna tudo ainda mais perturbador. Ele é detestável, mas ao mesmo tempo carismático o suficiente para prender nossa atenção, a gente rejeita o que ele faz, mas não consegue parar de assistir (o que também poder ser um fator meio psicológico de querer ver sobre situações sinistras mas a psicologia não é comigo). Existe também algo interessante na forma como o filme lida com as motivações dele. O fato de ele “precisar” de dinheiro nunca serve como justificativa para suas ações e livramento de julgamento. Pelo contrário, funciona mais como ponto de partida para mostrar até onde vai sua obsessão, isso lembra um pouco a construção de personagens como Walter White, onde fica claro que não é mais uma questão de necessidade, pois ele parece gostar do que está fazendo, não tem desdém nem se segura.
Para a atmosfera, o trabalho da fotografia e do silencio certeiro é uma combinação perfeita, os cenários escuros, as situações que desenrolam passam um ar de algo sinistro, deplorável que passa aquele sentimento que não deveríamos estar ali, que não estamos seguro em nenhum canto, o que acaba também aumentando ainda mais o choque das ações do protagonista, que vai de cara nesses lugares e faz o que faz sem mostrar um segundo de hesitação, fazendo questionar ainda mais o caráter dele. A iluminação “seca”, não por falta de qualidade mas sim com intenção, como se estivéssemos em um lugar onde não tem esperança, não tem bondade ajusta bem para o contexto criminal da obra, revelando o pior que podemos ver do convívio em sociedade e casando perfeitamente com o tom de tudo acontecendo ao redor dos personagens.
O Filme inteiro é incrível e recomendo fortemente a qualquer um, ainda mais quer tiver interesses nesse gênero especifico e ou com atmosfera forte, consideraria como o exemplar definitivo para direção de um filme desse estilo, fazendo tudo que se propõe bem, seja a junção de atmosfera e uma atuação que não só combina mas fica a altura e entrega tensão do começo ao fim, minha única ressalva seria que eu não me importaria de uma duração maior pois é uma excelente experiência.
`
        },
        {
            imagem: "https://a.ltrbxd.com/resized/sm/upload/cl/dn/kr/f1/4C9LHDxMsoYI0S3iMPZdm3Oevwo-0-2000-0-3000-crop.jpg?v=d13ea36528",
            titulo: "Whiplash",
            ano: 2014,
            diretor: "Damien Chazelle",
            genero: "Drama",
            sinopse: "Buscando se tornar um dos maiores da história, sob a direção de um instrutor implacável, o jovem baterista talentoso Andrew começa a buscar a perfeição a qualquer custo, até mesmo sua humanidade.",
            review: `Talvez tudo o que eu tenha a dizer sobre esse filme já tenha sido dito. Muito bem recebido pelo público e pela crítica, chegou a conquistar três Oscars mesmo sendo apenas o segundo longa-metragem de Damien Chazelle. Ainda assim, é impossível não admirar o que foi feito aqui.
Como todo filme, sua avaliação varia de pessoa para pessoa. Cada espectador enxerga algo diferente, seja por suas preferências cinematográficas, se gostam de dramas pessoais assim, ou por experiências pessoais que tornam a história mais próxima da sua realidade e aumentam seu investimento na trama. No meu caso, foi uma mistura das duas coisas. Não vivi exatamente o que Andrew vive no filme, mas já tive pensamentos semelhantes ao perseguir um objetivo, e o filme acabou mudando minha forma de enxergar a obsessão. 
Whiplash trata esse tema de forma extremamente clara. A busca pela excelência nunca é romantizada: Andrew se afasta de quem gosta, destrói relações e chega a se machucar fisicamente. Mesmo a cena final, que pode parecer triunfante à primeira vista, deixa uma sensação ambígua. Ele realmente venceu? Ou apenas conquistou a aprovação de alguém abusivo, que embora sendo uma figura importante no cenário não é garantia alguma de sucesso futuro. Essa incerteza é um dos maiores acertos do filme, um final mostrando Andrew sendo famoso passaria longe da mensagem que deseja passar. A direção reforça essa ideia ao evitar qualquer tom de “história de superação” tradicional. Diferente de filmes como Rocky ou Creed, aqui não há glamour. A fotografia é escura, os ensaios são tensos, silenciosos, exceto pelos gritos do professor, e a trilha não tenta inspirar ela pressiona. O espectador sente o desgaste junto com o protagonista, mas não de uma forma que se sinta encorajado a apoiar esse caminho e as decisões dele.
Além disso, Andrew está longe de ser um herói. Ele é arrogante, impulsivo e progressivamente se torna tão agressivo quanto o próprio professor. Isso cria um conflito para o espectador: até que ponto ainda torcemos por ele? Essa construção torna a narrativa mais realista e menos idealizada, mostrando que Andrew não é um “mocinho” ou apenas vítima na situação, ele também está fazendo suas escolhas que mostram como ele não é perfeito, concretizando ele como uma pessoa real. Por outro lado Fletcher, o professor, é essencial para a história não apenas por ser o “vilão” do filme, mas por ter uma caracterização muito acreditável onde podia ter sido exagerada e tirado o espectador do filme. Sua atuação é intensa na medida certa, exagerada o suficiente para causar desconforto e deixar inconformado como ele ainda mantém a posição que tem, mas ainda crível. Ele representa um tipo de figura que muitos reconhecem: o professor exigente que ultrapassa limites e que amedronta aqueles que aprendem com ele, sendo algo comum na maioria da audiência pois todos já tiverem alguém assim ou conhecem alguém que passou por algo assim, sendo especialmente comum em ambientes artísticos, onde o sofrimento muitas vezes é romantizado e visto como “necessário” para o conteúdo ser válido e admirado. Esse background que a história se passa também não é apenas algo por acaso, já que dos filmes do diretor, apenas um não tem alguma relação com música.
No fim acredito que Whiplash triunfa por ser sobre algo que qualquer um pode se relacionar, a busca por um objetivo nada fácil, e como se focar apenas nele e esquecer sua vida acaba destruindo alguém, sendo um assunto que me toca pessoalmente e admiro a execução sobre o tópico, especialmente através da direção e performances que entregam o clima ideal para uma história sobre. No mais, também admiro que foi de um diretor basicamente desconhecido, baseado em um curta seu que foi financiado (por um valor pequeno) por estúdios para virar uma longa, e entre a extensão do tempo e a intervenção de executivos conseguiu ainda entregar algo de alta qualidade, provando que talvez o segredo para os novos clássicos do cinema não seja um remake, fazer um filme bilionário com nomes famoso, mas sim alguém com uma ideia clara e a execução qualificada para entregar o filme.
`
        },
        {
            imagem: "https://a.ltrbxd.com/resized/film-poster/4/5/9/0/4/3/459043-a-faithful-man-0-2000-0-3000-crop.jpg?v=cace28a32a",
            titulo: "L'Homme fidèle",
            ano: 2018,
            diretor: "Louis Garrel",
            genero: "Drama/Comédia",
            sinopse: "Marianne deixa Abel por Paul, seu melhor amigo e pai de seu filho ainda não nascido. Oito anos depois, Paul morre e Marianne retorna para Abel. No entanto, as coisas mudaram para ambos e sentimentos de ciúmes cercam o novo relacionamento.",
            review: `Não chamaria esse filme de perfeito ou uma grande referência, mas ele foi muito divertido de assistir e representa bem algo que me chama atenção no cinema francês. Claro que é um cinema extremamente diverso, mas existe aqui um certo padrão que já encontrei em outros filmes: o foco nas relações cotidianas e um humor mais seco, quase como se os próprios personagens não levassem totalmente a sério o que está acontecendo, o que acaba deixando tudo um pouco mais engraçado e até absurdo, justamente pela naturalidade das reações.
A história aqui é simples, mas carrega aquele drama meio exagerado quase novelesco que para mim funciona como parte do humor. Não é um filme de grandes acontecimentos ou cenas cheias de ação, os momentos mais importantes são conversas entre os personagens, onde a situação e eles mesmo vão se revelando aos poucos. Descrevendo assim pode parecer algo lento ou até entediante, mas o filme nunca chega a esse ponto. Muito disso também se deve à sua duração curta, cerca de 75 minutos, que reforça essa sensação de algo mais episódico e direto. Essa escala menor funciona a favor do filme. Nem toda história precisa ser grandiosa ou extremamente complexa, e aqui tudo anda em sintonia com a proposta. É um filme leve de acompanhar, mas que ainda consegue deixar algo para pensar depois.
O filme é protagonizado e dirigido por Louis Garrel, normalmente isso não me chama tanta atenção, mas aqui senti realmente como uma vantagem. Dá a impressão de que ele tem controle total sobre o tom da obra, sabendo exatamente o que quer e como transmitir. Como ator, ele entrega o necessário para sustentar o personagem, e como diretor, evita que o filme caia tanto em uma comédia romântica genérica quanto em um drama excessivamente melancólico.
Mesmo gostando bastante do longa, ainda assim, não acho que o filme seja impecável para ser considerado um clássico. Mas, ao mesmo tempo, essa simplicidade é parte do seu charme. É uma obra “fácil” de assistir pela duração, mas não é vazia, lembra até um livro curto que, mesmo terminando rápido, continua na cabeça por um tempo.
Para quem quer sair um pouco do cinema americano mais mainstream, é uma ótima recomendação. Não é um filme experimental ou difícil, mas já apresenta um estilo diferente do que costuma ser mais popular. Pode não agradar quem busca algo mais movimentado, mas para quem aceita esse tom mais mundano e o humor seco, é uma experiência bem interessante e, no pior dos casos, uma que passa rápido.
`
        },
        {
            imagem: "https://a.ltrbxd.com/resized/film-poster/4/3/3/0/2/43302-up-0-2000-0-3000-crop.jpg?v=eac6a19a4c",
            titulo: "Up",
            ano: 2009,
            diretor: "Pete Docter",
            genero: "Aventura",
            sinopse: "Carl Fredricksen passou a vida inteira sonhando em explorar o mundo e viver a vida ao máximo. Mas, aos 78 anos, parece que a vida passou por ele até que uma reviravolta do destino (e um Escoteiro da Natureza de 8 anos chamado Russell) lhe dá uma nova chance de viver.",
            review: `Ok, tenho quase certeza que todo mundo gosta de Up e por bons motivos. Não é nenhum “hot take” dizer que esse filme é icônico em vários sentidos. História, música e personagens se encaixam muito bem para criar essa atmosfera tão memorável e agradável de assistir.
Dessa lista, é de longe o filme que mais vi, seja por vontade própria ou pelas inúmeras reprises na TV aberta. Isso naturalmente criou um apego emocional, mas tentando ser justo, isso não chega a me cegar, de fato, nada aqui é particularmente inovador ou experimental (afinal, é um filme da Pixar) e alguns elementos podem até ser considerados clichês ou apelativos, ainda assim, tudo funciona muito bem. A sequência inicial da vida do Carl, por exemplo, parece feita cientificamente sob medida para emocionar, e mesmo sendo direta na intenção, nunca soa exagerada, o que somado com a trilha sonora, atinge exatamente o resultado que busca.
A animação segue essa mesma lógica: não é algo que eu colocaria como o auge absoluto do gênero, mas é extremamente bem executada. O estilo visual é simples, direto e muito eficiente, não escolheria nada de diferente. É aquele tipo de qualidade consistente que marcou a Pixar por muito tempo. Os designs são claros e expressivos, fáceis de entender, mas ainda memoráveis e admiráveis por serem tão bem executados e eficientes. Se tem um ponto que se destaca um pouco mais, é a trilha sonora. Michael Giacchino entrega algo que ele já provou fazer muito bem: músicas que entram no momento certo, sem exagero a ponto de atrapalhar e sem medo de fazer parte, mas com impacto suficiente para marcar o filme. “Married Life” virou praticamente um símbolo, e com razão  é uma daquelas composições que ultrapassam o próprio filme e entram na cultura popular, virando basicamente um meme.
Se eu fosse explicar Up seria como um prato extremamente popular, mas executado com excelência, o famoso feijão com arroz perfeito. Não tenta reinventar nada, mas faz tudo tão bem que se torna especial mesmo assim. É facilmente um dos filmes mais lembrados quando se fala em Pixar, e dificilmente vai envelhecer mal. Pelo contrário, revisitar em diferentes fases da vida só me fez apreciar ainda mais o filme e entender melhor seus momentos.
Gostaria que a Pixar ainda produzisse filmes nesse nível com mais frequência (ultimamente tem sido bem desapontador). Mesmo assim, fico satisfeito com o impacto que esse longa teve em mim desde pequeno.
`
        }
    ]

    const [filmeAtual, setFilmeAtual] = useState(0)

return (
    <div className="min-h-screen bg-base-200">
        <Navhome />
        <div className="flex gap-10 items-start px-4 py-10">
            <div className="sticky top-10 flex gap-10 items-start">
                {/* carrosel */}
                <div className="flex flex-col items-center -mt-6">
                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={6} stroke="currentColor" className="size-6"><path strokeLinecap="round" strokeLinejoin="round" d="m4.5 15.75 7.5-7.5 7.5 7.5" /></svg>
                    <Carrosel filmes={filmes} setFilmeAtual={setFilmeAtual} />
                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={6} stroke="currentColor" className="size-6"><path strokeLinecap="round" strokeLinejoin="round" d="m19.5 8.25-7.5 7.5-7.5-7.5" /></svg>
                </div>  
                {/* ficha tecnica */}
                <div className="max-w-md text-sm">
                    <h2 className="text-4xl font-bold mb-4 text-white italic">{filmes[filmeAtual].titulo}</h2>
                    <p className="text-xl text-white"><strong className="text-[oklch(90%_0.076_70.697)]">Ano:</strong> {filmes[filmeAtual].ano}</p>
                    <p className="text-xl text-white"><strong className="text-[oklch(90%_0.076_70.697)]">Diretor:</strong> {filmes[filmeAtual].diretor}</p>
                    <p className="text-xl text-white"><strong className="text-[oklch(90%_0.076_70.697)]">Duração:</strong> {filmes[filmeAtual].genero}</p>
                    <p className="w-60 text-justify mt-2 text-xl text-white"><strong className="text-[oklch(90%_0.076_70.697)]">Sinopse: </strong>{filmes[filmeAtual].sinopse}</p>
                </div>
            </div>
            {/* review */}
            <div className="flex-1 max-w-3xl ml-8 pr-10">
                <h2 className="text-5xl font-bold mb-4">Review</h2>
                <div className="text-justify space-y-4leading-relaxed whitespace-pre-line">
                    <p>{filmes[filmeAtual].review}</p>
                </div>
            </div>
        </div>
        <div>
            <Footer />
        </div>
    </div>
        )
}

export default Home