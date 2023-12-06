/* eslint-disable */
import RequestBuilder from "./AxiosWrapper";
import FakeData from "./FakeData";
import { AuthenResult, load, hash, AccountUtil, save, removeFromStorage, reloadPage } from "./utils";

import axios from "axios";

export default class ProductUtil {
    static DEFAULT_PAGE_SIZE = 5;
    
    static selectProduct(productId) {
        return FakeData.fakeProductDetailInfos[productId];
    }

    static selectCategory(categoryId) {
        let allCategs = FakeData.fakeProductCategories;
        let resultCategory = null;
        if (categoryId <= allCategs.length - 1) {
            resultCategory = allCategs[categoryId];
        }
        return resultCategory;
    }

    static doesProductBelongToCategoryHierachy(topCategory, product, maxDepth = 4) {
        let nextCateg = ProductUtil.selectCategory(product.categoryId);

        let currentDepthCount = 1;
        while (nextCateg != null) {
            if (nextCateg.id === topCategory.id) {

                return true;
            }
            nextCateg = ProductUtil.selectCategory(nextCateg.parent_category);
            currentDepthCount++;
            if (currentDepthCount > maxDepth) {
                break;
            }
        }

        return false;
    }

    static async #cacheProduct(product){
        save(key_currentProduct)
    }
    
    static async deleteProduct(params){
        let product = {};
        if(!isNaN(Number(params)))
            product.id = params;
        else{
            if(params.id === undefined){                
                product.id = params.id;
            }
        }
        
        let _response = null;
        await RequestBuilder.del().url("product/" + product.id)
        .onSuccess( 
            (response) => {
                console.log("response ", response);
                _response = response
            }
        )
        .send();        
        return _response;
    }

    static async updateProduct(product){
        let _response = null;
        await RequestBuilder.put().url("product/" + product.id)
        .body(product)
        .onSuccess( 
            (response) => {
                console.log("response ", response);
                _response = response
            }
        )
        .send();        
        return _response;
    }

    static async addProduct(product){
        let _response = null;
        await RequestBuilder.post().url("product/")
        .body(product)
        .onSuccess( 
            (response) => {
                console.log("response ", response);
                _response = response
            }
        )
        .send();        
        return _response;
    }

    /***
     * @deprecated
     * This async (like all async) returns a promise 
     * whose resolve param is 'products'
     * Call getAllProducts().then(products => {...}) to access the desired 'products' result
     * @returns {Promise} 
     */
    static async getAllProducts() {        
        // let products = load(key_productsDB);
        // if(!products || products.length === 0){
        //     this.#createFakeProductDB();
        //     products = load(key_productsDB);
        // }

        let products = null;
        await RequestBuilder.get().url("product/")
        .onSuccess( 
            (response) => {
                console.log("response ", response);   
                products = response.data.content;          
            }
        )
        .send();        
        return products;
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
    static async getProductPaging(key , page, size, sortOrder, sortBy){
        // key = key || "";
        // page = page || 1; 
        // size = size || this.DEFAULT_PAGE_SIZE; 
        sortOrder = sortOrder || "asc"; 
        sortBy = sortBy || "title_text";

        let result = null;
        await RequestBuilder.get().url("products/")
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
                console.log("getProductPaging failed, err = ", err);   
                result = err;     
            }
        )
        .send();        
        return result;  
    }
}
