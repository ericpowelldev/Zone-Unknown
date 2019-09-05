module.exports = function (sequelize, DataTypes) {
    var User = sequelize.define("User", {
        user_name: {
            type: DataTypes.STRING,
            allowNull: false,
            validate: {
                len: {
                    args: [1, 50]
                }
            },
        password: {
                type: DataTypes.STRING,
                allowNull: false,
                validate: {
                    len: {
                        args: [1, 50]
                    }
                }
            },
        logged_in: {
                type: DataTypes.BOOLEAN,
                defaultValue: false
            }
        // id: {
        //         type: DataTypes.INTEGER,
        //         autoIncrement: true,
        //         primaryKey: true
        //     }
        }
    });

    // User.associate = function(models){
    //     User.hasMany(models.Message);
    // };
    return User;
};