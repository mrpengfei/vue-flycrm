export default {
    setUrlPara: function (url, params) {
        var paraUrl = '';
        Object.keys(params).forEach(function (value, key, array) {
            if (!params[value]) {
                return true;
            }
            if (paraUrl.length > 0) {
                paraUrl += '&';
            }
            paraUrl += `${value}=${params[value]}`;
        });
        if (paraUrl.length <= 0) {
            return url;
        }
        return url += '?' + paraUrl;
    }
}