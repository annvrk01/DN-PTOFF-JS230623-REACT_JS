import { hadLoggedIn } from "./Authen";
import FakeData from "./FakeData";
import { URL_SERVER, key_cart, key_currentUser } from "./constants";
import { getCurrentUser, AccountUtil, load, save, ArrayUtil } from "./utils";
import RequestBuilder from "./AxiosWrapper";
import axios from "axios";

export default class CartUtil {
    static isCartValid(cart){
        return cart 
        && cart.productids 
        && cart.productids.length > 0;
    }

    static async getLoggedInUserCart() {
        let user = load(key_currentUser);
        if (!user) {
            console.error("Found none logged in !", user)
            return null;
        }
        return this.getCartByUserId(user.id);
    }

    static async getCartByUserId(id) {
        let cart = null;
        await RequestBuilder.get().url("carts/userId/" + id)
            .onSuccess(
                (response) => {
                    console.log("response getCartByUserId: ", response);
                    cart = response.data.cart;
                    if(cart instanceof Array){
                        cart = cart[0];
                    }
                }
            )
            .send();
        return cart;
    }

    static async createNewCart(products) {
        let user = load(key_currentUser);
        if (!user) {
            console.error("Found none logged in !", user)
            return null;
        }
        console.log("Adding new cart for current user ", user, " products: ", products);
        let responseData = null;

        let product = (products instanceof Array) ? products[0] : products;
        await axios.post(URL_SERVER + "carts/userId/" + user.id, {            
            product: {id: product.id}
        })
        .then(
            res => {                
                console.log("response addToCart: ", response);
                responseData = response.data;
            }
        );
        return responseData;
    }

    static async addToCart(cart, product) {
        if (!cart || isNaN(Number(cart.id))) {
            console.warn("No cart found for this user yet, adding new cart");
            return this.createNewCart([product]);
        }
        
        let responseData = null;
        await RequestBuilder.post()
            .url("carts/cart-item/" + cart.id)
            .body({ 
                product: product
             })
            .onSuccess(
                (response) => {
                    console.log("response addToCart: ", response);
                    responseData = response.data;
                }
            )
            .send();
        return responseData;
    }

    static findCartItemWithCart(cart, cartItem) {

        console.error("unimplemented")
    }

    static async removeItemFromCart(product, cart) {     
        let body = { 
            productId: product.id,
            cartId: cart.id
        }   
        console.log("removeItemFromCart ", product, cart, " body: ", body);

        await RequestBuilder.put().url("carts/userId/" + 1)
        .body(body)
        .onSuccess(
            (response) => {
                console.log("response getCartByUserId: ", response);
                cart = response.data.cart;
                if(cart instanceof Array){
                    cart = cart[0];
                }
            }
        )
        .send();
        return cart;
    }


    static async deleteCart(params) {
        let cart = {};
        if (!isNaN(Number(params)))
            cart.id = params;
        else {
            if (params.id === undefined) {
                cart.id = params.id;
            }
        }

        let _response = null;
        await RequestBuilder.del().url("carts/" + cart.id)
            .onSuccess(
                (response) => {
                    console.log("response ", response);
                    _response = response
                }
            )
            .send();
        return _response;
    }

    static async updateCart(cart) {
        let _response = null;
        await RequestBuilder.put().url("carts/" + cart.id)
            .body(cart)
            .onSuccess(
                (response) => {
                    console.log("response ", response);
                    _response = response
                }
            )
            .send();
        return _response;
    }

    static async addCartImg(cart) {
        if (!cart.imgs || cart.imgs.length < 1) {
            console.log("missing imgs to send", cart);
            return;
        }

        let _response = null;
        let formData = new FormData();
        cart.imgs.forEach(
            (img, idx) => {
                console.log("append img: ", img);
                formData.append("cartImage", img);
                //formData.append("img-" + idx, img);
            }
        );

        console.log("sending addCartImg, formData = ", formData);

        let fd = new FormData();
        fd.append('cartImage', cart.imgs[0]);
        console.log('fd', fd);
        axios({
            method: 'post',
            url: 'http://localhost:8000/api/carts/images',
            data: fd,
        })
            .then((response) => {
                if (response.data == 'Success') {
                    alert('Test has been Added..!!');
                }
                else {
                    alert('Something went wrong');
                    this.setState({ category: '' });
                }
                // this.setState({success:'Alert: '+response.data});
            })
            .catch((e) => {
                console.error(e);
                this.setState({ success: 'Alert: Something went wrong' });
            });
    }

    static async addCart(cart) {
        let _response = null;
        await RequestBuilder.post().url("carts/")
            .body(cart)
            .onSuccess(
                (response) => {
                    console.log("response addCart: ", response);
                    _response = response;
                    this.addCartImg(cart);
                }
            )
            .send();
        return _response;
    }

    /***
     * @deprecated
     * This async (like all async) returns a promise 
     * whose resolve param is 'carts'
     * Call getAllCarts().then(carts => {...}) to access the desired 'carts' result
     * @returns {Promise} 
     */
    static async getAllCarts() {
        // let carts = load(key_cartsDB);
        // if(!carts || carts.length === 0){
        //     this.#createFakeCartDB();
        //     carts = load(key_cartsDB);
        // }

        let carts = null;
        await RequestBuilder.get().url("carts/")
            .onSuccess(
                (response) => {
                    console.log("response ", response);
                    carts = response.data.content;
                }
            )
            .send();
        return carts;
    }

    /**
     * 
     * @param {string} key 
     * @param {number} page 
     * @param {number} size 
     * @param {string} sortOrder in ['asc', 'des']
     * @param {string} sortBy 
     * @returns {Promise}
     */
    static async getCartPaging(key, page, size, sortOrder, sortBy) {
        // key = key || "";
        // page = page || 1; 
        // size = size || this.DEFAULT_PAGE_SIZE; 
        sortOrder = sortOrder || "asc";
        sortBy = sortBy || "title_text";

        let result = null;
        await RequestBuilder.get().url("carts/")
            .params({
                key: key || "",
                page: page || 1,
                size: size || this.DEFAULT_PAGE_SIZE,
                sort: sortOrder + "," + sortBy
            })
            .onSuccess(
                (response) => {
                    console.log("response ", response);
                    result = response.data;
                }
            )
            .onFailure(
                (err) => {
                    console.log("getCartPaging failed, err = ", err);
                    result = err;
                }
            )
            .send();
        return result;
    }
}
