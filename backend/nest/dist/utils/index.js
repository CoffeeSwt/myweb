"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.flattenObject = void 0;
function flattenObject(obj) {
    const result = {};
    function recurse(obj, currentKey) {
        for (let key in obj) {
            let newKey = currentKey ? currentKey + '.' + key : key;
            if (typeof obj[key] === 'object') {
                recurse(obj[key], newKey);
            }
            else {
                result[newKey] = obj[key];
            }
        }
    }
    recurse(obj, '');
    return result;
}
exports.flattenObject = flattenObject;
//# sourceMappingURL=index.js.map