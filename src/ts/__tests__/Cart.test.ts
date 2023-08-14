import Cart from '../service/Cart';
import Movie from '../domain/Movie';
import Book from '../domain/Book';
import MusicAlbum from '../domain/MusicAlbum';

test('new card should be empty', () => {
  const cart = new Cart();

  expect(cart.items.length).toBe(0);
});

test('Добавляем фильм в карзину', () => {
  const cart = new Cart();
  const movie = new Movie(1009, 'Мстители', 2012, 'США', 'Avengers Assemble!', 'Фантастика, Боевик, Фентази', '137 мин./02:17', 1500);
  cart.add(movie);

  expect(cart.items.length).toBe(1);
});

test('Сумарная стоимость без скидки', () => {
  const cart = new Cart();
  const book = new Book(1001, 'War and Piece', 'Leo Tolstoy', 2000, 1225); 
  const musicalbum = new MusicAlbum(1008, 'Meteora', 'Linkin Park', 900);
  const movie = new Movie(1009, 'Мстители', 2012, 'США', 'Avengers Assemble!', 'Фантастика, Боевик, Фентази', '137 мин./02:17', 1500);
  cart.add(book);
  cart.add(musicalbum);
  cart.add(movie);
  expect(cart.totalCost()).toBe(4400);
});

test('Сумарная стоимость со скидкой', () => {
  const cart = new Cart();
  const book = new Book(1001, 'War and Piece', 'Leo Tolstoy', 2000, 1225); 
  const musicalbum = new MusicAlbum(1008, 'Meteora', 'Linkin Park', 900);
  const movie = new Movie(1009, 'Мстители', 2012, 'США', 'Avengers Assemble!', 'Фантастика, Боевик, Фентази', '137 мин./02:17', 1500);
  cart.add(book);
  cart.add(musicalbum);
  cart.add(movie);
  expect(cart.totalCostDiscout(5)).toBe(4180);
});

test('Удаляем добавленный объект из карзины по id', () => {
  const cart = new Cart();
  const book = new Book(1001, 'War and Piece', 'Leo Tolstoy', 2000, 1225); 
  const musicalbum = new MusicAlbum(1008, 'Meteora', 'Linkin Park', 900);
  const movie = new Movie(1009, 'Мстители', 2012, 'США', 'Avengers Assemble!', 'Фантастика, Боевик, Фентази', '137 мин./02:17', 1500);
  cart.add(book);
  cart.add(musicalbum);
  cart.add(movie);
  cart.deleteObjectById(1008);
  expect(cart.items.length).toBe(2);
});