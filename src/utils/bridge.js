(function(root) {
    var ua = window.navigator.userAgent;
    //桥接器的命名空间
    var ns = {
        _initialized: false,
        // 探测操作系统浏览器
        ios: (/iPhone|iPad|iPod/i).test(ua),
        android: (/Android/i).test(ua),
        version:"0.0.2",
        config:function (obj) {
            var bridge = root.WebViewJavascriptBridge;
            var sendObj = {
                function:'permissionVerify',
                parameters:obj
            };
            bridge.send(JSON.stringify(sendObj), function (responseData) {

            });
        },
        //下面bridge中的各项请求参数中如有callback,需要通过此函数先行注册才能生效.
        register:function (obj) {
            var bridge = root.WebViewJavascriptBridge;
            if(typeof  obj === 'object' && ns._initialized) {
                for(var key in obj) {
                    if(typeof obj[key] === 'function') {
                        bridge.registerHandler(key, obj[key]);
                    } else {
                        alert('注册的必须为函数');
                    }

                }
            } else {
                alert('请检查参数是否正确且是否已初始化')
            }
        },
        // 由于桥的初始化需要时间，不知道是否已经ok，这适用于在开始就要执行的bridge函数
        // 桥接器的ready函数，只在初始化的时候才调用，先把回调函数都追加到一个列表中
        ready: function(callback) {
            if (callback) {
                if (ns._initialized) {
                    // 立即执行
                    callback();
                } else {
                    // 延迟执行添加到缓存队列中
                    ns.readycallback.push(callback);
                }
            }
        },
        readycallback:[]
    };

    // 构造一个回调函数
    var wrapMethod = function(data){
        // 第一个参数为原生功能调用完成的callback，经常用
        // 第二个参数为原生功能在使用过程中需要调用的回调
        var ret = function(callback, parameters) {
            var bridge = root.WebViewJavascriptBridge;
            if (ns._initialized) {
                if(!callback) {
                    // the default callback to fullfill bridge's requirement
                    callback = function(responseData){ };
                }
                if(typeof callback === 'object') {
                    parameters = callback;
                    callback = function (responseData) {};
                }
                // 检查额外的参数，并且合并
                if (parameters && typeof(parameters) === 'object') {
                    if (data.parameters) {
                        // 合并参数
                        for( var key in parameters) {
                            data.parameters[key] = parameters[key];
                        }
                    } else {
                        data.parameters = parameters;
                    }
                } else {

                }
                bridge.send(JSON.stringify(data), function (responseData) {
                    //转换为js对象
                    callback(JSON.parse(responseData));
                });
            } else {
                ns.readycallback.push({fn:ret, args:arguments});
                console.log("js bridge has not been initialized yet.");
            }
        };
        return ret;
    };
    // generate function in the namespace
    var generator = function(ns) {
        // 定义桥调用协议
        var methods = {
            //native客户端接口
            client:{
                //隐藏头部导航
                "hiddenMenu" : {
                    function: 'hiddenMenu'
                },
                //关闭webview
                "closePage": {
                    function: 'closePage'
                },
                //设置企业空间标题
                "setHeader": {
                    function: 'navRightItemList'
                },
                //扫码一次
                "scanQRCode": {
                    function: 'scanQRCode',
                    parameters: {
                        type: 0,
                        callback: 'scanQRCodeCallback'
                    }
                },
                //连续扫码
                "scanQRCodeMore": {
                    function: 'scanQRCode',
                    parameters: {
                        type: 1,
                        callback: 'scanQRCodeCallback'
                    }
                },
                //打开新的窗口
                "openWindow": {
                    function:'openWindow'
                },
                "selectDate":{
                    function:'selectDate'
                },
                "selectList":{
                    function:'selectList'
                },
                "selectAttachment":{
                    function:'selectAttachment'
                },
                "selectCity":{
                    function:'selectCity'
                },
                "selectMap":{
                    function:'selectMap'
                },
                "copyText":{
                    function:'copyText'
                },
                "configNavigationBar":{
                    function:'configNavigationBar'
                },
                "share":{
                    function:'share'
                },
                "viewOrDeleteImage":{
                    function:'viewOrDeleteImage'
                },
                "viewImage":{
                    function:'viewImage'
                },
                "previewFile":{
                    function:'previewFile'
                },
                "getLocation":{
                    function:'getLocation'
                },
                "vibrate":{
                    function:'vibrate'
                },
                "getShaking":{
                    function:'getShaking'

                },
                "getStepCount":{
                    function:'getStepCount'

                },
                "getScreenshot":{
                    function:'getScreenshot'

                },
                "configNavBar":{
                    function:'configNavBar'

                },
                "payResult":{
                    function:'payResult'

                },
                "getStepServiceStatus":{

                },
                "stopOrStartStepService":{
                    function:'stopOrStartStepService'

                }


            },
            //企业相关信息接口
            enterprise:{
                "openApp":{
                    function:'openAPP'
                },
                "selectContacts":{
                    function:'selectContacts'
                },
                "callUer":{
                    function:'callUer'
                },
                "bindPhone":{
                    function:'bindPhone'
                },
                "feedReply":{
                    function:'feedReply'
                },
                "sendMemail":{
                    function:'sendMemail'
                },
                "sendMessage":{
                    function:'sendMessage'
                },
                "callUsers":{
                    function:'callUsers'
                },
                "selectGroup":{
                    function:'selectGroup'
                },
                "processAt":{
                    function:'processAt'
                },
                "viewUser":{
                    function:'viewUser'
                },
                "openChatWindow":{
                    function:'openChatWindow'
                },
                "createFeed":{
                    function:'createFeed'
                },
                "viewTaskLog":{
                    function:'viewTaskLog'
                },
                "viewTaskUser":{
                    function:'viewTaskUser'
                },
                "createOredit":{
                    function:'createOredit'
                },
                "taskComment":{
                    function:'taskComment'
                },
                "feedDataUpdate":{
                    function:'feedDataUpdate'
                }
            }
        };
        // 根据方法定义生成方法

        for (var category in methods) {
            ns[category] = {};
            for (var method in methods[category]) {
                var data = methods[category][method];
                ns[category][method] = wrapMethod(data);

            }

        }


        // other special method
    };
    //生成方法对象
    generator(ns);
    // 初始化函数
    var connectWebViewJavascriptBridge = function(callback) {
        if (window.WebViewJavascriptBridge) {
            callback(WebViewJavascriptBridge);
        } else {
            document.addEventListener('WebViewJavascriptBridgeReady', function() {
                callback(WebViewJavascriptBridge);
            }, false);
        }
    };
    // 初始化JS Bridge
    connectWebViewJavascriptBridge(function(bridge){
        try{
            bridge.init(function(message, responseCallback) {});
            // 确保桥接器绑定到window对象 //这段代码费的
            if(!window.WebViewJavascriptBridge) {
                window.WebViewJavascriptBridge = bridge;
            }
            // 如果有延迟执行回调的情况，执行它
            ns._initialized = true; // 标识为已经初始化
            // 生成函数
            //generator(ns, bridge);

            if(ns.readycallback.length) {
                ns.readycallback.forEach(function (callbackObj) {
                    if(typeof callbackObj === 'object') {
                        var args = callbackObj.args;
                        var fn = callbackObj.fn;
                        switch (args.length) {
                            case 0:
                                fn();
                                break;
                            case 1:
                                fn(args[0]);
                                break;
                            case 2:
                                fn(args[0], args[1]);
                                break;
                            default:
                                fn(args[0], args[1], args[2]);
                        }
                    } else if(typeof callbackObj === 'function') {
                        callbackObj();

                    } else {
                        alert('参数错误!');
                    }

                });
                ns.readycallback = [];
            }


        } catch (e) {
            alert('错误信息:' + e);
        }

    });
    window.yyesn = root.yyesn = ns;
    // 绑定到全局对象上
    // 不推荐使用模块加载器加载使用,jsbridge需要在页面开始时初始化,然后即可调用

    if(typeof define === 'function' && (define.amd || define.cmd)) {
        define(function () {
            return ns;
        })
    } else if(typeof module === 'object' && typeof module.exports === 'object') {
        module.exports = ns;
    }
}(window));
