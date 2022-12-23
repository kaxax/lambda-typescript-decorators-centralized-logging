import {LogDecorator} from '/opt/nodejs/example-layer'

export class ExampleLoggerLambda {

    constructor(event: APIGatewayEvent) {
    }

    @LogDecorator
    async doSomething() {
        // function execution ...
    }

}
