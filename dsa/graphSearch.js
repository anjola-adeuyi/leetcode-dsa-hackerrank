// The Data
const airports = 'PHX BKK OKC JFK LAX MEX EZE HEL LOS LAP LIM'.split(' ');

console.log('airports:', airports);

const routes = [
  ['PKX', 'LAX'],
  ['PHX', 'JFK'],
  ['JFK', 'OKC'],
  ['JFK', 'HEL'],
  ['JFK', 'LOS'],
  ['MEX', 'LAX'],
  ['MEX', 'BKK'],
  ['MEX', 'LIM'],
  ['MEX', 'EZE'],
  ['LIM', 'BKK'],
];

// The Graph
const adjacencyList = {};
