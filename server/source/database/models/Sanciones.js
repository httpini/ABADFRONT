module.exports= (sequelize, DataTypes)=>{
    let alias = "sancionado";
    let config ={
        timestamps: false,
        deletedAt: false,
        tableName: "sancionados"
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
        f_sancion:{
            allowNull:false,
            type:DataTypes.INTEGER
        },
        sancion:{
            allowNull:true,
            type: DataTypes.STRING
        },
        f_vuelta:{
            allowNull:true,
            type: DataTypes.STRING
        },
        aclaraciones:{
            allowNull:true,
            type: DataTypes.TEXT
        }
    }
    const Sancionado = sequelize.define(alias,cols,config)

    Sancionado.associate = function(model){
        Sancionado.belongsTo(model.torneo,{
            as: "torneo",
            foreignKey: "torneo_id"
        })
        Sancionado.belongsTo(model.equipo_torneo,{
            as: "equipo",
            foreignKey: "equipo_id"
        })
        Sancionado.belongsTo(model.fecha,{
            as: "fecha",
            foreignKey: "f_sancion"
        })
    }

    return Sancionado
}