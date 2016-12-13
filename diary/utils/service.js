/**
 * Created by liuqingling on 16/11/28.
 */
import axios from 'axios';

const debug = process.env.NODE_ENV !== 'production'
let myaxio={};
var token='';
if (debug) {
    myaxio = axios.create({
        baseURL: 'http://115.29.39.62/logger',
    });
} else {
    myaxio = axios.create({
        baseURL: 'http://115.29.39.62/logger',
    });
}

function GetQueryString(name)
{
    var reg = new RegExp("(^|\\?|&)"+ name +"=([^&]*)(\\s|&|$)", "i");
    if (reg.test(location.href)) return unescape(RegExp.$2.replace(/\+/g, " "));
    return "";
}
//全局请求配置
myaxio.interceptors.request.use(function (config) {
    // Do something before request is sent
    if(token){
        config.url+='&token='+token;
    }else{
        token = GetQueryString('token')
        config.url+='&token='+token;
    }
    return config;
}, function (error) {
    // Do something with request error
    return Promise.reject(error);
});
myaxio.interceptors.response.use(function (response) {
    // Do something with response data
    if (response.data.code == 0) {
        return response.data.data;
    } else {
        return response;
    }
}, function (error) {
    // Do something with response error
    return Promise.reject(error);
});

export default myaxio;
