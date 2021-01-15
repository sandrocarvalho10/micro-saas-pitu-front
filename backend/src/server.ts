import app from './app';

import database from './database';

database.sync({
  // force: true
})
console.log("Database running at 3306");

app.listen(process.env.PORT || 3001);
console.log('Server running at port 3001')