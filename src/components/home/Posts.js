import { connect } from "react-redux"

const Posts =({
  nfts
})=>{
    return(
<div className="relative bg-gray-50 pt-16 pb-20 px-4 sm:px-6 lg:pt-10 lg:pb-28 lg:px-8">
      <div className="absolute inset-0">
        <div className="bg-white h-1/3 sm:h-2/3" />
      </div>
      <div className="relative max-w-7xl mx-auto">
        <div className="text-center">
          <h2 className="text-3xl tracking-tight font-bold text-gray-900 sm:text-4xl">Notable Drops</h2>
          
        </div>
        <div className="mt-12 max-w-lg mx-auto grid gap-5 lg:grid-cols-3 lg:max-w-none">
          {nfts && nfts.map((nft) => (
            <div className="flex flex-col rounded-lg shadow-lg overflow-hidden">
              <div className="flex-shrink-0">
                <img className="h-120 w-full object-cover" src={nft} alt="" />
              </div>
              <div className="flex-1 bg-white p-6 flex flex-col justify-between">
                <div className="flex-1">
                  <div className="block mt-2">
                    <p className="text-xl font-semibold text-gray-900">Murkiva</p>
                    <p className="mt-3 text-base text-gray-500">Murkiva es una coleccion de nfts exclusiva</p>
                  </div>
                  <a
                    href={nft}
                    className="inline-flex float-right mt-4 items-center px-6 py-3 border border-transparent text-base font-medium rounded-md shadow-sm text-white bg-indigo-600 hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"
                  >
                    Download
                  </a>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
    )
        
}

const mapStateToProps = state => ({
  nfts: state.ethereum.nfts
})

export default connect(mapStateToProps, {

}) (Posts)