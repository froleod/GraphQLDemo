// developed by Leonid Frolov
const authors = [
    { id: "1", name: "Leo", surname: "Tolstoy" },
    { id: "2", name: "Fyodor", surname: "Dostoevsky" },
    { id: "3", name: "Alexander", surname: "Pushkin" },
    { id: "4", name: "Dmitry", surname: "Glukhovsky"}
];

const books = [
    { id: "1", title: "War and Peace", genre: "Historical", authorId: "1" },
    { id: "2", title: "Anna Karenina", genre: "Drama", authorId: "1" },
    { id: "3", title: "Crime and Punishment", genre: "Philosophical", authorId: "2" },
    { id: "4", title: "The Brothers Karamazov", genre: "Philosophical", authorId: "2" },
    { id: "5", title: "Eugene Onegin", genre: "Novel in Verse", authorId: "3" }
];

module.exports = { books, authors };
