import expect from 'expect';

import { generateMessage, generateLocationMessage } from './message';

describe('generateMessage', () => {
    it('should generate correct message object', () => {
        let from = 'Name';
        let text = 'Some text';
        let message = generateMessage(from, text);

        expect(message.createdAt).toBeA('number');
        expect(message).toInclude({ from, text });
    });
})

describe('generateLocationMessage', () => {
    it('should generate correct location object', () => {
        let from = 'Name';
        let latitude = '1';
        let longitude = '2';
        let url = 'https://www.google.com/maps?q=1,2'
        let message = generateLocationMessage(from, latitude, longitude);

        expect(message.createdAt).toBeA('number');
        expect(message).toInclude({ from, url });
    });
})