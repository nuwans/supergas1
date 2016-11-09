/* global webkit, Android */
const mobile = () => {
    const jsInterface = {};
    const actions = [
        'processQuickOrder',
        'sendState',
        'clearState',
        'hideTabs',
        'showTabs',
        'hideActionBar',
        'showActionBar',
        'backPress',
        'setPagingEnabled',
        'showToast',
        'closeQuickOrder',
        'hideKeyboard',
        'cancelProgressBarJSI',
        'logGa'
    ];
    const valueProviders = ['fetchState', 'getUserInfo'];

    if (typeof Android !== "undefined") {
        actions.forEach((action) => {
            if (Android[action]) {
                jsInterface[action] = (jsonString, ...args) => {
                    (jsonString !== undefined) ? Android[action](jsonString, ...args): Android[action]();
                };
            }
            else
            {
                jsInterface[action] = (jsonString) => {};
            }
        });
        valueProviders.forEach((valueProvider) => {
            if (Android[valueProvider]) {
                jsInterface[valueProvider] = (callbackFunction) => {
                    callbackFunction(Android[valueProvider]());
                };
            }
            else
            {
                jsInterface[valueProvider] = (callbackFunction) => {
                    callbackFunction("{}");
                };
            }
        });
    }
    else if (typeof webkit !== "undefined" && typeof webkit.messageHandlers !== "undefined" && typeof webkit.messageHandlers.iOS !== "undefined" && typeof webkit.messageHandlers.iOS.postMessage !== "undefined") {
        actions.forEach((action) => {
            jsInterface[action] = (jsonString) => {
                window.webkit.messageHandlers.iOS.postMessage(JSON.stringify({
                    'action': action,
                    'arguments': jsonString
                }));
            };
        });
        valueProviders.forEach((valueProvider) => {
            jsInterface[valueProvider] = (callbackFunction) => {
                jsInterface[valueProvider + 'sync'] = callbackFunction;
                window.webkit.messageHandlers.iOS.postMessage(JSON.stringify({
                    'action': valueProvider,
                    'callbackFunction': 'jsInterface.' + valueProvider + 'sync'
                }));
            };
        });

    }
    else {
        actions.forEach((action) => {
            jsInterface[action] = (jsonString) => {};
        });
        valueProviders.forEach((valueProvider) => {
            jsInterface[valueProvider] = (callbackFunction) => {
                callbackFunction("{}");
            };
        });
    }
    return jsInterface;
};
export default mobile;