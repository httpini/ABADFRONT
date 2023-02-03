module.exports= (sequelize, DataTypes)=>{
    let alias = "goleador";
    let config ={
        timestamps: false,
        deletedAt: false,
        tableName: "goleadores"
    }
    let cols = {
        id:{
            allowNull: false,
            autoIncrement: true,
            primaryKey: true,
            type: DataTypes.INTEGER
        },
        name:{
            allowNull: false,
            type: DataTypes.STRING
        },
        last_name:{
            allowNull: false,
            type: DataTypes.STRING
        },
        e_t_id:{
            allowNull:false,
            type: DataTypes.INTEGER
        }
    }
    const Goleador = sequelize.define(alias,cols,config)

    Goleador.associate = function(model){
        Goleador.belongsTo(model.equipo_torneo,{
            as: "eqipo_torneo",
            foreignKey: "e_t_id"
        })
    }

    return Goleador
}