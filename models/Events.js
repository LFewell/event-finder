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
    }
)