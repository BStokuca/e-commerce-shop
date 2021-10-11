import { useState } from 'react'
import { products } from '../../data/Products'
import { ProductData } from './types'

const PRODUCT_IMAGE_LOGO_URL = "https://cdn2.vectorstock.com/i/1000x1000/06/31/logo-natural-product-vector-14130631.jpg"

const Products = () => {
    const [shoppingCart, setShoppingCart] = useState<ProductData[]>([])

    const addToShoppingCart = (id: string) =>{
        const productsToBeAdded = products.filter((p) => p.id === id)
        const updatedShoppingCart = [...shoppingCart, ...productsToBeAdded]
        setShoppingCart(updatedShoppingCart)
    }
    const sime:number = 0
    const deleteProduct = (id: string): void => {
       const updatedShoppingCart =  shoppingCart.filter((p) => p.id !== id)
       setShoppingCart(updatedShoppingCart)
       
    }
    
    // useEffect(() => {
    // }, [shoppingCart])

    const displayedProducts = products.map((p) =>
       {
            return  (
                <article className="products" key={p.id}>
                        <img alt="Slika proizvoda 1" src={PRODUCT_IMAGE_LOGO_URL} />
                        <a href="/">{p.name}</a>
                    <div>
                        <p className="price">{`${p.price} ${p.currency}`}</p>
                    </div>
                    <br />
                    <button className="btn btn-danadd ger"
                            onClick={() => addToShoppingCart(p.id)}
                    >
                        add
                    </button>
                </article>
            )
        }
    )
    const displayedShoppingCart = shoppingCart.map((p) =>
            <tr key={p.id}>
                <th>{p.name}</th>
                <th>{p.price} {p.currency}</th>
                <th><button onClick={() => deleteProduct(p.id)}>delete</button></th>
            </tr>
    )
    console.log(displayedShoppingCart)
    
    return (
        <div className="productss">
            <div className="productsss">
                {displayedProducts}
            </div>
            {displayedShoppingCart && (
                <table>
                    <tbody>
                        {displayedShoppingCart }
                    </tbody>
                </table>
            )}
        </div>
    )
}

export default Products
