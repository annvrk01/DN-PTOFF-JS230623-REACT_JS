/* eslint-disable */
import RequestBuilder from "./AxiosWrapper";
import FakeData from "./FakeData";
import { AuthenResult, load, hash, AccountUtil, save, removeFromStorage, reloadPage } from "./utils";

import axios from "axios";

export default class ProductUtil {
    static DEFAULT_PAGE_SIZE = 5;
    static _cachedProducts = null;
    static _cachedCategories = null;

    static getStaticImageUrl(imgName){
        return "http://localhost:8000/static/productImage/" + imgName;
    }

    static async getProduct(productId) {    
        if(isNaN(Number(productId))){
            console.log("expect productId to be a number, got ", productId);
            return null;
        }    
        let product = null;
        await RequestBuilder.get()
        .url("products/" + productId)
        .onSuccess(
            (response) => {
                console.log("response getProduct ", response);
                product = response.data.product;
            }
        )
        .send();
        
        if(product.imgs){
            product.imgs.forEach(
                img => {
                    let imgSrc = this.getStaticImageUrl(img.name);
                    img.src = imgSrc;
                }
            );
        }
        return product;
    }

    static async getSimilarProducts(originalProduct, rowIndex){
        if(!originalProduct){
            console.error("no originalProduct ", originalProduct );
            return;
        }
        let similarProducts = null;
        console.log("getSimilarProducts, originalProduct is ", originalProduct);
        await RequestBuilder.post().url("products/similar/")
            .body({
                product: originalProduct,
                rowIndex: rowIndex
            })
            .onSuccess(
                (response) => {
                    console.log("response getSimilarProducts ", response);
                    similarProducts = response.data.similarProducts;
                }
            )
            .send();
        return similarProducts;
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

    static async deleteProduct(params) {
        let product = {};
        if (!isNaN(Number(params)))
            product.id = params;
        else {
            if (params.id === undefined) {
                product.id = params.id;
            }
        }

        let _response = null;
        await RequestBuilder.del().url("products/" + product.id)
            .onSuccess(
                (response) => {
                    console.log("response delete product ", response);
                    _response = response
                }
            )
            .send();
        return _response;
    }

    static async updateProduct(product) {
        let _response = null;
        await RequestBuilder.put().url("products/" + product.id)
            .body(product)
            .onSuccess(
                (response) => {
                    console.log("response update product ", response);
                    _response = response
                }
            )
            .send();
        return _response;
    }

    static async getBaseCategory(){
        let allBaseCategs = null;
        await RequestBuilder.get()
            .url("products/base-category/")
            .onSuccess(
                (response) => {
                    console.log("response getBaseCategory ", response);
                    allBaseCategs = response.data.baseCategories;
                }
            )
            .send();
        return allBaseCategs;
    }

    static async getImages(product){
        let _response = null;
        await RequestBuilder.get().url("products/images/" + product.id)
            .body(product)
            .onSuccess(
                (response) => {
                    console.log("response get images ", response);
                    _response = response.data.imgs;
                }
            )
            .send();
        return _response;
    }

    static async addProductImg(product) {
        if (!product.imgs || product.imgs.length < 1) {
            console.log("missing imgs to send", product);
            return;
        }

        let _response = null;

        await RequestBuilder.post().url("products/images")
        .body({
            productId: product.id,
            images: product.imgs
        })
        .onSuccess( 
            (response) => {
                console.log("response upload images: ", response);
                _response = response
            }
        )
        .send(); 
        return;
        
        //TODO: ???
        
        let formData = new FormData();
        product.imgs.forEach(
            (img, idx) => {
                console.log("append img: ", img);
                formData.append("productImage", img);
                //formData.append("img-" + idx, img);
            }
        );

        console.log("sending addProductImg, formData = ", formData);
        let formdata = new FormData();
        formdata.append('productImage', product.imgs[0]);
    
        axios.post("http://localhost:8000/api/products/images", 
          formdata,
          { headers: { 'Content-Type': 'multipart/form-data' }}
        ).then( res => {
          console.log("upload img response ", res)
        }).catch(err => {
          console.log("error ", err)
        })
    }

    static async addProduct(product) {
        let _response = null;
        await RequestBuilder.post().url("products/")
            .body(product)
            .onSuccess(
                (response) => {
                    console.log("response addProduct: ", response);
                    _response = response;
                    this.addProductImg(response.data);
                }
            )
            .send();
        return _response;
    }

    static async cacheProducts() {
        if(!this._cachedProducts){
            let bodyData = await this.getProductPaging("", 1, 10000, 'asc', 'title_text');
            this._cachedProducts = bodyData.content;
        }
        console.log("this._cachedProducts = ", this._cachedProducts);
        return this._cachedProducts;
    }

    static async getCachedProducts(){
        let result;
        await this.cacheProducts()
        .then(
            () => {
                result = this._cachedProducts;
            }
        );
        return result;
    }
    
    static async getAllCategories(){        
        let allCategs = null;
        await RequestBuilder.get()
            .url("products/category/")
            .onSuccess(
                (response) => {
                    console.log("response getAllCategories ", response);
                    allCategs = response.data.categories;
                }
            )
            .send();
        this._cachedCategories = allCategs;    
        return allCategs;
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
    static async getProductPaging(key, page, size, sortOrder, sortBy) {
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
                    console.log("response getProductPaging ", response);
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
