const express = require('express')
const server = express()
const fs = require('fs')
const path = require('path')
const minify = require('html-minifier').minify

const bundle =  require('./dist/server.bundle.js')
// const { context } = require('./webpack.server.config.js')

const renderer = require('vue-server-renderer').createRenderer({
  template: fs.readFileSync('./index.html', 'utf-8')
})

server.use('/dist', express.static(path.join(__dirname, './dist')))

server.get('*', (req, res) => {
  bundle.default({ url: req.url }).then(({app, store}) => {
    renderer.renderToString(app, { store }, function (err, html) {
      if (err) {
        console.log(err)

        if (err.code === 404) {
          res.status(404).end('Page not found')
        } else {
          res.status(500).end('Internal Server Error')
        }
      } else {
        res.send(minify(`
          <!doctype html>
          <html lang="tr">
          <head>
            <title>${store.title}</title>

            <meta charset="UTF-8" />
            <meta name="viewport" content="width=device-width, initial-scale=1.0" />
            ${store.metas}
          </head>
          <body>
            ${html}

            <script src="dist/build.js"></script>
            <!-- Yazılım: Samet Gündüz -->
          </body>
          </html>
        `, {
          minifyJS: true,
          minifyCSS: true,
          keepClosingSlash: true,
          collapseWhitespace: true,
          removeAttributeQuotes: true,
          collapseInlineTagWhitespace: true
        }))
      }
    })
  }, (err) => {
    console.log(err)
  });  
});  

server.listen(8080)