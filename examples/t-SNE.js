// if you don't specify a html file, the sniper will generate a div
var tsne = require("biojs-vis-tsne");

var opts = {path:"../data.csv", width:"700", height:"500", id:"mydiv"};
tsne.run(opts);

//tsne.setPerplexity(50);
