import Footer from "components/navigation/Footer"
import Navbar from "components/navigation/Navbar"
import Layout from "hocs/layouts/Layout"
import NCenso from "components/Censo1/NCenso"
import { Helmet } from "react-helmet-async"

function Censo(){
    return(
        <Layout>              
            <Navbar/>
                <div className="pt-26">
                <NCenso/>
                </div>
            <Footer/>
        </Layout>
    )
}

export default Censo