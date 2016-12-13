import expect from 'expect';

import { generateMessage } from './message';

describe('generateMessage', () => {
    it('should generate correct message object', () => {
        let from = 'Name';
        let text = 'Some text';
        let message = generateMessage(from, text);

        expect(message.createdAt).toBeA('number');
        expect(message).toInclude({ from, text });
    });
})