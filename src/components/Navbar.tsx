import { useNavigate } from "react-router-dom"

function Navbar(){
    const navigate = useNavigate()

    function irParaDuvida() {
    navigate("/duvida")
}
    return (
        <header className="navbar bg-base-100 shadow-sm px-4">
            <div className="navbar-start">
                <a href="" className="btn btn-ghost text-4xl italic -mt-2">Personalog</a>
            </div>
            <div className="navbar-end gap-2">
                <button className="btn btn-warning -mt-1" onClick={irParaDuvida}>Dúvida</button>
            </div>
        </header>
    )
}

export default Navbar