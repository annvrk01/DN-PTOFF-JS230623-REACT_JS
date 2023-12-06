/* eslint-disable */
import RequestBuilder from "./AxiosWrapper";
import { key_currentUser, key_usersDB, URL_SERVER } from "./constants";
import FakeData from "./FakeData";
import { AuthenResult, load, hash, AccountUtil, save, removeFromStorage, reloadPage } from "./utils";

import axios from "axios";

export default class Authen {
    static DEFAULT_PAGE_SIZE = 5;
    static logOut(){
        if(hadLoggedIn() === false)
            return;

        removeFromStorage(key_currentUser);
        reloadPage();
    }

    static async #cacheUser(user){
        save(key_currentUser)
    }
    
    static async deleteUser(params){
        let user = {};
        if(!isNaN(Number(params)))
            user.id = params;
        else{
            if(params.id === undefined){                
                user.id = params.id;
            }
        }
        
        let _response = null;
        await RequestBuilder.del().url("user/" + user.id)
        .onSuccess( 
            (response) => {
                console.log("response ", response);
                _response = response
            }
        )
        .send();        
        return _response;
    }

    static async updateUser(user){
        let _response = null;
        await RequestBuilder.put().url("user/" + user.id)
        .body(user)
        .onSuccess( 
            (response) => {
                console.log("response ", response);
                _response = response
            }
        )
        .send();        
        return _response;
    }

    static async addUser(user){
        let _response = null;
        await RequestBuilder.post().url("user/")
        .body(user)
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
     * whose resolve param is 'users'
     * Call getAllUsers().then(users => {...}) to access the desired 'users' result
     * @returns {Promise} 
     */
    static async getAllUsers() {        
        // let users = load(key_usersDB);
        // if(!users || users.length === 0){
        //     this.#createFakeUserDB();
        //     users = load(key_usersDB);
        // }

        let users = null;
        await RequestBuilder.get().url("user/")
        .onSuccess( 
            (response) => {
                console.log("response ", response);   
                users = response.data.content;          
            }
        )
        .send();        
        return users;
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
    static async getUserPaging(key , page, size, sortOrder, sortBy){
        // key = key || "";
        // page = page || 1; 
        // size = size || this.DEFAULT_PAGE_SIZE; 
        sortOrder = sortOrder || "asc"; 
        sortBy = sortBy || "username";

        let result = null;
        await RequestBuilder.get().url("user/")
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
        .send();        
        return result;  
    }

    static getCurrentUser() {
        if(hadLoggedIn() === false)
            return null;

        let user = load(key_currentUser);
        return {
            email: user.email,
        }
    }

    static authenResult = new AuthenResult();

    /***
     * @param {string} inputEmail
     * @param {string} inputPassword
     * @returns {AuthenResult}
     */
    static async loginSubmit(inputEmail, inputPassword) {
        let authenResult = Authen.#validate(inputEmail, inputPassword);

        // if (authenResult.isInvalidInput()) {
        //     console.log("did NOT passed validation");
        //     return authenResult;
        // }

        console.log("validate success, checking in with DB...");

        await RequestBuilder.post().url("user/login").body({
            email: inputEmail,
            password: inputPassword
        })
        .onSuccess( (response) => {
            console.log("login success, ", response);
            Authen.#onLoginSuccess(response.data.user);
            authenResult.accountExisted = true;
        })
        .onFailure( (error) => {
            console.error(error);

            Authen.#onLoginFailure(inputEmail, inputPassword);
            authenResult.accountExisted = false;
        })
        .send();        
        return authenResult;
    }

    /***
     * @param {string} inputEmail
     * @param {string} inputPassword
     * @returns {AuthenResult}
     */
    static async signupSubmit(inputEmail, inputUsername, inputPassword) {
        let authenResult = Authen.#validate(inputEmail, inputPassword);

        if (authenResult.isInvalidInput()) {
            console.log("did NOT passed validation");
            return authenResult;
        }

        console.log("validate success, checking in with DB...");
        
        await RequestBuilder.post()
        .url("user/register")
        .body({
            email:inputEmail,
            username:inputUsername,
            password:inputPassword,
            role: "customer"
        })
        .onSuccess(
            (response) => {
                console.log("post register success: ", response);
                Authen.#onSignupSuccess(inputEmail, inputPassword);
                authenResult.accountExisted = false;
            }
        )
        .onFailure(
            (err) => {
                console.log("post register error: ", err);
                Authen.#onSignupFailure();
                authenResult.accountExisted = true;
            }
        )
        .send();
        return authenResult;
    };

    /***
     *
     * @param {string} inputEmail
     * @param {string} inputPassword
     * @returns {AuthenResult} validation result
     */
    static #validate(inputEmail, inputPassword) {
        return Authen.validateEmail(inputEmail) && Authen.validatePassword(inputPassword);
    }

    static validateEmail(inputEmail) {
        Authen.authenResult.invalidEmail = false;
        if (inputEmail === "") {
            console.info("empty email !");
            Authen.authenResult.invalidEmail = true;
        }
        else if (!inputEmail.toString().toLowerCase().match(
            /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|.(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/
        )) {
            Authen.authenResult.invalidEmail = true;
            console.info("email not matched with regex !");
        }
        else {
            console.info("VALID EMAIL, CONGRAT !!");
        }
        return Authen.authenResult;
    }

    static validatePassword(inputPassword) {
        Authen.authenResult.invalidPassword = false;
        if (inputPassword === "") {
            Authen.authenResult.invalidPassword = true;
            console.error("signup-failed cuz of empty password");
        }

        if (!inputPassword.toString().match(
            /^(?=.*[a-z])(?=.*[A-Z])(?=.*[0-9])(?=.*[!@#\$%\^&\*])(?=.{8,})/
        )) {
            Authen.authenResult.invalidPassword = true;
            console.error("signup-failed-invalid-password");
        }
        return Authen.authenResult;
    }

    static #onSignupFailure = () => {
        console.log('onSignupFailure');
    };

    static #onLoginSuccess = (user)=> {
        console.log('onLoginSuccess, user:', user);
        save(key_currentUser, user);
    }


    static #onLoginFailure = () => {
        console.log("onLoginFailure");
    };

    static #onSignupSuccess = (inputEmail, inputPassword) => {
        console.log("onSignupSuccess");

        let hashedInputPassword = hash(inputPassword);
        let newUser = AccountUtil.createUserFrom(inputEmail, hashedInputPassword);
        let DB_users = load(key_usersDB);

        DB_users.push(newUser);
        save(key_usersDB, DB_users);

        //login too...
        save(key_currentUser, newUser);
    };

    static #createFakeUserDB() {
        let DB_users = FakeData.fakeUserData;
        DB_users.forEach(element => {
            element.password = hash(element.password);
        });
        save(key_usersDB, DB_users);
    }
}

export function hadLoggedIn() {
    return load(key_currentUser) != null;
};

