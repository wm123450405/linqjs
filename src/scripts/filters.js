Vue.filter('json', function (value, ignore = false) {
    let type = typeof value;
    if (type === 'undefined') {
        return ignore ? '' : 'undefined';
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