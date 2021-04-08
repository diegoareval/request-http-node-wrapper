/**
 * Given a JSON object, create query string.
 *
 * Ex:
 *   input: { limit: 1, offset: 2 }
 *   output: 'limit=1&offset=2'
 *
 * @param {object} obj Key-value pairs for query string.
 *
 * @return {string} Query string.
 */
export const jsonToQueryString = (obj: { [key: string]: any } = {}): string => {
    return Object.keys(obj)
      .map(key => {
        return `${encodeURIComponent(key)}=${encodeURIComponent(obj[key])}`;
      })
      .join('&');
  };
  
  /**
   * Return string representation of given object.
   *
   * @param inputObj {any} Input object
   *
   * @return {string}
   */
  export const anyToString = function convertAnyToString(inputObj: any): string {
    if (inputObj === undefined) {
      return 'undefined';
    }
  
    if (typeof inputObj === 'string') {
      return inputObj;
    }
  
    return JSON.stringify(inputObj);
  };