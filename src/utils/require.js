import Axios from "axios";
import Vue from "vue";
import router from "../router";
const host = "http://192.168.10.175/h5";
const serve = Axios.create({
  baseURL: '',
//   baseURL: host,
//   timeout: 10000
});
const request = (api, method = "post") => {
    let uri = api;
    return serve({
      url: uri,
      method: method,
    });
  };
  export default request;