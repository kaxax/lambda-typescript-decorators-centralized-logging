import {LogDecorator} from '/opt/nodejs/library-utils'

export class ExampleLoggerLambda {

    constructor(event: APIGatewayEvent) {
    }

    @LogDecorator
    async doSomething() {
        // function execution ...
    }

}
