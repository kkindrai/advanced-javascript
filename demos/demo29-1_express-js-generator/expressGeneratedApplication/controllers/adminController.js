exports.homePage = (req, res) => {
    res.render('admin', {'title': 'Admin Home Page'});
}

// Add Page
exports.addPage = (req, res) => {
    res.send('adding.... (proof of concept)'); /* res.(HTTP VERB (Post, get, delete, update))*/
}