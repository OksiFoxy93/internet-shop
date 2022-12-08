import { Component } from 'react';
import PropTypes from 'prop-types';

import { sendRequest } from "../../helpers/sendRequest";
import { GET_ALL_PRODUCTS } from "../../config/api";
import { ProductCard } from "../../components/ProductCard";

import "./Shop.scss"

class Shop extends Component {
    state = {
        productItems: [],
    }

    componentDidMount() {
        sendRequest(GET_ALL_PRODUCTS)
            .then( results => {
                this.setState(prevState => ({
                    ...prevState,
                    productItems: results
                }))
            })
    }


    render() {
        const { productItems } = this.state;
        const { clickAddToCart, clickFavoriteIcon } = this.props;

        return (
            <section className="products-wrapper">
                { !!productItems.length && productItems.map( product => {
                    return <ProductCard
                                { ...product }
                                key={ product.id }
                                clickAddToCart={ clickAddToCart }
                                clickFavoriteIcon={ clickFavoriteIcon } />
                    }
                )}
            </section>
        );
    }
}

Shop.propTypes = {
    clickAddToCart: PropTypes.func,
    clickLikeButton: PropTypes.func,
    clickUnlikeButton: PropTypes.func,
};

export default Shop;
