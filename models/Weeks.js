// const { DataTypes } = require('sequelize');

// module.exports = function (sequelize) {
//     return sequelize.define(
//         'Weeks',
//         {
//             id : {
//                 type          : DataTypes.INTEGER,
//                 primaryKey    : true,
//                 autoIncrement : true,
//             },
//             name : {
//                 type      : DataTypes.STRING,
//                 allowNull : false,
//             },
//         },
//         {
//             freezeTableName : true,
//             paranoid        : false,
//             underscored     : true,
//             timestamps      : false,
//         }
//     );
// };

const mongoose = require('mongoose');

const weeksSchema = new mongoose.Schema({
    id : mongoose.Schema.Types.ObjectId,
    name : {type : String, required : true},
},{
    versionKey : false
});

module.exports = mongoose.model('Weeks', weeksSchema);