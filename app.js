const express = require('express');
const app = express();
const port = 3000;
const router = express.Router();

router.get('/', (req, res) => res.send('Hello, World'));

router.route('/todos')
  .get((req, res) => {
    res.json([
      {
        "_id": "1",
        "text": "Put storage wax on Nordic Skis",
        "done": true
      },
      {
        "_id": "2",
        "text": "Wash Blur and install tire inserts",
        "done": false
      },
      {
        "_id": "3",
        "text": "Finish fundamental React",
        "done": true
      },
      {
        "_id": "4",
        "text": "Read The Road to React",
        "done": false
      },
      {
        "_id": "5",
        "text": "Complete level 8 code wars challengers",
        "done": false
      },
    ]);
  })

app.use('/', router);

app.listen(port, () => console.log(`Example app listening on port ${port}!`));
