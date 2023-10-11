import Footer from "components/navigation/Footer"
import Navbar from "components/navigation/Navbar"
import Layout from "hocs/layouts/Layout"

function Ayuda(){
    return(
        <Layout>
            <Navbar/>
                <div className="pt-28">
                Ayuda
                </div>
            <Footer/>
        </Layout>
    )
}

export default Ayuda