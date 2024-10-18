import style from './Home.module.css';
import products from '../../utils/data.json';
import Cards from '../../components/Cards/Cards.component';

const Home = () => {
    return (
        <div>
            <div className={style.home}>
                PRODUCTOS
                <ul>
                    {products.product.map((product) => (
                        <li key={product.id}>
                            <Cards productList={product} />
                        </li>
                    ))}
                </ul>
            </div>
        </div>
    );
};

export default Home;
