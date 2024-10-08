const router = require('express').Router();
const Book = require('../../models/Book');

// TODO finish the PUT route to UPDATE a book in the database with a matching book_id
router.get('/',(req, res) =>{
  const minPages = req.query.minPages;
  Book.findAll({
    where: {
      pages:{
        $get:minPages
      }
    }
  }) .them((bookData) =>res.json(bookData));
});


router.put('/:book_id', (req, res) => {
  Book.update({
    title:req.body.title,
    author: req.body.author ,
    isbn:req.body.isbn ,
    edition: req.body.edition ,
    pages: req.body.pages ,
    is_paperpack:req.body.is_paperback
  }, {
    where:{
      book_id: req.params.book_id
    }
  })
    .then((newBook) => res.status(203).json(newBook));
});

// TODO finish the DELETE route to DELETE a book in the database with a matching book_id
router.delete('/:book_id', (req, res) => {
  Book.destroy({
    where:{
      book_id: req.params.book_id
    }

  })
    .then((deleteBook) => res.status(204).json(deleteBook));

});

router.post('/seed', (req, res) => {
  Book.bulkCreate([
    {
      title: 'Make It Stick: The Science of Successful Learning',
      author: 'Peter Brown',
      isbn: '978-0674729018',
      pages: 336,
      edition: 1,
      is_paperback: false,
    },
    {
      title:
        'Essential Scrum: A Practical Guide to the Most Popular Agile Process',
      author: 'Kenneth Rubin',
      isbn: '978-0137043293',
      pages: 500,
      edition: 1,
      is_paperback: true,
    },
    {
      title:
        "White Fragility: Why It's So Hard for White People to Talk About Racism",
      author: 'Robin DiAngelo',
      isbn: '978-0807047415',
      pages: 192,
      edition: 2,
      is_paperback: true,
    },
    {
      title: 'The Pragmatic Programmer: Your Journey To Mastery',
      author: 'David Thomas',
      isbn: '978-0135957059',
      pages: 352,
      edition: 2,
      is_paperback: false,
    },
    {
      title: 'The Art of Computer Programming, Vol. 1: Fundamental Algorithms',
      author: 'Donald Knuth',
      isbn: '978-0201896831',
      pages: 672,
      edition: 3,
      is_paperback: false,
    },
    {
      title: 'Algorithms of Oppression: How Search Engines Reinforce Racism',
      author: 'Safiya Umoja Noble',
      isbn: '978-1479837243',
      pages: 256,
      edition: 1,
      is_paperback: true,
    },
  ]).then(() => {
    res.send('Seeding Success!');
  });
});

module.exports = router;
