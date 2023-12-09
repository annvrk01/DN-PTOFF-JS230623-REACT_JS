import axios from "axios";
import { URL_SERVER } from "./constants";

class RequestBuilder{
  method;
  #url;
  #header;
  #body;
  #params;

  del
  
  /***
   * @returns {RequestBuilder}
   */
  static del(){
    let requestBuilder = new RequestBuilder();
    requestBuilder.method = "delete";
    return requestBuilder;
  }

  /***
   * @returns {RequestBuilder}
   */
  static put(){
    let requestBuilder = new RequestBuilder();
    requestBuilder.method = "put";
    return requestBuilder;
  }
  
  /***
   * @returns {RequestBuilder}
   */
  static get(){
    let requestBuilder = new RequestBuilder();
    requestBuilder.method = "get";
    return requestBuilder;
  }

  /***
   * @returns {RequestBuilder}
   */
  static post(){
    let requestBuilder = new RequestBuilder();
    requestBuilder.method = "post";
    return requestBuilder;
  }

  /***
   * @param url {string}
   * @returns {RequestBuilder}
   */
  url(url){
    if(!url.startsWith(URL_SERVER)){
      url = URL_SERVER + url;
    }
    this.#url = url;
    return this;
  }

  /***
   * 
   * @returns {RequestBuilder}
   */
  params(params){
    this.#params = params;
    return this;
  }

  /***
   * @returns {RequestBuilder}
   */
  header(header){
    this.#header = header;
    return this;
  }

  /***
   * @returns {RequestBuilder}
   */
  body(data){
    this.#body = data;
    return this;
  }

  /***
   * @param doSomething {Function}
   * @returns {RequestBuilder}
   */
  onSuccess(doSomething){
    this.callbackOnSuccess = doSomething || function () {};
    return this;
  }
  
  /***
   * @param doSomething {Function}
   * @returns {RequestBuilder}
   */
  onFailure(doSomething){
    this.callbackOnFailure = doSomething || function () {};
    return this;
  }

  send(){        
    let paramObj = {}

    if(this.#params){
      paramObj.params = this.#params;
    }
    if(this.#header){
      paramObj.header = this.#header;
    }

    if(this.method === "get"){
      //console.log("sending, params = " + JSON.stringify(this.#params) + ", body = " + JSON.stringify(this.#body));
      return axios.get(
        this.#url, 
        paramObj)
        .then( this.callbackOnSuccess )
        .catch( this.callbackOnFailure );
    }

    return axios[this.method](
      this.#url, 
      this.#body, 
        paramObj)
      .then( this.callbackOnSuccess )
      .catch( this.callbackOnFailure );
  }
}

export default RequestBuilder;
