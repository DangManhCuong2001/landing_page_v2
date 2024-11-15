import { FormatNumberOptions } from 'src/global.config';
import { isNumeric } from '.';

/**
 
Compact large number
@param {*} n The number
@param {Number} fractionDigits Number of digits after the decimal point
*/
export function compactNumber(n: number | string, fractionDigits = 1) {
    if (!isNumeric(n)) {
        throw new Error('Must provide a correct number');
    }
    const suffixes = ['', 'K', 'M', 'B', 'T'];
    const suffixNum = Math.floor((('' + parseInt('' + n)).length - 1) / 3);

    let shortValue = (Number(n) / Math.pow(1000, suffixNum)).toPrecision(fractionDigits + 1);

    if (Number(shortValue) % 1 !== 0) {
        shortValue = Number(shortValue).toFixed(fractionDigits);
    }

    return Number(shortValue).toLocaleString() + suffixes[suffixNum];
}

export function formatNumber(number: any, options?: FormatNumberOptions): string | FormatNumberOptions['fallback'] {
    const { fallback = '0.00', fractionDigits, delimiter, padZero, prefix, suffix, onlyPositive } = options ?? {};

    if (!isNumeric(number)) {
        return fallback;
    }

    let num: number | string = parseFloat(number);
    if (onlyPositive && num < 0) {
        num = 0;
    }
    if (isNumeric(fractionDigits)) {
        num = num.toFixed(fractionDigits);
    }
    if (!padZero) {
        num = Number(num); // remove last zeros
    }
    return (prefix ?? '') + numberWithCommas(num, delimiter) + (suffix ?? '');
}

export function numberWithCommas(x: number | string, delimiter = ','): string {
    if (!isNumeric(x)) {
        throw new Error('Must provide a correct number');
    }
    const [naturalPart, decimalPart] = x.toString().split('.');
    let out = naturalPart.replace(/\B(?=(\d{3})+(?!\d))/g, delimiter);
    if (decimalPart) {
        out += '.' + decimalPart;
    }
    return out;
}
