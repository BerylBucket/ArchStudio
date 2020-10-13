module.exports = {
  pages: {
    index: {
      // entry for the page
      entry: 'src/main.js',
      // the source template
      template: 'public/contact.html',
      // output as dist/index.html
      filename: 'index.html',
      title: "Home"
    },
    contact: {
      entry: 'src/contact.js',
      template: 'public/index.html',
      filename: 'contact.html',
      title: "Contact"
    }
  }
}
