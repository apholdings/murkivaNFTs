import Banner from "../../components/home/Banner"
import Posts from "../../components/home/Posts"
import Layout from "../../hocs/Layout"

const Home = ()=>{
    return(
        <Layout>
            <Banner/>
            <Posts/>
        </Layout>
    )
}

export default Home