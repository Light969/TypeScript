import Cart from './service/Cart';
import Book from './domain/Book';
import MusicAlbum from './domain/MusicAlbum';
import Movie from './domain/Movie';

const cart = new Cart();
console.log(cart.items);

cart.add(new Book(1001, 'War and Piece', 'Leo Tolstoy', 2000, 1225));
cart.add(new MusicAlbum(1008, 'Meteora', 'Linkin Park', 900));

console.log(cart.items);

cart.add(new Movie(1009, 'Мстители', 2012, 'США', 'Avengers Assemble!', 'Фантастика, Боевик, Фентази', '137 мин./02:17', 1500));

console.log(cart.items);
console.log(cart.totalCost());
console.log(cart.totalCostDiscout(5));
console.log(cart.deleteObjectById(1008));
console.log(cart.items);
