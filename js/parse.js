'use strict';
/**
 * The available digits for hexadecimal values.
 *
 * @type {string[]}
 */
const hexDigits = '0123456789abcdef'.split('');
/**
 * Parses the specified Unicode character found within the input string and calculate the hexadecimal representation of
 * its Unicode code point.
 *
 * @param {string} ch - the character to be parsed to calculate the hexadecimal segment of the Unicode escape
 * @return {string} The calculated Unicode code point in its hexadecimal representation.
 */
function parse(ch) {
  	const code = ch.codePointAt(0);
  	return toHexDigit((code >> 12) & 15) +
    	toHexDigit((code >> 8) & 15) +
    	toHexDigit((code >> 4) & 15) +
    	toHexDigit(code & 15);
}
/**
 * Converts the specified <code>nibble</code> into a hexadecimal digit.
 *
 * @param {number} nibble - the nibble to be converted
 * @return {string} The single-digit hexadecimal string.
 */
function toHexDigit(nibble) {
  return hexDigits[nibble & 15];
}
module.exports = parse;