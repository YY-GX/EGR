# EGR project page

Source for <https://yy-gx.github.io/EGR/>. Everything to do with the website
lives on this `gh-pages` branch: the built site sits at the branch root, which
is what GitHub Pages serves, and its source sits here in `website/`.

Built with [Astro](https://astro.build/) and Tailwind, from
[RomanHauksson/academic-project-astro-template](https://github.com/RomanHauksson/academic-project-astro-template).

## Editing

```bash
cd website
npm install
npm run dev      # local preview at http://localhost:4321/EGR/
```

Page content is a single file: `src/paper.mdx`. Components live in
`src/components/`, the colour and type tokens in `src/styles/global.css`.

## Publishing

```bash
cd website
./deploy.sh                  # builds and stages the site at the branch root
cd ..
git add -A && git commit -m "Update project page" && git push
```

`deploy.sh` clears the previously built files from the branch root, leaving
`website/`, `.git` and `.nojekyll` alone, then copies the fresh build over.
