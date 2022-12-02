module.exports = (sequelize, DataTypes) => {
    const Campaign = sequelize.define("campaign", {
        id: {
            type: DataTypes.INTEGER,
            primaryKey: true,
            autoIncrement: true,
        },
        name: {
            type: DataTypes.STRING,
        },
        description: {
            type: DataTypes.STRING,
        },
        amount: {
            type: DataTypes.INTEGER
        },
        status: {
            type: DataTypes.STRING
        },
        expiration_date: {
            type: DataTypes.STRING
        }
    }, {
        createdAt: true,
        updatedAt: true,
        paranoid: true,
    }
    );
    return Campaign;
}