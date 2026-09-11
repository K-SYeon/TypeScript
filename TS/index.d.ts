type FirstItem<T> = T extends [] ? T[0] : any;
declare let age1: FirstItem<string[]>;
declare let age2: FirstItem<number>;
