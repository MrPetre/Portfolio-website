let express = require("express");
let app = express();

app.use(express.static(__dirname + "/public"));

app.listen(process.env.PORT || 3000, function() {
  console.log(
    "Express server listening on port %d in %s mode",
    this.address().port,
    app.settings.env
  );
});
