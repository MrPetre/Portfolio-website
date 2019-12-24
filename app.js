let express = require("express");
let app = express();

//Look for statics first
app.use(express.static(path.join(__dirname, "public")));
//Return the index for any other GET request
app.get("/*", function(req, res) {
  res.sendFile("index.html", { root: path.join(__dirname, "public") });
});

app.listen(process.env.PORT || 3000, function() {
  console.log(
    "Express server listening on port %d in %s mode",
    this.address().port,
    app.settings.env
  );
});
