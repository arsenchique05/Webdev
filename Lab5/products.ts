export interface Product{
  id: number;
  name: string;
  description: string;
  price: string;
  image: string;
  kaspiLink: string;
}

export const products: Product[]   = [
  {
    id: 1,
    name: 'iPhone 13',
    description: '128Gb Midnight черный',
    price: '289 716 ₸',
    image: 'https://resources.cdn-kaspi.kz/img/m/p/h32/h70/84378448199710.jpg?format=gallery-large',
    kaspiLink: 'https://kaspi.kz/shop/p/apple-iphone-13-128gb-midnight-chernyi-102298404/?c=750000000&utm_source=google&utm_medium=cpc&utm_campaign=shop_google_search_kaspi_brand_desktop&gclid=CjwKCAiA8sauBhB3EiwAruTRJtM1u-30KJH6PiKQx5tLnyUAkczJRQmD4z92UgN1FoC6fp0dG2BizRoCGAEQAvD_BwE'
  },
  {
    id: 2,
    name: 'Samsung Galaxy S21',
    description: '256GB Phantom Gray',
    price: '349 999 ₸',
    image: 'https://resources.cdn-kaspi.kz/img/m/p/h4e/h6b/63967892439070.jpg?format=gallery-large',
    kaspiLink: 'https://kaspi.kz/shop/p/samsung-galaxy-s21-8-gb-128-gb-seryi-100936560/?c=750000000&utm_source=google&utm_medium=cpc&utm_campaign=shop_google_search_kaspi_brand_desktop&gclid=CjwKCAiA8sauBhB3EiwAruTRJtM1u-30KJH6PiKQx5tLnyUAkczJRQmD4z92UgN1FoC6fp0dG2BizRoCGAEQAvD_BwE'
  },
  {
    id: 3,
    name: 'Google Pixel 6',
    description: '128GB Stormy Black',
    price: '259 999 ₸',
    image: 'https://resources.cdn-kaspi.kz/img/m/p/h8f/h77/64323163488286.jpg?format=gallery-medium',
    kaspiLink: 'https://kaspi.kz/shop/p/google-pixel-6-8-128gb-zelenyi-102811172/'
  },
  {
    id: 4,
    name: 'Xiaomi Redmi Note 10 Pro',
    description: '128GB Onyx Gray',
    price: '159 999 ₸',
    image: 'https://resources.cdn-kaspi.kz/img/m/p/hed/hde/64482874654750.jpg?format=gallery-medium',
    kaspiLink: 'https://kaspi.kz/shop/p/xiaomi-redmi-note-10-pro-8-gb-256-gb-sinii-107220924/?c=750000000&utm_source=google&utm_medium=cpc&utm_campaign=shop_google_search_smartphones_xiaomi_desktop&gclid=CjwKCAiA8sauBhB3EiwAruTRJtKjVFRw8PJwqh7OlMPwqY9uqaEyy4SPcif7Ii4qMdYrNfRtdnBBNBoCyYUQAvD_BwE'
  },
  {
    id: 5,
    name: 'OnePlus 9',
    description: '256GB Arctic Sky',
    price: '359 999 ₸',
    image: 'https://resources.cdn-kaspi.kz/img/m/p/h73/h0d/64108113100830.jpg?format=gallery-medium',
    kaspiLink: 'https://kaspi.kz/shop/p/oneplus-9-12-gb-256-gb-chernyi-101457999/?c=433220100'
  },
  {
    id: 6,
    name: 'Apple Watch Series 7',
    description: '45mm Blue Aluminum Case',
    price: '369 999 ₸',
    image: 'https://resources.cdn-kaspi.kz/img/m/p/ha9/h32/63902846746654.jpg?format=gallery-medium',
    kaspiLink: 'https://kaspi.kz/shop/p/apple-watch-series-7-45-mm-chernyi-102582811/?utm_source=google&utm_medium=cpc&utm_campaign=shop_google_search_gadgets_smart_watches_apple_desktop&gclid=CjwKCAiA8sauBhB3EiwAruTRJiFQNlamxPqRcPrMDhOXqpjqBJZ7JNmsHq7bwlasslXMQPnW3mfC1RoCwZwQAvD_BwE'
  },
  {
    id: 7,
    name: 'Sony PlayStation 5',
    description: 'PS5 Console',
    price: '699 999 ₸',
    image: 'https://resources.cdn-kaspi.kz/img/m/p/h02/h59/63948652249118.jpg?format=gallery-medium',
    kaspiLink: 'https://kaspi.kz/shop/p/sony-playstation-5-belyi-100746577/'
  },
  {
    id: 8,
    name: 'Samsung QLED Q80A',
    description: '65" 4K UHD Smart TV',
    price: '649 999 ₸',
    image: 'https://resources.cdn-kaspi.kz/img/m/p/he3/h4d/63992141119518.jpg?format=gallery-medium',
    kaspiLink: 'https://kaspi.kz/shop/p/samsung-qe55q80aauxce-140-sm-serebristyi-101831155/'
  },
  {
    id: 9,
    name: 'Bose QuietComfort 45',
    description: 'Wireless Noise Cancelling Headphones',
    price: '129 999 ₸',
    image: 'https://resources.cdn-kaspi.kz/img/m/p/hae/h01/64317739466782.jpg?format=gallery-medium',
    kaspiLink: 'https://kaspi.kz/shop/p/bose-quietcomfort-45-belyi-103563221/'
  },
  {
    id: 10,
    name: 'DJI Mini 2',
    description: 'Fly More Combo',
    price: '359 999 ₸',
    image: 'https://resources.cdn-kaspi.kz/img/m/p/hbe/ha8/63949232439326.jpg?format=gallery-medium',
    kaspiLink: 'https://kaspi.kz/shop/p/dji-dji-mini-2-seryi-100789415/'
  }
]

