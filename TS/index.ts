type FirstItem <T> = T extends any[] ? T[0] : any;

let age1 :FirstItem<string[]>;
let age2 :FirstItem<number>