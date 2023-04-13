const express = require('express');
const app = express();
const port = 3000;
const router = express.Router();

router.get('/', (req, res) => res.send('Hello, World'));

router.route('/todos')
  .get((req, res) => {
    res.json([
      {
        "_id": "a",
        "text": "Item 1",
        "done": false
      },
      {
        "_id": "b",
        "text": "Item 2",
        "done": false
      },
      {
        "_id": "c",
        "text": "Item 3",
        "done": true
      },
      {
        "_id": "d",
        "text": "Item 4",
        "done": false
      },
    ]);
  })

app.use('/', router);

app.listen(port, () => console.log(`Example app listening on port ${port}!`));
