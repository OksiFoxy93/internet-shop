import { Component } from 'react';
import PropTypes from 'prop-types';

import { ReactComponent as StarIcon } from "../../icons/star.svg";
import { ReactComponent as ShoppingCartIcon } from "../../icons/shopping-cart.svg";

import "./Header.scss"

class Header extends Component {
    render() {
        const { numberFavoriteProducts, numberProductsInCart } = this.props;

        return (
            <header className="header-wrapper">
                <nav>
                    <div className="logo">
                        <a href="/">
                            <span>MULTI</span>
                            <span>SHOP</span>
                        </a>
                    </div>
                    <ul>
                        <li>
                            <a href="/">
                                About
                            </a>
                        </li>
                        <li>
                            <a href="/" className="active">
                                Shop
                            </a>
                        </li>
                        <li>
                            <a href="/">
                                Help
                            </a>
                        </li>
                        <li>
                            <a href="/">
                                FAQs
                            </a>
                        </li>
                        <li>
                            <a href="/">
                                Contact
                            </a>
                        </li>
                    </ul>
                </nav>
                <div className="icons-wrapper">
                    <a href="/">
                        <StarIcon className="icon"/>
                        <span>{ numberFavoriteProducts }</span>
                    </a>
                    <a href="/">
                        <ShoppingCartIcon className="icon icon-cart" />
                        <span>{ numberProductsInCart }</span>
                    </a>
                </div>
            </header>
        );
    }
}

Header.propTypes = {
    numberProductsInCart: PropTypes.number,
    numberProductsLike: PropTypes.number,
};

export default Header;
