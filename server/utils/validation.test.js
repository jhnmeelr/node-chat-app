import expect from 'expect';

import { isRealString } from './validation';

describe('isRealString', () => {
    it('should reject non-string values', () => {
        let res = isRealString(5);
        expect(res).toBe(false);
    });

    it('should reject string with only spaces', () => {
        let res = isRealString('   ');
        expect(res).toBe(false);
    });

    it('should allow string with non-space characters', () => {
        let res = isRealString('   String   ');
        expect(res).toBe(true);
    });
})