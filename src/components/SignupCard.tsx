import { useNavigate } from "react-router-dom"

function SignupCard() {
    const navigate = useNavigate()

    function fazerLogin() {
        navigate('/home')
    }
    return (
            <fieldset className="fieldset bg-base-100 border-base-300 rounded-box w-xs border p-4 m-auto">
                <legend className="fieldset-legend text-4xl">Login</legend>
                <label className="label font-bold text-xl">Usuário</label>
                <input type="text" required className="input" placeholder="Seu usuário" />
                <label className="label font-bold text-xl">Senha</label>
                <input type="password" required className="input" placeholder="*****" />
                <button className="btn btn-neutral mt-4 text-2xl p-8" onClick={fazerLogin}>Entrar</button>
            </fieldset>
    )
}

export default SignupCard