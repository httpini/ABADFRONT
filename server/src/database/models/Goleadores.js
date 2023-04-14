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
        equipo_id:{
            allowNull:false,
            type: DataTypes.INTEGER
        },
        torneo_id:{
            allowNull:false,
            type: DataTypes.INTEGER
        },
        goles:{
            allowNull:false,
            type:DataTypes.INTEGER
        }
    }
    const Goleador = sequelize.define(alias,cols,config)

    Goleador.associate = function(model){
        Goleador.belongsTo(model.torneo,{
            as: "torneo",
            foreignKey: "torneo_id"
        })
        Goleador.belongsTo(model.equipo_torneo,{
            as: "equipo",
            foreignKey: "equipo_id"
        })
    }

    return Goleador
}