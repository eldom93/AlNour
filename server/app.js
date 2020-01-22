const express = require('express');
const graphqlHTTP = require('express-graphql');
const schema = require('./schema/schema');
const mongoose = require('mongoose');
const cors = require('cors');

const app = express();

// allow cross-origin requests
app.use(cors());

mongoose.connect('mongodb+srv://neldo:ILoveAllah1!@cluster0-eminl.mongodb.net/test?retryWrites=true&w=majority');
mongoose.connection.once('open',() => {
    console.log('connected to db!');
});


app.use("/graphql",graphqlHTTP({
    schema,
    graphiql: true
}));

app.listen(4000, () => {
    console.log('listening for requests on port 4000');
});