const mongoose = require('mongoose');

mongoose.connect('mongodb://mongodb:27017/blog', {useNewUrlParser: true, useUnifiedTopology: true});

mongoose.connection.on('error', console.error.bind(console, 'connection error:'));
mongoose.connection.once('open', function() { console.log('mongoose connected')});