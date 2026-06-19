import Comobox from "../components/Comousa"
import Duvidabox from "../components/DuvidaBox"
import Navduv from "../components/Navduv"

function Duvida() {
    return(
        <div className='min-h-screen bg-base-200'>
            <Navduv />
            <div className="mt-18 flex justify-center gap-10">
                <Duvidabox />
                <Comobox />
            </div>
        </div>

    )
}

export default Duvida