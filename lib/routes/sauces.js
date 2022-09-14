const sauces = [
  { name: 'tabasco', heat: 'medium' },
  { name: 'aardvark', heat: 'hot' },
  { name: 'tapatio', heat: 'mild' },
];

export default {
  get(req, res) {
    res.write(JSON.stringify(sauces));
    res.end();
  },
  post(req, res) {
    sauces.push(req.body);
    res.statusCode = 200;
    res.end();
  },
};
