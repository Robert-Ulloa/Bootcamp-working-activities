const path = require('path');
const express = require('express');
const session = require('express-session');
const exphbs = require('express-handlebars');
// Initializes Sequelize with session store
const SequelizeStore = require('connect-session-sequelize')(session.Store);

const { strict } = require('assert');
const routes = require('./controllers');
const sequelize = require('./config/connection');
const helpers = require('./utils/helpers');

const app = express();
const PORT = process.env.PORT || 3001;

// Sets up session and connect to our Sequelize db
const sess = {
  secret: 'Super secret secret',
  // The cookie object contains settings for the session cookie.
  cookie: {
    // The maxAge attribute sets the duration (in milliseconds) for which the session cookie will remain valid.
    // In this case, it's set to 1 hour (60 minutes * 60 seconds * 1000 milliseconds).
    maxAge: 60 * 60 * 1000,
    // The httpOnly attribute ensures that the cookie is only accessible via HTTP(S) and not through client-side scripts.
    // This helps mitigate the risk of cross-site scripting (XSS) attacks.
    httpOnly: true,
    // The secure attribute ensures that the cookie is only sent over HTTPS connections.
    // This is set to false, meaning the cookie can be sent over both HTTP and HTTPS, which is typically used in development.
    // In production, it's advisable to set this to true to ensure cookie security.
    secure: false,
    // The sameSite attribute controls whether or not the cookie should be sent with cross-site requests.
    // The 'strict' value means the cookie is only sent in first-party contexts, adding a layer of CSRF protection.
    sameSite: 'strict',
  },
  resave: false, // Prevents session from being saved back to the store if it wasn't modified during the request.
  saveUninitialized: true, // Forces a session that is new but unmodified to be saved to the store.
  // Sets up session store using Sequelize to persist session data in the database.
  store: new SequelizeStore({
    db: sequelize,
  }),
};


app.use(session(sess));

const hbs = exphbs.create({ helpers });

app.engine('handlebars', hbs.engine);
app.set('view engine', 'handlebars');

app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(express.static(path.join(__dirname, 'public')));

app.use(routes);

sequelize.sync({ force: false }).then(() => {
  app.listen(PORT, () =>
    console.log(
      `\nServer running on port ${PORT}. Visit http://localhost:${PORT} and create an account!`
    )
  );
});
