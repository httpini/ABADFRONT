module.exports=(sequelize,DataTypes)=>{
    let alias = "partido";
    let config={
        timestamps: false,
        deletedAt: false,
        tableName: "partidos"
    }
    let cols = {
        id:{
            allowNull: false,
            autoIncrement: true,
            primaryKey: true,
            type: DataTypes.INTEGER
        },
        fecha_id:{
            allowNull: false,
            type: DataTypes.INTEGER
        }, 
        hora:{
            allowNull: true,
            type: DataTypes.TIME
        },
        dia:{
            allowNull: true,
            type: DataTypes.DATEONLY
        },
        predio_id:{
            allowNull: true,
            type: DataTypes.INTEGER
        },
        estado_id:{           
            allowNull: true,
            type: DataTypes.INTEGER 
        },
        local_id:{
            allowNull: false,
            type: DataTypes.INTEGER
        },
        visitante_id:{
            allowNull: false,
            type: DataTypes.INTEGER
        },
        g_local:{
            allowNull: true,
            type: DataTypes.INTEGER
        },
        g_visitante:{
            allowNull: true,
            type: DataTypes.INTEGER
        },
        terna_id:{
            allowNull: true,
            type: DataTypes.INTEGER
        },
        motivo_postergado:{
            allowNull: true,
            type: DataTypes.STRING
        },
        torneo_id:{
            allowNull: false,
            type: DataTypes.INTEGER
        }
    }
    const Partido = sequelize.define(alias, cols, config)

    Partido.associate = function(model){
        Partido.belongsTo(model.fecha, {
            as: 'fecha',
            foreignKey: 'fecha_id',
        })
        Partido.belongsTo(model.predio, {
            as: 'predio',
            foreignKey: 'predio_id',
        })
        Partido.belongsTo(model.estado_partido, {
            as: 'estado',
            foreignKey: 'estado_id',
        })
        Partido.belongsTo(model.terna, {
            as: 'terna',
            foreignKey: 'terna_id',
        })
        Partido.belongsTo(model.equipo_torneo,{
            as:"local",
            foreignKey:"local_id",
        })
        Partido.belongsTo(model.equipo_torneo,{
            as:"visitante",
            foreignKey:"visitante_id",
        })
        Partido.belongsTo(model.torneo,{
            as:"torneo",
            foreignKey:"torneo_id",
        })
       
    }



    return Partido
}