import {Product} from '../../models/product'
import {Pipe, PipeTransform} from 'angular2/core'

@Pipe({
  name: 'productsCategory'
})
export class ProductsCategoryPipe implements PipeTransform {
  transform(category: string, allProducts: Product[]) : Product[] {
    if (!category || !allProducts || !allProducts.length) { return; }

    return allProducts.filter(product => product.category == category);
  }
}
