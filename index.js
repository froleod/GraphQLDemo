// developed by Leonid Frolov
const express = require('express');
const { graphqlHTTP } = require('express-graphql');
// Импорт схемы
const schema = require('./schema/schema');

// Настройка сервера Express
const app = express();
app.use('/graphql', graphqlHTTP({
    schema: schema,
    graphiql: true
}));

app.listen(4000, () => console.log('Сервер запущен на http://localhost:4000/graphql'));
