// developed by Leonid Frolov
const {
    GraphQLSchema,
    GraphQLObjectType,
    GraphQLID,
    GraphQLString,
    GraphQLList,
    GraphQLNonNull
} = require('graphql');
const _ = require('lodash');

// Импорт данных
const { books, authors } = require('../data/initData');

// Определение типа Author
const AuthorType = new GraphQLObjectType({
    name: 'Author',
    fields: () => ({
        id: { type: GraphQLID },
        name: { type: GraphQLString },
        surname: { type: GraphQLString },
        books: {
            type: new GraphQLList(BookType),
            resolve(parent, args) {
                return books.filter(book => book.authorId === parent.id);
            }
        }
    })
});

// Определение типа Book
const BookType = new GraphQLObjectType({
    name: 'Book',
    fields: () => ({
        id: { type: GraphQLID },
        title: { type: GraphQLString },
        genre: { type: GraphQLString },
        author: {
            type: AuthorType,
            resolve(parent, args) {
                return _.find(authors, { id: parent.authorId });
            }
        }
    })
});
//developed by Leonid Frolov
// Определение корневого запроса RootQuery
const RootQuery = new GraphQLObjectType({
    name: 'RootQueryType',
    fields: {
        getBook: {
            type: BookType,
            args: { id: { type: GraphQLID } },
            resolve(parent, args) {
                return _.find(books, { id: args.id });
            }
        },
        listBooks: {
            type: new GraphQLList(BookType),
            resolve(parent, args) {
                return books;
            }
        }
    }
});

// Определение мутаций
const Mutation = new GraphQLObjectType({
    name: 'Mutation',
    fields: {
        addBook: {
            type: BookType,
            args: {
                title: { type: new GraphQLNonNull(GraphQLString) },
                genre: { type: GraphQLString },
                authorId: { type: new GraphQLNonNull(GraphQLID) }
            },
            resolve(parent, args) {
                const newBook = {
                    id: `${books.length + 1}`,
                    title: args.title,
                    genre: args.genre,
                    authorId: args.authorId
                };
                books.push(newBook);
                return newBook;
            }
        }
    }
});
//developed by Leonid Frolov
// Экспорт схемы
module.exports = new GraphQLSchema({
    query: RootQuery,
    mutation: Mutation
});
