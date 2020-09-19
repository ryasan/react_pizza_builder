export const join = (arr: string[]) => arr.join(' ')

export const capitalize = (str: string) => {
    return str[0].toUpperCase() + str.slice(1)
}

export const classList = (classes: object) => {
    return Object.entries(classes)
        .filter(entry => entry[1])
        .map(entry => entry[0])
        .join(' ')
}

export const sleep = (ms = 0): Promise<any> => {
    return new Promise(resolve => setTimeout(resolve, ms))
}

export const formatPrice = (amount: number, currencyId?: string) => {
    const options = {
        style: 'currency',
        currency: currencyId || 'USD',
        minimumFractionDigits: 2
    }

    const formatter = new Intl.NumberFormat('en-US', options)
    return formatter.format(amount / 100)
}

// prettier-ignore
export function curry
<T extends any[], R> (fn: (...args: T) => R):
<T extends any[]>(...args: T) => any {
    const arity = fn.length

    return function $curry (...args) {
        if (args.length < arity) {
            return curry.bind(null, ...args)
        }

        return fn.call(null, ...args as any)
    }
}
