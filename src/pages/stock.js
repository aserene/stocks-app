import { useLoaderData} from "react-router-dom"
import {Link} from "react-router-dom"
const Stock = props => {
    const stock = useLoaderData()
    return (
        <div className="stock">
            <ul>
                <li>Company Name:{stock[0].name}</li>
                <li>Symbol: {stock[0].symbol}</li>
                <li>Price: {stock[0].price}</li>
                <li>Change Percentage: {stock[0].changesPercentage}</li>
                <li>Day Low: {stock[0].dayLow}</li>
                <li>Day High: {stock[0].dayHigh}</li>
                <li>Year Low: {stock[0].yearLow}</li>
                <li>Year High: {stock[0].yearHigh}</li>
                <li>Exchange: {stock[0].exchange}</li>
            </ul>
            <Link to="/stocks">Return to Dashboard</Link>
        </div>
    )
}
export default Stock