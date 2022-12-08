import { Component } from "react";

import { Button } from "./components/Botton";
import { Modal } from "./components/Modal";
import { Header } from "./components/Header";
import { Shop } from "./pages/Shop";

import { modal } from "./config/modal-config";
import { getItemFromLocalStorage, setCuntNumberInLocalStorage } from "./helpers/localStorage";

import './App.scss';

class App extends Component {
    state = {
        activeModal: "addToCartModal",
        isShowModal: false,
        addToCartModal: modal.addToCartModal,
        currentProductId: '',
        numberFavoriteProducts: getItemFromLocalStorage("numberFavoriteProducts"),
        numberProductsInCart: getItemFromLocalStorage("numberProductsInCart")
    };

    clickAddToCart = productId => {
        this.setState(prevState => ({
                ...prevState,
                activeModal: "addToCartModal",
                isShowModal: true,
                currentProductId: productId
            })
        )
    };

    clickFavoriteIcon = productId => {
        const isFavoriteProduct = localStorage.getItem(`${productId}Favorite`);

        if (isFavoriteProduct) {
            // if product already added to favorite list - remove product
            localStorage.removeItem(`${productId}Favorite`)
            const currentNumberFavoriteProducts = getItemFromLocalStorage("numberFavoriteProducts");
            localStorage.setItem("numberFavoriteProducts", currentNumberFavoriteProducts - 1);

            this.setState(prevState => ({
                ...prevState,
                numberFavoriteProducts: getItemFromLocalStorage("numberFavoriteProducts")
            }))
        } else {
            // added product to favorite list
            localStorage.setItem(`${productId}Favorite`, "true");
            const currentNumberFavoriteProducts = getItemFromLocalStorage("numberFavoriteProducts");
            setCuntNumberInLocalStorage("numberFavoriteProducts", currentNumberFavoriteProducts)

            this.setState(prevState => ({
                ...prevState,
                numberFavoriteProducts: getItemFromLocalStorage("numberFavoriteProducts")
            }))
        }
    }

    handleCloseModal = () => {
        this.setState(prevState => ({
            ...prevState,
            isShowModal: false
        }))
        //localStorage.clear()
    };

    handleAcceptAddToCart = () => {
        this.setState(prevState => ({
            ...prevState,
            isShowModal: false,
        }));
        localStorage.setItem(this.state.currentProductId, "true");
        const currentNumberProductsInCart = getItemFromLocalStorage("numberProductsInCart");
        setCuntNumberInLocalStorage("numberProductsInCart", currentNumberProductsInCart);

        this.setState(prevState => ({
            ...prevState,
            numberProductsInCart: getItemFromLocalStorage("numberProductsInCart")
        }))
    };

    render() {
        const { activeModal, isShowModal, numberFavoriteProducts, numberProductsInCart } = this.state;
        const { title, text, firstBtnText, secondBtnText,
            firstBtnTextColor, secondBtnTextColor, firstBtnBgColor } = this.state[activeModal]

        return (
            <div className='wrapper'>
                <Header numberFavoriteProducts={ numberFavoriteProducts } numberProductsInCart={ numberProductsInCart }/>
                <Shop
                    clickAddToCart={ this.clickAddToCart }
                    clickFavoriteIcon={ this.clickFavoriteIcon } />

                {
                    isShowModal && <Modal
                        title={ title }
                        text={ text }
                        handleCloseModal={ this.handleCloseModal }
                        actions={ <>
                            <Button
                                text={ firstBtnText }
                                onClick={ this.handleAcceptAddToCart }
                                textColorBtn={ firstBtnTextColor }
                                backgroundColor={ firstBtnBgColor } />
                            <Button
                                text={ secondBtnText }
                                onClick={ this.handleCloseModal }
                                textColorBtn={ secondBtnTextColor } />
                        </> } />
                }

            </div>
        )
    }

}

export default App;
