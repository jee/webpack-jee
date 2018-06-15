# webpack-jee
Webpack configuration demonstration.

#### Getting Started
Once the package is cloned down, `cd` into the cloned directory and kick things off by running:
```
npm install
```
All the needed dependencies will be installed.

#### There are two ways to build and view the simple demonstration
To build the bundle, run:
```
npm run webpack
```
Once the bundle is built, run:
```
open build/index.html
```

Alternatively, you can run the webpack-dev-server by running,
```
npm run start:dev
```
Once built, navigate your browser to `localhost:8080`

-----
Webpack configuration summary:
- [x] Has a single javascript file as the entrypoint into the application

- [x] Handles Javascript/ES6/React code with both .js and .jsx file extensions; should output a single ES5 .js bundle with a unique hash added to the filename

- [x] Handles SCSS code with .scss extensions; should output a single .css file with a unique hash added to the filename

- [x] Handles IMG file with .jpeg, .jpg, .png, and .gif extensions; should return a link referencing the file

- [x] Handles SVG file with .svg extension; return a base-64 data-encoded string if the file is < 1MB and a link to the file otherwise
