module.exports = function(sequelize, DataTypes) {
  var Accounts = sequelize.define("Accounts", {
    text: DataTypes.STRING,
    description: DataTypes.TEXT
  });
  return Accounts;
};
