import React from 'react';
import { FaFacebook, FaYoutube } from 'react-icons/fa';
import Product from './components/product';
import productData from './productData';



function App(){
    return (
        <div>
            <header>
                <h1>BD Store</h1>
            </header>

            <main className='mainContainer'>
               <div className="products">
                {productData.map((product, index)=>(
                    <Product 
                        key={index}
                        img={product.img} 
                        productTxt1={product.productTxt1} 
                        productTxt2={product.productTxt2} 
                        productTxt3={product.productTxt3} 
                        productDsc={product.productDsc} 
                    />
                ))}
               </div>
            </main>
            
            <footer>
                <p className="left">
                    Be friend with me{' '}
                    <a href="https://www.facebook.com/mezbahDev">
                        <FaFacebook className="footer__icon" />
                    </a>{' '}
                    facebook
                </p>
                <p className="right">Developed with &hearts; by mezbahDev</p>
            </footer>
        </div>
    );
};

export default App;
