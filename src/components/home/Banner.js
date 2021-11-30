const Banner=()=>{
    return(
        <div className="bg-white mt-14">
            <div className="grid md:grid-cols-2">
                <div className="max-w-7xl mx-auto py-16 px-4 sm:py-24 sm:px-6 lg:px-8">
                    <div className="text-center">
                    <p className="mt-1 text-4xl font-medium text-gray-900 sm:text-5xl sm:tracking-tight lg:text-6xl">
                    Discover, collect, and sell extraordinary NFTs
                    </p>
                    <p className="max-w-xl mt-5 mx-auto text-xl text-gray-500">
                    on the world's first & largest NFT marketplace
                    </p>
                    <button
                        type="button"
                        className="mt-8 mx-2 inline-flex items-center px-12 py-3 border border-transparent text-base font-medium rounded-md shadow-sm text-white bg-indigo-600 hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"
                    >
                        Discover
                    </button>
                    <button
                        type="button"
                        className="mt-8 mx-2 inline-flex items-center px-12 py-3 border border-transparent text-base font-medium rounded-md text-indigo-700 bg-indigo-100 hover:bg-indigo-200 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"
                    >
                        Create
                    </button>
                    </div>
                    
                </div>
                <div className="max-w-7xl mx-auto py-16 px-4 sm:py-24 sm:px-6 lg:px-8">
                    <img src="m1.png" alt="" className="h-full w-full"/>
                </div>

            </div>
            
        </div>
    )
}

export default Banner