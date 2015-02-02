# biojs-vis-tsne

[![NPM version](http://img.shields.io/npm/v/biojs-vis-tsne.svg)](https://www.npmjs.org/package/biojs-vis-tsne) 

> A t-SNE web visualisation for high-dimensional data

## Research Paper
The algorithm was originally described in this paper:

    L.J.P. van der Maaten and G.E. Hinton.
    Visualizing High-Dimensional Data Using t-SNE. Journal of Machine Learning Research
    9(Nov):2579-2605, 2008.

You can find the PDF [here](http://jmlr.csail.mit.edu/papers/volume9/vandermaaten08a/vandermaaten08a.pdf).

## Getting Started
Install the module with: `npm install biojs-vis-tsne`

```javascript
var tsne = require('biojs-vis-tsne');
tsne.run({
	path:"path/to/csv",
	width:900, //default
	height:600, //default
	id:"tsne" //default
})
tsne.setPerplexity(30); //Default 10
```

## Documentation

#### tsne.run(opts)

The 'run' method takes the id of a div and creates a t-SNE visualisation of csv data (given its path)

#### tsne.setPerplexity(int)

The 'setPerplexity' method takes an integer as input parameter


## Contributing

All contributions are welcome.

## Support

If you have any problem or suggestion please open an issue [here](https://github.com/daviddao/biojs-vis-tsne/issues).

## License 
This software is licensed under the Apache 2 license, quoted below.

Copyright (c) 2015, David

Licensed under the Apache License, Version 2.0 (the "License"); you may not
use this file except in compliance with the License. You may obtain a copy of
the License at

    http://www.apache.org/licenses/LICENSE-2.0

Unless required by applicable law or agreed to in writing, software
distributed under the License is distributed on an "AS IS" BASIS, WITHOUT
WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied. See the
License for the specific language governing permissions and limitations under
the License.
