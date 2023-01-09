import { useLoaderData} from "react-router-dom"
const Stock = props => {
    const stock = useLoaderData()
    return (
        <div>
            <ul>
                <li>{stock[0].name}</li>
                <li>{stock[0].symbol}</li>
                <li>{stock[0].price}</li>
                <li>{stock[0].changesPercentage}</li>
                <li>{stock[0].dayLow}</li>
                <li>{stock[0].dayHigh}</li>
                <li>{stock[0].yearLow}</li>
                <li>{stock[0].yearHigh}</li>
                <li>{stock[0].exchange}</li>
            </ul>
        </div>
    )
}
export default Stock