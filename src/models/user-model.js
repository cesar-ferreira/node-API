'use strict';

module.exports = (sequelize, DataTypes) => {
    const User = sequelize.define('User', {
        name: DataTypes.STRING,
        username: DataTypes.STRING,
        email: DataTypes.STRING,
        dateOfBirth: DataTypes.DATE,
        password: DataTypes.STRING,
    });

    return User;
};