import Footer from "components/navigation/Footer"
import Navbar from "components/navigation/Navbar"
import Layout from "hocs/layouts/Layout"
import Instructive from 'components/Instructivo/Instructive'

function Instructivo(){
    return(
        <Layout>
            <Navbar/>
                <div className="pt-26">
                <Instructive/>
                </div>
            <Footer/>
        </Layout>
    )
}

export default Instructivo