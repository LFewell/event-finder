const { Model, DataTypes } = require('sequelize');
const sequelize = require('../config/connection');

class Event extends Model{};
// Create a model for the events table
// this table should serve as a place-holder for data pulled from the Ticketmaster app
Event.init(
    {
        id: {
            type: DataTypes.INTEGER,
            allowNull: false,
            primaryKey: true,
            autoIncrement: true,
        },
        eventID: {
            type: DataTypes.STRING,
            allowNull: false,
        },
        eventName: {
            type: DataTypes.STRING,
            allowNull: false,
        },
        eventDescription: {
            type: DataTypes.STRING,
            allowNull: false,
        },
        eventStartDate: {
            type: DataTypes.DATE,
            allowNull: false,
        },
        eventEndDate: {
            type: DataTypes.DATE,
            allowNull: false,
        },
        geoLat: {
            type: DataTypes.DECIMAL,
            length: 25,
            allowNull: false,
        },
        geoLon: {
            type: DataTypes.DECIMAL,
            length: 25,
            allowNull: false,
        },
    },
    {
        sequelize,
        timestamps: false,
        freezeTableName: true,
        underscored: true,
        modelName: 'Event',
    }
);

module.exports = Event;