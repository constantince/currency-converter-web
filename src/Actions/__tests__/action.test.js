import {changeBaseCurrency} from '../index';

describe('changeBaseCurrency', () => {
    it('change base currecny to home page', () => {
        const expected = {type: 'CHANGE_BASE_CURRENCY'};
        const actual = changeBaseCurrency();
        expect(expected).toEqual(actual);
    })
})