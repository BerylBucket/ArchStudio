module.exports = {
  publicPath: "/ArchStudio/",
  pages: {
    index: {
      // entry for the page
      entry: 'src/main.js',
      // the source template
      template: 'public/index.html',
      // output as dist/index.html
      filename: 'index.html',
      title: "Home"
    },
    portfolio: {
      entry: 'src/portfolio.js',
      template: 'public/index.html',
      filename: 'portfolio.html',
      title: "Portfolio"
    },
    about: {
      entry: 'src/about.js',
      template: 'public/index.html',
      filename: 'about.html',
      title: "About Us"
    },
    contact: {
      entry: 'src/contact.js',
      template: 'public/index.html',
      filename: 'contact.html',
      title: "Contact"
    }
  }
}
