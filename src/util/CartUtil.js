import { hadLoggedIn } from "./Authen";
import FakeData from "./FakeData";
import { key_cart } from "./constants";
import { getCurrentUser, AccountUtil, load, save, ArrayUtil } from "./utils";
import RequestBuilder from "./AxiosWrapper";

export default class CartUtil {

    static getLoggedInUserCart() {
        console.error("unimplemented")
    }
    static select(id) {
        console.error("unimplemented")
    }

    static createNewCart() {
        console.error("unimplemented")
    }

    static addToCart(cart, product) {
        console.error("unimplemented")
        return;
    }
    static findCartItemWithCart(cart, cartItem) {
        
        console.error("unimplemented")
    }

    static removeItemFromCart(cartItem, cartId) {
        console.error("unimplemented")
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
        // await RequestBuilder.post().url("carts/images")
        // .header({ headers: { 'Content-Type': 'multipart/form-data' }})
        // .body(formData)
        // .onSuccess( 
        //     (response) => {
        //         console.log("response upload images: ", response);
        //         _response = response
        //     }
        // )
        // .send(); 

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
