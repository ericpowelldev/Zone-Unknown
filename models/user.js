module.exports = function (sequelize, DataTypes) {
    var User = sequelize.define("User", {
        user_name: {
            type: DataTypes.STRING,
            allowNull: false,
            unique: true,
            validate: {
                len: {
                    args: [1, 50]
                }
            },
        // FUTURE DEVELOPMENT
        // saved_game: {
        //         type: DataTypes.INTEGER,
        //         allowNull: false,
        //         validate: {
        //             len: {
        //                 args: [1, 0]
        //             }
        //         }
        //     },
        hasBioScanner: {
                type: DataTypes.BOOLEAN,
                defaultValue: false
            },
        hasGeoMapper: {
                type: DataTypes.BOOLEAN,
                defaultValue: false
            },
        hasLazer: {
                type: DataTypes.BOOLEAN,
                defaultValue: false
            },
        hasJetpack: {
                type: DataTypes.BOOLEAN,
                defaultValue: false
            },
        hasWaterFilter: {
                type: DataTypes.BOOLEAN,
                defaultValue: false
            },
        hasO2Scrubber: {
                type: DataTypes.BOOLEAN,
                defaultValue: false
            },
        counter: {
                type: DataTypes.INTEGER,
                defaultValue: 0,
                allowNull: false
            },
        health: {
                type: DataTypes.INTEGER,
                defaultValue: 20,
                allowNull: false
            },
        fuel: {
                type: DataTypes.INTEGER,
                defaultValue: 0,
                allowNull: false
            },
        oxygen: {
                type: DataTypes.INTEGER,
                defaultValue: 10,
                allowNull: false
            },
        level: {
                type: DataTypes.INTEGER,
                defaultValue: 0,
                allowNull: false
            }
        }
    });
    
    return User;
};