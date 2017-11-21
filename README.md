# Creative React Powered Innovoskies application

# Objective

- Creative
- Wordpress Backend
- Blogs
- Works
- Products
- Free Templates

# SVG Animations

- For `img src, object, embedded, background url & iframe` you can only designate animation if inside the SVG.
- But with _`inline SVG`_ you can readily play with the animation


# Reference Websites, Tutorials and Links

- [Webiste by Sarah Drasner](https://sarahdrasnerdesign.com/#about)
- [SVG Animation Course](https://www.lynda.com/Web-Development-tutorials/Paths-groups/604272/621322-4.html?srchtrk=index%3a5%0alinktypeid%3a2%0aq%3agsap%0apage%3a1%0as%3arelevance%0asa%3atrue%0aproducttypeid%3a2)
- [CodePen Anthony Dugois SVG Curves and Paths learning tool]()

# Libraries

```js
{
  "name": "react-innovoskies-gsap",
  "version": "0.1.0",
  "private": true,
  "dependencies": {
    "node-sass-chokidar": "0.0.3",
    "react": "^16.1.1",
    "react-bootstrap": "^0.31.5",
    "react-dom": "^16.1.1",
    "gsap": "^1.20.3"
  },
  "devDependencies": {
    "css-loader": "^0.28.7",
    "react-scripts": "1.0.17",
    "npm-run-all": "^4.1.1"
  },
  "scripts": {
    "build-css": "node-sass-chokidar --include-path ./src --include-path ./node_modules src/ -o src/",
    "watch-css": "npm run build-css && node-sass-chokidar --include-path ./src --include-path ./node_modules src/ -o src/ --watch --recursive",
    "start-js": "react-scripts start",
    "start": "npm-run-all -p watch-css start-js",
    "build": "npm run build-css && react-scripts build",
    "test": "react-scripts test --env=jsdom",
    "eject": "react-scripts eject"
  }
}
```

# About SVG's

|ViewBox|ViewPort|
|:------|-------:|
|ViewBox is the SVG container ie., within the confines of `<svg></svg>` tags | ViewPort is the medium, the container which you define in your HTML declaration|
|You have to set the ViewBox|You dont have to setup the ViewPort|


# SVG Path Data

|Path Letter | Path Meaning | Remarks|
|:-----------|:------------:|-------:|
|M,m|moveTo|start of the path or start of a new path
|L,l|lineTo|Capital `L` - absolute, Lowecase `l` - relative|
|H,h|horizontal line drawn from current position||
|V,v|Vertical line drawn from current position||
|Ending Path|||
|Z,z|joins the end of the path|end of the path|

# SVG Curve commands

|Curve Letter | Curve Meaning | Remarks|
|:------------|:-------------:|-------:|
|C,c|cubic-bezier||
|S,s|reflecting cubic-bezier||
|Q,q|quadratic bezier, where both sides share the same control point||
|T,t|command control point that's been reflected||
|A,a|elliptical arc||


# SVG Optimization Methods

- SVGOMG - Jake Arhicbald
- Peter Collingridge's SVG Editor
- SVGO / SVGO-GUI

