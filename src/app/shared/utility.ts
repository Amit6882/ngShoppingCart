import { SubCategory } from '../product.model';

export class Utility {
    static capitalizeFirstLetter(val: string) {
        return val.charAt(0).toUpperCase() + val.slice(1);
    }

    static totalCartItemsCount(products: SubCategory[]) {
        return products.reduce((acc, pr) => acc+= pr.num , 0);
    }
}