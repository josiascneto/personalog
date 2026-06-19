import { useNavigate } from "react-router-dom"

function Navduv(){
    const navigate = useNavigate()

    function fazerLogin() {
        navigate('/home')
    }
    function sair() {
        navigate("/")
    }
    return (
        <header className="navbar bg-base-100 shadow-sm px-4">
            <div className="navbar-start">
                <a href="" className="btn btn-ghost text-4xl italic">Personalog</a>
            </div>
            <div className="navbar-end gap-2">
                <button className="btn btn-warning" onClick={fazerLogin}>Home</button>
                <button className="btn btn-warning" onClick={sair}>Sair</button>
            </div>
        </header>
    )
}

export default Navduv