import {ExampleLoggerLambda} from "./core/example-logger-lambda";


export const handler = async (event: APIGatewayEvent, context: Context) => {

    const exampleLoggerLambda = new ExampleLoggerLambda(event)

    await exampleLoggerLambda.doSomething()

}
