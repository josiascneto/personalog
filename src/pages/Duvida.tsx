import Comobox from "../components/Comousa"
import Duvidabox from "../components/DuvidaBox"
import Navduv from "../components/Navduv"
import Footer from "../components/Footer"

function Duvida() {
    return(
        <div className='min-h-screen bg-base-200 flex flex-col'>
            <Navduv />
            <div className="flex-1 mt-18 flex justify-center gap-10">
                <Duvidabox />
                <Comobox />
            </div>
            <Footer />
        </div>
    )
}

export default Duvida