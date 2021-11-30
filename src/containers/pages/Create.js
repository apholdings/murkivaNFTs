import InputForm from "../../components/create/InputForm"
import Layout from "../../hocs/Layout"

const Create = ()=>{
    return(
        <Layout>
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            {/* We've used 3xl here, but feel free to try other max-widths based on your needs */}
            <div className="max-w-3xl mx-auto">

            <div className="bg-white mt-12">
                <div className="max-w-7xl mx-auto py-16 px-4 sm:py-24 sm:px-6 lg:px-8">
                    <div className="text-center bg-white">
                    <InputForm/>
                    </div>
                </div>
            </div>
                
            </div>
            </div>
        </Layout>
    )
}

export default Create