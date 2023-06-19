interface pureObject {
  [key: string]: string | number | boolean | object;
}

export function flattenObject(obj: pureObject) {
  const result = {};
  function recurse(obj, currentKey) {
    for (let key in obj) {
      let newKey = currentKey ? currentKey + '.' + key : key;
      if (typeof obj[key] === 'object') {
        recurse(obj[key], newKey);
      } else {
        result[newKey] = obj[key];
      }
    }
  }
  recurse(obj, '');
  return result;
}
