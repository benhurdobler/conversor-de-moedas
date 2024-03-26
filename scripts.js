const convertButton = document.querySelector(".conversor")
const currencySelect = document.querySelector(".currency-select")
const selectConvertFrom = document.querySelector(".select-convert-from")


convertButton.addEventListener("click", convertValues)


async function convertValues(){
    const currencyInputValue = document.querySelector(".input-currency").value
    const currencyValueToConvert = document.querySelector(".currency-value-to-convert")
    const currencyValueConverted = document.querySelector(".currency-value")
    
    
    const data = await fetch("https://economia.awesomeapi.com.br/last/USD-BRL,USD-EUR,USD-GBP,BTC-BRL,BTC-USD,BTC-EUR,GBP-USD,GBP-BRL,GBP-EUR,BRL-USD,BRL-EUR,BRL-GBP,EUR-USD,EUR-GBP,EUR-BRL").then(response => response.json())
    


    const dolarToReal =  data.USDBRL.high
    const dolarToEuro = data.USDEUR.high
    const dolarToLibra = data.USDGBP.high
    const dolarToBitcoin = 42420
    const dollarToDolar = 1

    const libraToReal = data.GBPBRL.high
    const libraToDolar = data.GBPUSD.high
    const libraToEuro = data.GBPEUR.high
    const libraToBitcoin = 33379
    const libraToLibra = 1

    const realToDolar = data.BRLUSD.high
    const realToLibra = data.BRLGBP.high
    const realToEuro = data.BRLEUR.high
    const realToBitcoin = 209189
    const realToReal = 1

    const euroToDolar = data.EURUSD.high
    const euroToLibra = data.EURGBP.high
    const euroToReal = data.EURBRL.high
    const euroToBitcoin = 38913
    const euroToEuro = 1

    const bitToDolar = data.BTCUSD.high
    const bitToEuro = data.BTCEUR.high
    const bitToReal = data.BTCBRL.high
    const bitToLibra = 0.000030
    const bitToBit = 1
    


    //Conversion Dólar
    if(selectConvertFrom.value == "dolar" & currencySelect.value == "real"){

        currencyValueToConvert.innerHTML = new Intl.NumberFormat("en-US", {
            style: "currency",
            currency: "USD"
        }).format(currencyInputValue)

        currencyValueConverted.innerHTML = new Intl.NumberFormat("pt-BR", {
            style: "currency",
            currency: "BRL"
        }).format(currencyInputValue / dolarToReal)

    }

    if(selectConvertFrom.value == "dolar" & currencySelect.value == "euro"){
        currencyValueToConvert.innerHTML = new Intl.NumberFormat("en-Us", {
            style: "currency",
            currency: "USD"
        }).format(currencyInputValue)

        currencyValueConverted.innerHTML = new Intl.NumberFormat("de-DE", {
            style: "currency",
            currency: "EUR"
        }).format(currencyInputValue / dolarToEuro)
    }

    if(selectConvertFrom == "dolar" & currencySelect.value == "libra"){
        currencyValueToConvert.innerHTML = new Intl.NumberFormat("en-US", {
            style: "currency",
            currency: "USD"
        }).format(currencyInputValue)

        currencyValueConverted.innerHTML = new Intl.NumberFormat("en-UK",{
            style: "currency",
            currency: "GBP"
        }).format(currencyInputValue / dolarToLibra)
    }

    if(selectConvertFrom.value == "dolar" & currencySelect.value == "bitcoin"){
        currencyValueToConvert.innerHTML = new Intl.NumberFormat("en-US", {
            style: "currency",
            currency: "USD"
        }).format(currencyInputValue)

        currencyValueConverted.innerHTML = new Intl.NumberFormat("de-DE", {
            style: "currency",
            currency: "BTC"
        }).format(currencyInputValue / dolarToBitcoin)

    }

    if (selectConvertFrom.value == "dolar" & currencySelect.value == "dolar") {

        currencyValueToConvert.innerHTML = new Intl.NumberFormat("en-US", {
            style: "currency",
            currency: "USD"
        }).format(currencyInputValue)

        currencyValueConverted.innerHTML = new Intl.NumberFormat("en-US", {
            style: "currency",
            currency: "USD"
        }).format(currencyInputValue / dollarToDolar)
    }

    //Conversion Real 

    if (selectConvertFrom.value == "real" & currencySelect.value == "dolar") {

        currencyValueToConvert.innerHTML = new Intl.NumberFormat("pt-BR", {
            style: "currency",
            currency: "BRL"
        }).format(currencyInputValue)

        currencyValueConverted.innerHTML = new Intl.NumberFormat("en-US", {
            style: "currency",
            currency: "USD"
        }).format(currencyInputValue / realToDolar)
    }

    if (selectConvertFrom.value == "real" & currencySelect.value == "libra") {

        currencyValueToConvert.innerHTML = new Intl.NumberFormat("pt-BR", {
            style: "currency",
            currency: "BRL"
        }).format(currencyInputValue)

        currencyValueConverted.innerHTML = new Intl.NumberFormat("en-UK", {
            style: "currency",
            currency: "GBP"
        }).format(currencyInputValue / realToLibra)

    }

    if (selectConvertFrom.value == "real" & currencySelect.value == "bitcoin") {

        currencyValueToConvert.innerHTML = new Intl.NumberFormat("pt-BR", {
            style: "currency",
            currency: "BRL"
        }).format(currencyInputValue)

        currencyValueConverted.innerHTML = new Intl.NumberFormat("de-DE", {
            style: "currency",
            currency: "BTC"
        }).format(currencyInputValue / realToBitcoin)

    }

    if (selectConvertFrom.value == "real" & currencySelect.value == "euro") {

        currencyValueToConvert.innerHTML = new Intl.NumberFormat("pt-BR", {
            style: "currency",
            currency: "BRL"
        }).format(currencyInputValue)

        currencyValueConverted.innerHTML = new Intl.NumberFormat("de-DE", {
            style: "currency",
            currency: "EUR"
        }).format(currencyInputValue / realToEuro)

    }

    if (selectConvertFrom.value == "real" & currencySelect.value == "real") {

        currencyValueToConvert.innerHTML = new Intl.NumberFormat("pt-BR", {
            style: "currency",
            currency: "BRL"
        }).format(currencyInputValue)

        currencyValueConverted.innerHTML = new Intl.NumberFormat("pt-BR", {
            style: "currency",
            currency: "BRL"
        }).format(currencyInputValue / realToReal)
        
    }

    //conversion Libra

    if(selectConvertFrom.value == "libra" & currencySelect.value == "real"){

        currencyValueToConvert.innerHTML = new Intl.NumberFormat("en-UK",{
            style: "currency",
            currency: "GBP"
        }).format(currencyInputValue)

        currencyValueConverted.innerHTML = new Intl.NumberFormat("pt-BR", {
            style: "currency",
            currency: "BRL"
        }).format(currencyInputValue * libraToReal)
    }

    if(selectConvertFrom.value == "libra" & currencySelect.value == "dolar"){
        
        currencyValueToConvert.innerHTML = new Intl.NumberFormat("en-UK",{
            style: "currency",
            currency: "GBP"
        }).format(currencyInputValue)

        currencyValueConverted.innerHTML = new Intl.NumberFormat("en-US", {
            style: "currency",
            currency: "USD"
        }).format(currencyInputValue * libraToDolar)
    }

    if(selectConvertFrom.value == "libra" & currencySelect.value == "euro" ){

        currencyValueToConvert.innerHTML = new Intl.NumberFormat("en-UK",{
            style: "currency",
            currency: "GBP"
        }).format(currencyInputValue)

        currencyValueConverted.innerHTML = new Intl.NumberFormat("de-DE", {
            style: "currency",
            currency: "EUR"
        }).format(currencyInputValue * libraToEuro)
    }

    if(selectConvertFrom.value == "libra" & currencySelect.value == "bitcoin"){

        currencyValueToConvert.innerHTML = new Intl.NumberFormat("en-UK",{
            style: "currency",
            currency: "GBP"
        }).format(currencyInputValue)

        currencyValueConverted.innerHTML = new Intl.NumberFormat("de-DE", {
            style: "currency",
            currency: "BTC"
        }).format(currencyInputValue / libraToBitcoin)
    }

    if(selectConvertFrom.value == "libra" & currencySelect.value == "libra"){

        currencyValueToConvert.innerHTML = new Intl.NumberFormat("en-UK",{
            style: "currency",
            currency: "GBP"
        }).format(currencyInputValue)

        currencyValueConverted.innerHTML = new Intl.NumberFormat("en-UK",{
            style: "currency",
            currency: "GBP"
        }).format(currencyInputValue / libraToLibra) 
    }

    // conversion EURO

    if(selectConvertFrom.value == "euro" & currencySelect.value == "dolar"){
        
        currencyValueToConvert.innerHTML = new Intl.NumberFormat("de-DE", {
            style: "currency",
            currency: "EUR"
        }).format (currencyInputValue)

        currencyValueConverted.innerHTML = new Intl.NumberFormat("en-US", {
            style: "currency",
            currency: "USD"
        }).format(currencyInputValue * euroToDolar)
    }

    if(selectConvertFrom.value == "euro" & currencySelect.value == "libra"){

        currencyValueToConvert.innerHTML = new Intl.NumberFormat("de-DE", {
            style: "currency",
            currency: "EUR"
        }).format (currencyInputValue)

        currencyValueConverted.innerHTML = new Intl.NumberFormat("en-UK",{
            style: "currency",
            currency: "GBP"
        }).format(currencyInputValue * euroToLibra)
    }

    if(selectConvertFrom.value == "euro" & currencySelect.value == "real"){

        currencyValueToConvert.innerHTML = new Intl.NumberFormat("de-DE", {
            style: "currency",
            currency: "EUR"
        }).format (currencyInputValue)

        currencyValueConverted.innerHTML = new Intl.NumberFormat("pt-BR", {
            style: "currency",
            currency: "BRL"
        }).format(currencyInputValue * euroToReal)
    }

    if(selectConvertFrom.value == "euro" & currencySelect.value == "bitcoin"){

        currencyValueToConvert.innerHTML = new Intl.NumberFormat("de-DE", {
            style: "currency",
            currency: "EUR"
        }).format (currencyInputValue)

        currencyValueConverted.innerHTML = new Intl.NumberFormat("de-DE", {
            style: "currency",
            currency: "BTC"
        }).format(currencyInputValue / euroToBitcoin)
    }

    if(selectConvertFrom.value == "euro" & currencySelect.value == "euro"){

        currencyValueToConvert.innerHTML = new Intl.NumberFormat("de-DE", {
            style: "currency",
            currency: "EUR"
        }).format (currencyInputValue)

        currencyValueConverted.innerHTML = new Intl.NumberFormat("de-DE", {
            style: "currency",
            currency: "EUR"
        }).format(currencyInputValue / euroToEuro)
    }

    //conversion BITCOIN

    if(selectConvertFrom.value == "bitcoin" & currencySelect.value == "dolar"){

        currencyValueToConvert.innerHTML = new Intl.NumberFormat("de-DE", {
            style: "currency",
            currency: "BTC"
        }).format(currencyInputValue)

        currencyValueConverted.innerHTML = new Intl.NumberFormat("en-US", {
            style: "currency",
            currency: "USD"
        }).format(currencyInputValue * bitToDolar)
    }

    if(selectConvertFrom.value == "bitcoin" & currencySelect.value == "libra"){

        currencyValueToConvert.innerHTML = new Intl.NumberFormat("de-DE", {
            style: "currency",
            currency: "BTC"
        }).format(currencyInputValue)

        currencyValueConverted.innerHTML = new Intl.NumberFormat("en-UK",{
            style: "currency",
            currency: "GBP"
        }).format(currencyInputValue * bitToLibra)
    }

    if(selectConvertFrom.value == "bitcoin" & currencySelect.value == "real"){

        currencyValueToConvert.innerHTML = new Intl.NumberFormat("de-DE", {
            style: "currency",
            currency: "BTC"
        }).format(currencyInputValue)

        currencyValueConverted.innerHTML = new Intl.NumberFormat("pt-BR",{
            style: "currency",
            currency: "BRL"
        }).format(currencyInputValue * bitToReal)
    }

    if(selectConvertFrom.value == "bitcoin" & currencySelect.value == "euro"){

        currencyValueToConvert.innerHTML = new Intl.NumberFormat("de-DE", {
            style: "currency",
            currency: "BTC"
        }).format(currencyInputValue)

        currencyValueConverted.innerHTML = new Intl.NumberFormat("de-DE", {
            style: "currency",
            currency: "EUR"
        }).format(currencyInputValue * bitToEuro)
    }

    if(selectConvertFrom.value == "bitcoin" & currencySelect.value == "euro"){

        currencyValueToConvert.innerHTML = new Intl.NumberFormat("de-DE", {
            style: "currency",
            currency: "BTC"
        }).format(currencyInputValue)

        currencyValueConverted.innerHTML = new Intl.NumberFormat("de-DE", {
            style: "currency",
            currency: "BTC"
        }).format(currencyInputValue * bitToBit)

        }


    function changeConvertFrom(){
        const textConvertFrom = document.querySelector(".currency")
        const convertFromImage = document.querySelector(".convert-from-image")

        if (selectConvertFrom.value == "dolar") {

            textConvertFrom.innerHTML = "Dolar"
            convertFromImage.src = "./assets/dolar.png"
        }
    
        if (selectConvertFrom.value == "real") {
    
            textConvertFrom.innerHTML = "Real"
            convertFromImage.src = "./assets/real.png"
        }
    
        if (selectConvertFrom.value == "euro") {
    
            textConvertFrom.innerHTML = "Euro"
            convertFromImage.src = "./assets/euro.png"
        }
    
        if (selectConvertFrom.value == "libra") {
    
            textConvertFrom.innerHTML = "Libra"
            convertFromImage.src = "./assets/libra.png"
        }
    
        if (selectConvertFrom.value == "bitcoin") {
    
            textConvertFrom.innerHTML = "Bitcoin"
            convertFromImage.src = "./assets/bitcoin.png"
        }
    
    
    

    }
    selectConvertFrom.addEventListener("change", changeConvertFrom)

function changeCurrency(){
    const currencyName = document.getElementById("currency-name")
    const currencyImage = document.querySelector(".currency-img")


    if(currencySelect.value == "dolar"){
        currencyName.innerHTML = "Dólar americano"
        currencyImage.src = "./assets/dolar.png"
    }
    if(currencySelect.value == "euro"){
        currencyName.innerHTML = "Euro"
        currencyImage.src = "./assets/euro.png"
    }
    if(currencySelect.value == "libra"){
        currencyName.innerHTML = "Libra"
        currencyImage.src = "./assets/libra.png"
    }
    if(currencySelect.value == "bitcoin"){
        currencyName.innerHTML = "Bitcoin"
        currencyImage.src = "./assets/bitcoin.png"
    }

    if(currencySelect.value == "real"){
        currencyName.innerHTML = "Real"
        currencyImage.src = "./assets/real.png"
    }
    
    convertValues()
}
currencySelect.addEventListener("change", changeCurrency)

}
