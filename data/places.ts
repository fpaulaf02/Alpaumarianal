import { IPin, EPinType } from '~/lib/types';

export const PLACES: IPin[] = [
  {
    author: 'Luis Araújo',
    type: EPinType.Sticker,
    city: 'Madrid',
    country: 'Spain',
    coordinates: [40.4213, -3.7011],
    date: '2021-07-06',
    photo: '/photos/laraujo7/madrid.jpg'
  },
  {
    author: 'Luis Araújo',
    type: EPinType.Sticker,
    city: 'Barcelona',
    country: 'Spain',
    coordinates: [41.5888, 1.8422],
    date: '2021-07-11',
    photo: '/photos/laraujo7/barcelona.jpg'
  },
  {
    author: 'Nelson Estevão',
    type: EPinType.Sticker,
    city: 'Helsinki',
    country: 'Finland',
    coordinates: [60.1673826, 24.9551949],
    date: '2019-01-17',
    photo: '/photos/nelsonmestevao/helsinki.jpg'
  },
  {
    author: 'Nelson Estevão',
    type: EPinType.Special,
    city: 'Gualtar',
    country: 'Portugal',
    coordinates: [41.56157392223945, -8.397397824887639],
    date: '1995-03-29',
    photo: '/photos/nelsonmestevao/gualtar.jpg'
  },
  {
    author: 'Nelson Estevão',
    type: EPinType.Sticker,
    city: 'London',
    country: 'United Kingdom',
    coordinates: [51.5052606, -0.1126733],
    date: '2022-06-11',
    streetview:
      'https://www.google.com/maps/@51.5052606,-0.1126733,3a,60y,348.18h,84.44t/data=!3m6!1e1!3m4!1sG6kgwad45Rn0mxC1nzHK9g!2e0!7i16384!8i8192',
    photo: '/photos/nelsonmestevao/london.jpg'
  },
  {
    author: 'Nelson Estevão',
    type: EPinType.Sticker,
    city: 'Porto',
    country: 'Portugal',
    coordinates: [41.143507, -8.610342],
    date: '2022-08-04',
    photo: '/photos/nelsonmestevao/porto.jpg'
  },
  {
    author: 'Francisco Lira',
    type: EPinType.Sticker,
    city: 'Bern',
    country: 'Switzerland',
    coordinates: [46.933938, 7.445919],
    date: '2019-08-12',
    photo: '/photos/FranciscoLira/bern.jpg'
  },
  {
    author: 'Francisco Lira',
    type: EPinType.Sticker,
    city: 'Köniz',
    country: 'Switzerland',
    coordinates: [46.919683, 7.436997],
    date: '2019-08-01',
    photo: '/photos/FranciscoLira/koniz.jpg'
  },
  {
    author: 'Filipe Felício',
    type: EPinType.Sticker,
    city: 'Amesterdam',
    country: 'Netherlands',
    coordinates: [52.37548607644857, 4.896832185020905],
    date: '2022-02-23',
    photo: '/photos/feliciofilipe/amesterdam.jpg'
  },
  {
    author: 'Filipe Felício',
    type: EPinType.Sticker,
    city: 'London',
    country: 'United Kingdom',
    coordinates: [51.5019163, -0.1596214],
    date: '2022-06-10',
    photo: '/photos/feliciofilipe/london.jpg'
  },
  {
    author: ['Filipe Felício', 'Nelson Estevão'],
    type: EPinType.Picture,
    city: 'London',
    country: 'United Kingdom',
    coordinates: [51.486082974689104, -0.19962908422844805],
    date: '2022-06-09',
    photo: '/photos/feliciofilipe,nelsonmestevao/london.jpg'
  },
  {
    author: 'João Correia',
    type: EPinType.Sticker,
    city: 'EPFL, Lausanne',
    country: 'Switzerland',
    coordinates: [46.519164417441345, 6.563699123819026],
    date: '2022-06-06',
    photo: '/photos/jpcorreia99/lausanne.jpg'
  },
  {
    author: 'João Correia',
    type: EPinType.Sticker,
    city: 'Mt. Pilatus, Lucerne',
    country: 'Switzerland',
    coordinates: [46.97946423603654, 8.25622198625752],
    date: '2022-06-12',
    photo: '/photos/jpcorreia99/lucerne.jpg'
  },
  {
    author: 'João Correia',
    type: EPinType.Sticker,
    city: 'Dublin',
    country: 'Ireland',
    coordinates: [53.345589992774805, -6.27459360543026],
    date: '2022-07-17',
    photo: '/photos/jpcorreia99/dublin.jpg'
  },
  {
    author: 'Daniel Pereira',
    type: EPinType.Sticker,
    city: 'Santa Cruz',
    country: 'United States of America',
    coordinates: [36.955797, -121.972159],
    date: '2022-07-04',
    photo: '/photos/danielpereira/california.jpeg'
  },
  {
    author: 'Gerson Júnior',
    type: EPinType.Sticker,
    city: 'Roma',
    country: 'Italy',
    coordinates: [41.889048, 12.492502],
    date: '2022-07-11',
    photo: '/photos/GresosJ/Coliseu.jpg'
  },
  {
    author: 'Gerson Júnior',
    type: EPinType.Sticker,
    city: 'Napoli',
    country: 'Italy',
    coordinates: [40.840007, 14.251875],
    date: '2022-07-08',
    photo: '/photos/GresosJ/Napoles.jpg'
  },
  {
    author: 'Gerson Júnior',
    type: EPinType.Sticker,
    city: 'San Giorgio, Albanese',
    country: 'Italy',
    coordinates: [39.58367, 16.45292],
    date: '2022-07-04',
    photo: '/photos/GresosJ/SanGiorgio.jpg'
  },
  {
    author: 'Filipe Felício',
    type: EPinType.Sticker,
    city: 'Rijeka',
    country: 'Croatia',
    coordinates: [45.33902, 14.416862],
    date: '2022-07-07',
    photo: '/photos/feliciofilipe/rijeka.jpg'
  },
  {
    author: 'Filipe Felício',
    type: EPinType.Sticker,
    city: 'Zagreb',
    country: 'Croatia',
    coordinates: [45.813258549667765, 15.977218879620182],
    date: '2022-07-03',
    photo: '/photos/feliciofilipe/zagreb.jpg'
  },
  {
    author: ['Filipe Felício', 'Matilde Bravo'],
    type: EPinType.Sticker,
    city: 'Zagreb',
    country: 'Croatia',
    coordinates: [45.81383, 15.97732],
    date: '2022-07-03',
    photo: '/photos/feliciofilipe,matildeopbravo/zagreb2.jpg'
  },
  {
    author: ['Filipe Felício', 'Matilde Bravo'],
    type: EPinType.Sticker,
    city: 'Zagreb',
    country: 'Croatia',
    coordinates: [45.8149711819682, 15.97573733926956],
    date: '2022-07-02',
    photo: '/photos/feliciofilipe,matildeopbravo/zagreb1.jpg'
  },
  {
    author: ['Filipe Felício', 'Matilde Bravo', 'Mariana Rodrigues'],
    type: EPinType.Picture,
    city: 'Rijeka',
    country: 'Croatia',
    coordinates: [45.33264760505596, 14.455986441966521],
    date: '2022-07-04',
    photo: '/photos/feliciofilipe,matildeopbravo/rijeka.jpg'
  },
  {
    author: ['Filipe Felício', 'Matilde Bravo'],
    type: EPinType.Sticker,
    city: 'Trieste',
    country: 'Italy',
    coordinates: [45.65240883374153, 13.77165131984631],
    date: '2022-07-09',
    photo: '/photos/feliciofilipe,matildeopbravo/trieste.jpg'
  },
  {
    author: ['Filipe Felício', 'Matilde Bravo'],
    type: EPinType.Sticker,
    city: 'Pula',
    country: 'Croatia',
    coordinates: [44.867328742659424, 13.850810010552738],
    date: '2022-07-08',
    photo: '/photos/feliciofilipe,matildeopbravo/pula.jpg'
  },
  {
    author: ['Filipe Felício', 'Matilde Bravo', 'José Nuno Macedo'],
    type: EPinType.Picture,
    city: 'Ljubljana',
    country: 'Slovenia',
    coordinates: [46.05218163654292, 14.511751028966621],
    date: '2022-07-10',
    photo: '/photos/feliciofilipe,matildeopbravo/liubliana.jpg'
  },
  {
    author: 'Diogo Matos',
    type: EPinType.Sticker,
    city: 'Zambujeira do Mar',
    country: 'Portugal',
    coordinates: [37.525364, -8.786004],
    date: '2022-08-06',
    photo: '/photos/sassypocoyo/zambujeira1.jpg'
  },
  {
    author: 'Filipe Felício',
    type: EPinType.Picture,
    city: 'Barcelona',
    country: 'Spain',
    coordinates: [41.39437640777792, 2.1750122226070197],
    date: '2022-03-21',
    photo: '/photos/feliciofilipe/barcelona.jpg'
  },
  {
    author: 'Mário Rodrigues',
    type: EPinType.Sticker,
    city: 'Salamanca',
    country: 'Spain',
    coordinates: [40.9588846, -5.6693875],
    date: '2022-08-16',
    photo: '/photos/mariorodrigues10/salamanca.jpg'
  }
];
