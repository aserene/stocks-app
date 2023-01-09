export const stockLoader = async ({params}) => {
    const symbol = params.symbol
    const apiKey = "b61189fda7bbddd249afd54077d2499b"
    return (await fetch(`https://financialmodelingprep.com/api/v3/quote/${symbol}?apikey=${apiKey}`)).json()
}