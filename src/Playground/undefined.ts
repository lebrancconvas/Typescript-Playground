declare function forEach<T>(arr: T[], callback: (el: T) => undefined): void; 
let target: number[] = []
forEach([1,2,3,4,5], el => target.push(el))

