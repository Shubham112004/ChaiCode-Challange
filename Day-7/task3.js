let book = {
    title: 'Advanced JavaScript',
    author: 'Shubham',
    year: 2024
}

book.getAuthor = function () {
    console.log(book.title + " " + book.author);
}
book.getAuthor()