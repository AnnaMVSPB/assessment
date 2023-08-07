const router = require('express').Router();
const { Duck } = require('../../db/models');

router.get('/', async (req, res) => {
  try {
    const ducks = await Duck.findAll();
    res.json(ducks);
  } catch ({ message }) {
    res.json({ message });
  }
});

router.get('/:duckId', async (req, res) => {
  try {
    const duck = await Duck.findOne({
      where: { id: req.params.animalId },
    });
    res.json(duck);
  } catch ({ message }) {
    res.json({ message });
  }
});

router.post('/', async (req, res) => {
  try {
    const { name, img } = req.body;

    const newDuck = await Duck.create({
      name,
      img,
    });
    res.json(newDuck);
  } catch ({ message }) {
    res.json({ message });
  }
});

router.delete('/:duckId', async (req, res) => {
  try {
    const { duckId } = req.params;
    const result = await Duck.destroy({ where: { id: duckId } });
    if (result > 0) {
      res.json({ message: 'success' });
      return;
    }
    res.json({ message: 'error' });
  } catch ({ message }) {
    res.json({ message });
  }
});

router.put('/:duckId', async (req, res) => {
  try {
    const { duckId } = req.params;
    /* умеет крякать */
    const { canQuack } = req.body;

    const duck = await Duck.findOne({
      where: { id: duckId },
    });
    duck.canQuack = canQuack;
    await duck.save();
    res.json(duck);
  } catch ({ message }) {
    res.json(message);
  }
});

module.exports = router;
