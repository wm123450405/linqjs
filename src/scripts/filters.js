Vue.filter('json', function (value) {
    let type = typeof value;
    if (type === 'undefined') {
        return 'undefined';
    } else {
        if (type === 'string' || type === 'number' || type === 'boolean') {
            return value;
        } else {
            let string = value.toString();
            if (string === '[object Object]') {
                return JSON.stringify(value);
            } else {
                return string;
            }
        }
    }
});