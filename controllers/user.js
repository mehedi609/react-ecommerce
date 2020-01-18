const sayHi = (req, res) => {
  res.json({ message: 'Hello World From Controller' });
};

module.exports = {
  sayHi
};
