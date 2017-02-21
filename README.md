# Setup
Use the following commands in your vagrant development environment to get localhost:3000 up and running:
```bash
git clone *this repo*
cd *new directory*
npm install --no-bin-links (--no-bin-links for windows users only)
bower install
gulp
```

# Dependencies
- After running `npm install`, all gulp development packages will be installed.
- After running `bower install`, Jquery, semantic, hover, font awesome, and full page will be installed.

# Notes
- `dist/index.html` - this html file is served by default.
- `dist/data/` - all your media files (images, videos, GIFs etc.) go here.
- `src/sass` folder - all sass files here will be compiled to `dist/styles.css`.
- `src/js` folder - all javascript files here will be uglified and put in `dist/script.js`.

**Do not edit `styles.css` and `script.js` in the `dist` folder.** All things there are auto-generated and any changes you make there will get overwritten by Gulp.

# Deploy
Use the following commands to deploy to github pages:
```bash
git push origin --delete gh-pages
git subtree push --prefix dist origin gh-pages
```
- Then navigate to `nickproz.github.io/personal-site-new` (replace anything after the slash with the repo name) or `www.nickproz.com` if the domain is set up correctly.
- The gh-pages branch should be deleted every time before pushing new changes because changes occasionally are not reflected otherwise.