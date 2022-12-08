import { Component } from 'react';
import PropTypes from "prop-types";

import { Button } from "../Botton";
import { ReactComponent as StarIcon } from "../../icons/star.svg"
import { ReactComponent as StarIconEmpty } from "../../icons/star-empty.svg";
import { getWrappedValue } from "../../helpers/getWrappedValue";

import "./ProductCard.scss"

class ProductCard extends Component {
    checkIsProductInCart(id) {
        return !!localStorage.getItem(id)
    }

    checkIsInFavorites = id => {
        return localStorage.getItem(`${id}Favorite`);
    }

    render() {
        const { title, price, description, image, id,
            clickAddToCart, clickFavoriteIcon } = this.props;
        const isFavoriteProduct = this.checkIsInFavorites(id);
        const textBtn = this.checkIsProductInCart(id) ? "Already added" : "Add to cart";

        return (
            <div className="product-wrapper">
                <div className="star-icon-wrapper" onClick={ () => clickFavoriteIcon(id) }>
                    {
                        isFavoriteProduct ?
                            <StarIcon className="star-icon"/>
                            :
                            <StarIconEmpty className="star-icon"/>
                    }
                </div>
                <div className="img-wrapper">
                    <img src={ image } alt={ title }/>
                </div>
                <div className="product-info">
                    <h3 title={ title }>{ getWrappedValue(title, 45) }</h3>
                    <p>{ getWrappedValue(description, 85) }</p>
                    <div className="product-price">
                        <span>$ { price.toFixed(2) }</span>
                        <Button
                            isDisabled={ this.checkIsProductInCart(id) }
                            onClick={ () => clickAddToCart(id) }
                            text={ textBtn } />
                    </div>
                </div>
            </div>
        );
    }
}

ProductCard.propTypes = {
    title: PropTypes.string,
    price: PropTypes.number,
    description: PropTypes.string,
    image: PropTypes.string,
    id: PropTypes.number.isRequired,
    clickAddToCart: PropTypes.func,
    clickLikeButton: PropTypes.func,
    clickUnlikeButton: PropTypes.func,
};

export default ProductCard;
