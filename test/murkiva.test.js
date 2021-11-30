const {assert} = require('chai')

const Murkiva = artifacts.require('./Murkiva')

require('chai')
.use(require('chai-as-promised'))
.should()


contract('Murkiva', (accounts) => {
    let contract

    before( async () => {
        contract = await Murkiva.deployed()
    })

    // Hacer tests

    //1. Testear Probar despliegue y acceso a variables
    describe('deployment', async () =>{
        //a. despliegue correcto
        it('deploy successful', async() =>{
            const address = contract.address;
            assert.notEqual(address, '')
            assert.notEqual(address, null)
            assert.notEqual(address, undefined)
            assert.notEqual(address, 0x0)
        })

        //b. Acceso a variables
        it('has a name', async() => {
            const name = await contract.name()
            assert.equal(name, 'Murkiva')
        })
        it('has a symbol', async() => {
            const symbol = await contract.symbol()
            assert.equal(symbol, 'MRKV')
        })
    })

    //2. Test mint
    describe('minting', async () =>{
        it('creates a new token', async() => {
            const result = await contract.mint('https...1')
            const totalSupply = await contract.totalSupply()

            // Todo bien
            assert.equal(totalSupply, 1)
            const event = result.logs[0].args
            assert.equal(event.from, '0x0000000000000000000000000000000000000000', 'from the contract')
            assert.equal(event.to, accounts[0], 'to is msg.sender')

            // Algo salio mal
            await contract.mint('https...1').should.be.rejected
        })
    })

    //3. probar indices
    describe('indexing', async()=>{
        it('lists murkiva', async()=>{
            //mintear 3 nuevos tokens
            await contract.mint('https...2')
            await contract.mint('https...3')
            await contract.mint('https...4')
            const totalSupply = await contract.totalSupply()

            // Loop a travez de la lista de tokens y agregar
            let result = []
            let Murkiva
            for( i = 1; i <= totalSupply; i++){
                Murkiva = await contract.MurkivaNFTS(i - 1)
                result.push(Murkiva)
            }
        })
    })
})