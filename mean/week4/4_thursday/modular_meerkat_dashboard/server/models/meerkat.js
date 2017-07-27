const mongoose = require('mongoose');

let meerkatSchema = new mongoose.Schema({
    	name: { type: String, required: [true, 'Name required'], unique: true},
        age: { type: Number, required: [true, 'Age required'] },
        speed: { type: Number, required: [true, 'Speed required'] },
        food: { type: String, required: [true, 'Age required'] },
        created_at: { type: Date }
    });

mongoose.model('Meerkat', meerkatSchema);
