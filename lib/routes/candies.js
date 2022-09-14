const candies = [
  { name: 'jolly ranchers', type: 'hard candy' },
  { name: 'tootsie pops', type: 'lollipop' },
  { name: 'kit kat', type: 'candy bar' },
];

export default {
  get(req, res) {
    res.write(JSON.stringify(candies));
    res.end();
  },
  post(req, res) {
    candies.push(req.body);
    res.statusCode = 200;
    res.end();
  },
};
