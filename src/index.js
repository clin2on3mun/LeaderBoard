import './styles.css';
import display from './modules/display.js';

const list = document.getElementById('list-of-score');
const persons = [{
  name: 'pat',
  score: 20,
},
{
  name: 'peter',
  score: 30,
},
{
  name: 'parrot',
  score: 20,
},
{
  name: 'Belt',
  score: 40,
},
{
  name: 'Bolton',
  score: 50,
},

];
display(persons, list);