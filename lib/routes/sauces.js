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
};
