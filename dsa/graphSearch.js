// The Data
const airports = 'PHX BKK OKC JFK LAX MEX EZE HEL LOS LAP LIM'.split(' ');

console.log('airports:', airports);

const routes = [
  ['PHX', 'LAX'],
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
const adjacencyList = new Map();

console.log('adjacencyList:', adjacencyList);

// Add node
function addNode(airport) {
  adjacencyList.set(airport, []);
}

// Add edge, undirected
function addEdge(origin, destination) {
  adjacencyList.get(origin).push(destination);
  adjacencyList.get(destination).push(origin);
}

airports.forEach(addNode);
routes.forEach(([origin, destination]) => addEdge(origin, destination));
console.log('adjacencyList:', adjacencyList);

// BFS Breadth First Search
function bfs(start) {}
