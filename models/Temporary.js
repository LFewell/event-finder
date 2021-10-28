const { Model, DataTypes } = require('sequelize');
const sequelize = require('../config/connection');

// Create a model for the temporary table that holds data that is session-specific
// This data can be pushed to the User table, or the User table's data can be imported
// but usually this data just affects current login only
Temporary.init(
    {
        id: {
            type: DataTypes.INTEGER,
            allowNull: false,
            primaryKey: true,
            autoIncrement: true,
        },
        tempEmail: {
            type: DataTypes.STRING,
            allowNull: false,
        },
        tempPassword: {
            type: DataTypes.STRING,
            allowNull: false,
        },
        geoLat: {
            type: DataTypes.NUMBER,
            length: 25,
            allowNull: false,
        },
        geoLon: {
            type: DataTypes.NUMBER,
            length: 25,
            allowNull: false,
        },
    }
);

module.exports = Temporary;