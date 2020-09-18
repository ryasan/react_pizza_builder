interface Price {
    [size: string]: {
        base: number
        toppings: number
    }
}

export const prices = <Price>{
    small: { base: 9.99, toppings: 0.69 },
    medium: { base: 12.99, toppings: 0.99 },
    large: { base: 16.99, toppings: 1.29 }
}
