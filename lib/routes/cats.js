const cats = [
  { name: 'renly', type: 'mainecoon-ish' },
  { name: 'jackie legs', type: 'tabby' },
  { name: 'shadow', type: 'small fluff' },
];

export default {
  get(req, res) {
    res.write(JSON.stringify(cats));
    res.end();
  },
  post(req, res) {},
  put(req, res) {},
  delete(req, res) {},
};
