const mongoose= require("mongoose");
var userSchema = mongoose.Schema({
    firstName: String,
    lastName: String
});

var Author = mongoose.model('Author', userSchema);
var jamieAuthor = new Author({firstName:'Paul', lastName:'Lawson'});

console.log(jamieAuthor);


mongoose.connect('mongodb://localhost/mongoose_basics').then(res=>{
    jamieAuthor.save(function(err) {
        if (err) throw err;})
});
