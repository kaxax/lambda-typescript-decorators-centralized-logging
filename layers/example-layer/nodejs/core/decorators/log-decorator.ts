export function LogDecorator(target: any, propertyKey: string, descriptor: PropertyDescriptor) {

    const originalMethod = descriptor.value

    descriptor.value = async function (...args: any[]) {

        console.log(`${propertyKey} function invoked by params:`, args)

        try {
            const result = await originalMethod.apply(this, args)
            console.log(`${propertyKey} returned result :`, result)
            return result
        } catch (error) {
            console.log(`Error returned from ${propertyKey}:`, error)
            // Send error data to different logger services,
            // such as Elasticsearch or New Relic
            throw error
        }
    }

    return descriptor

}
