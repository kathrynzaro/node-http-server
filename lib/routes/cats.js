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
  post(req, res) {
    cats.push(req.body);
    res.statusCode = 200;
    res.end();
  },
  put(req, res) {
    cats.map((cat) => {
      cat['species'] = 'cat';
    });
    res.statusCode = 200;
    res.end();
  },
  delete(req, res) {
    cats.pop();
    res.statusCode = 204;
    res.end();
  },
};
