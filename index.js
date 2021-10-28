const app = require('express')();
const dotenv = require('dotenv');
const routes = require('./routes');
dotenv.config();

routes(app)
app.set('view engine', 'ejs');
app.listen(process.env.PORT || 8000, () => console.log(`Server started at ${process.env.PORT}`));
