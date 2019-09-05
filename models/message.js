module.exports = function (sequelize, DataTypes) {
    var Messages = sequelize.define("Message", {
        message: {
            type: DataTypes.TEXT,
            allowNull: false,
            len: [1]
        }}, 
        {
            timestamps: false
        });

    // Messages.associate = function(models){
    //     Messages.belongsTo(models.User, {
    //         foreignKey: {
    //             allowNull: true
    //         }
    //     });
    // };
    return Messages;
};