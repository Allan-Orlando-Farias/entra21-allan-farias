'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class User extends Model {
    static associate(models) {
    }
  };
  User.init({
    id: {
      type: DataTypes.UUID,
      primaryKey: true,
      defaultValue: DataTypes.UUIDV4
    },
    name: {
      type: DataTypes.STRING,
      allowNull: false
    },
    email: {
      type: DataTypes.STRING,
      allowNull: false,
      unique: true,
      validate: {
        isEmail: { msg: "Invalid E-mail!" }
      }
    },
    password: {
      type: DataTypes.STRING,
      allowNull: false,
      set(password) {
        this.setDataValue("password", )
      }
    }
  }, {
    sequelize,
    modelName: 'User',
  });
  return User;
};