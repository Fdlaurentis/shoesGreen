import style from './Cards.module.css';

const Cards = ({ productList }) => {
    return (
        <div className={style.containerCards}>
            <div className={style.cards}>
                <img src={`https://i.ibb.co/${productList.images[0]}`} />
                <div className={style.title}>
                    <span>{productList.name}</span>
                    <span>${productList.price}</span>
                </div>
                <span>{productList.description}</span>
                <div className={style.boton}>Ver más</div>
            </div>
        </div>
    );
};

export default Cards;
