import { useNavigate } from "react-router-dom"

function SignupCard() {
    const navigate = useNavigate()

    function fazerLogin() {
        navigate('/home')
    }
    return (
        <form onSubmit={fazerLogin}>
            <fieldset className="fieldset bg-base-100 border-base-300 rounded-box w-xs border p-4 m-auto">
                <legend className="fieldset-legend text-4xl">Login</legend>
                <label className="label font-bold text-xl">Usuário</label>
                <input type="text" required className="input required" placeholder="Seu usuário" />
                <label className="label font-bold text-xl">Senha</label>
                <input type="password" required className="input required" placeholder="*****" />
                <button className="btn btn-neutral mt-4 text-2xl p-8">Entrar</button>
            </fieldset>
        </form>
    )
}

export default SignupCard