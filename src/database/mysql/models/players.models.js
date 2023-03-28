'use strict';


module.exports = (sequelize, DataTypes) => {
    const Player = sequelize.define('Player', {
        uuid: {
            type: DataTypes.UUID,
            defaultValue: DataTypes.UUIDV4 
        },
        name: {
            type: DataTypes.STRING,
        },
        position: {
            type: DataTypes.ENUM('defender', 'midfielder', 'forward'),
        }
    }, 
    {
        timestamps: true
    },
    )
    return Player;
};