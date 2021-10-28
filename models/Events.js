const { Model, DataTypes } = require('sequelize');
const sequelize = require('../config/connection');

Event.init(
    {
        id: {
        type: DataTypes.INTEGER,
        allowNull: false,
        primaryKey: true,
        autoIncrement: true,
        },
        eventID: {
            
        }
<<<<<<< HEAD

=======
>>>>>>> 62f6c20f032550afd569bb7f7862e39daa5f3912
    }
)