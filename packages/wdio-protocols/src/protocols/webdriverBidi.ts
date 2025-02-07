export default {
    sendCommand: {
        socket: {
            command: 'send',
            description: 'Send socket commands via WebDriver Bidi',
            ref: 'https://github.com/w3c/webdriver-bidi',
            parameters: [
                {
                    name: 'params',
                    type: 'object',
                    description: 'socket payload',
                    required: true,
                },
            ],
            returns: {
                type: 'Object',
                name: 'response',
                description: 'WebDriver Bidi response',
            },
        },
    },
    sendAsyncCommand: {
        socket: {
            command: 'sendAsync',
            description: 'Send asynchronous socket commands via WebDriver Bidi',
            ref: 'https://github.com/w3c/webdriver-bidi',
            parameters: [
                {
                    name: 'params',
                    type: 'object',
                    description: 'socket payload',
                    required: true,
                },
            ],
        },
    },
}
