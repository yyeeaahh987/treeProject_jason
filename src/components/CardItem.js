import React from 'react'
import { Link } from 'react-router-dom'

function CardItem() {
    return (
        <>
            <li className="cards__item">
                <figure className="cards__item__pic-warp">
                    <img src="/" alt="Tree Image"
                        className="cards__item__img" />
                </figure>
                <div className="cards__item__info">
                    <h5 className="cards__item__text"></h5>
                </div>
            </li>
        </>
    )
}

export default CardItem

/*
LInk 用係redirect身上  但呢段唔知想 click個tree 圖去邊所以出error
*/
{/* <li className="cards__item">
<Link className="cards__item__link">
    <figure className="cards__item__pic-warp">
        <img src="/" alt="Tree Image"
        className="cards__item__img"/>
    </figure>
    <div className="cards__item__info">
        <h5 className="cards__item__text"></h5>
    </div>
</Link>
</li> */}