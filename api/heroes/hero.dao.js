const mongoose = require('mongoose');
const heroSchema = require('./hero.schema');

// heroSchema.statics = {
//     create: (data, cb) => {
//         let hero = new this(data)
//         hero.save(cb);
//     },
//     get(query, cb) {
//         this.find(query, cb)
//     },
    
// }

const heroModel = mongoose.model("Heroes", heroSchema);
module.exports = heroModel;