module.exports=(sequelize, DataTypes)=>{
    let alias = "torneo";
    let config={
        timestamps:false,
        deletedAt:false,
        tableName:"torneos"
    }
    let cols={
        id:{
            allowNull: false,
            autoIncrement: true,
            primaryKey: true,
            type: DataTypes.INTEGER
        },
        name:{
            allowNull:false,
            type:DataTypes.INTEGER
        },
        temporada:{
            allowNull:false,
            type: DataTypes.INTEGER
        },
        reglamento:{
            allowNull: true,
            type: DataTypes.STRING
        },
        categoria_id:{
            allowNull: false,
            type:DataTypes.INTEGER
        },
        subcategoria_id:{
            allowNull: true,
            type:DataTypes.INTEGER
        }

    }
    const Torneo = sequelize.define(alias,cols,config)

    Torneo.associate = function(model){
        Torneo.belongsTo(model.categoria,{
            as:"categoria",
            foreignKey:"categoria_id",
        })
        Torneo.belongsTo(model.subcategoria,{
            as:"subcategoria",
            foreignKey:"subcategoria_id",
        })
        Torneo.belongsToMany(model.equipo, {
            through: model.equipo_torneo,
            as: 'equipos',
            foreignKey: 'torneo_id',
            otherKey: 'equipo_id',
        })
        Torneo.hasMany(model.goleador,{
            as:"goleadores",
            foreignKey:"torneo_id",
        })
          
       
    }

    return Torneo
}