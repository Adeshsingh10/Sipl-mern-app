// module.exports = (sequelize, DataTypes) => {
//     const Users = sequelize.define("user_details", {
//         id: {
//             type: DataTypes.INTEGER,
//             primaryKey: true,
//             autoIncrement: true,
//         },
//         name: {
//             type: DataTypes.STRING,
//         },
//         email: {
//             type: DataTypes.STRING,
//         },
//         city: {
//             type: DataTypes.STRING
//         },
//         phone: {
//             type: DataTypes.STRING
//         },
//         password: {
//             type: DataTypes.STRING
//         }
//     }, {
//         createdAt: true,
//         updatedAt: true,
//         paranoid: true,
//     }
//     );
//     return Users;

// }

module.exports = (sequelize, DataTypes) => {
    const Users = sequelize.define("users", {
        id: {
            type: DataTypes.INTEGER,
            primaryKey: true,
            autoIncrement: true,
        },
        name: {
            type: DataTypes.STRING,
        },
        crypto_wallet_address: {
            type: DataTypes.STRING
        }
    }, {
        createdAt: true,
        updatedAt: true,
        paranoid: true,
    }
    );
    return Users;
}