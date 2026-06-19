import Duvidabox from "../components/DuvidaBox"
import Navduv from "../components/Navduv"

function Duvida() {
    return(
        <div className='min-h-screen bg-base-200'>
            <Navduv />
            <div className="mt-24 flex justify-center">
                <Duvidabox />
            </div>
        </div>

    )
}

export default Duvida