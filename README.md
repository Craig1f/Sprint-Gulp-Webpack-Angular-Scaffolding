# Sprint-Gulp-Webpack-Angular-Scaffolding

### Install
```bash
cd src/main/frontend
npm install
```
Extract the stuff you need from the pom.xml file to automatically run gulp whenever you build.
Add a copy of node to the directory referenced in the pom file.

### Other use
When you build within Eclipse, it does a production build. This is because I'm assuming that non-front-end users will be using this, and they will want a production build. Production build takes about 24s.

If you want a dev-build, use 
```bash
gulp watch
```
This watches any updates to any front-end files, and bundles them on the fly. This takes about 4s. Downside to this is that Eclipse doesn't know they've changed unless you go to the app.bundle.js tab. I haven't found a slick way of "informing" eclipse when a file has changed outside of eclipse so it can push those changes to the server. 
