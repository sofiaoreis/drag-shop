import {Product} from '../../models/product'
import {Pipe, PipeTransform} from 'angular2/core'

@Pipe({
  name: 'productsCategory'
})
export class ProductsCategoryPipe implements PipeTransform {
  transform(allProducts, category) : Product[][] {
    if (!category || !allProducts || !allProducts.length) { return; }

    var filtProducts: Product[];
    var resProducts = [[]];
    var i = 0;

    filtProducts = allProducts.filter(product => product.category == category[0].name);

    while(filtProducts.length){
      resProducts[i] = filtProducts.splice(0,5);
      i++;
    }

    return resProducts;
  }
}
