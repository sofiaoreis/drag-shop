import {Page, NavController, NavParams} from 'ionic-angular';
import {ProductsService} from '../../providers/products-service/products-service'
import {CategoriesService} from '../../providers/categories-service/categories-service'
import {Product} from '../../models/product'
import {Category} from '../../models/category'
import {ProductsCategoryPipe} from '../../pipes/products/products-category'

@Page({
  templateUrl: 'build/pages/products-list/products-list.html',
  providers: [ProductsService, CategoriesService],
  pipes: [ProductsCategoryPipe]
})
export class ProductsList {
  categories: Category[];
  products: Product[];

  constructor(private nav: NavController, navParams: NavParams, private productsService:ProductsService, private categoriesService:CategoriesService) {
    productsService.getProducts().subscribe(
      products => {this.products = products;},
      err => {console.log(err);},
      () => {console.log("Finished fetching orders");}
    );

    categoriesService.getCategories().subscribe(
      categories => {this.categories = categories;},
      err => {console.log(err);},
      () => {console.log("Finished fetching orders");}
    );
  }
}
