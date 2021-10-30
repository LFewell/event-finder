const User = require('./User');
const Event = require('./Event');
const Temp = require('./Temporary');

User.hasMany(Event, {
    foreignKey: 'eventId',
});

// Event.belongsToMany(User, {
//     foreignKey: 'userId',
//     onDelete: 'CASCADE'
// });

// Temp.belongsToMany(User, {
//     foreignKey: 'userId',
// });


module.exports = { User, Event, Temp };