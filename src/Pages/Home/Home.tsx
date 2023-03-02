import ProductsList from 'Components/ProductsList/ProductsList'
import ProductsListItem from 'Components/ProductsList/ProductsListItem'
import './home.scss'
import Reviews from 'Components/Reviews/Reviews'
type Props = {
    addProductToCart: (countFinal: number, priceFinal: number) => void
}

const Home = ({ addProductToCart }: Props) => {
    return (
        <div className="HomePage">
            <ProductsList addProductToCart={addProductToCart} />
            <Reviews />
        </div>
    )
}
export default Home
