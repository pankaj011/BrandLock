const express = require("express");
const app = express();
require('dotenv').config()
let DB_CHOICE = require('./config/dbConfig').DB_CHOICE;
const routes = require('./routes/player.route');
//Documentation
const swaggerUi = require("swagger-ui-express");
const swaggerDocument = require("./Documentation/swagger.json");



app.use(express.json());
app.use(express.urlencoded({
  extended: false
}));

//doc
app.use('/api-docs', swaggerUi.serve);
app.get('/api-docs', swaggerUi.setup(swaggerDocument));



app.use('/brandlock', routes)
app.use("/health", (req, res) => {
  res.status(200).json({ status: "success", message: "Running successfully" })
});

const PORT = process.env.PORT || 3000 

let dbConn;
switch (DB_CHOICE) {
  case "MONGO":
    dbConn = require("./database/mongo/db.config");
    break;
  case "MYSQL":
    db = require("./database/mysql/db.config");
    dbConn = async() => db.sequelize.sync().then(() => {
      console.log('resync done..');
    });
    break;
  default:
    throw new Error("Database Type not defined");
  //   break;
}

dbConn() 
  .then(() => {
    app.listen(PORT, () => console.log(`App listening at port ${PORT}`));
  })
  .catch(console.error);