'use strict';

module.exports = (sequelize, DataTypes) => {
    const Skill = sequelize.define('Skill', {
        playerId: {
            type: DataTypes.INTEGER,
            references: {
                model: {
                    tableName: 'Players',          
                },
                key: 'id'
            }
        },
        skill: {
            type: DataTypes.JSON,
        },
    },
    {
        timestamps: true
    },
    )
    return Skill;
};