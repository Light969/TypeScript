import Cart from '../service/Cart';
import Movie from '../domain/Movie';

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