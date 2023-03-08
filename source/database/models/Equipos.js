module.exports=(sequelize,DataTypes)=>{
    let alias = "equipo";
    let config={
        timestamps: false,
        deletedAt: false,
        tableName: "equipos"
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
        categoria_id:{
            allowNull: true,
            type: DataTypes.INTEGER
        },
        color_1:{
            allowNull: true,
            type: DataTypes.STRING
        },
        color_2:{
            allowNull: true,
            type: DataTypes.STRING
        },
        color_3:{
            allowNull: true,
            type: DataTypes.STRING
        }
    }
    const Equipo = sequelize.define(alias, cols, config)

    Equipo.associate = function(model){
        Equipo.belongsTo(model.categoria,{
            as:"categoria",
            foreignKey:"categoria_id"
        })
        Equipo.hasOne(model.delegado,{
            as:"delegado",
            foreignKey:"equipo_id"
        })
        Equipo.belongsToMany(model.torneo, {
            through: model.equipo_torneo,
            as: 'torneos',
            foreignKey: 'equipo_id',
            otherKey: 'torneo_id',
        })
        Equipo.hasMany(model.goleador,{
            as:"goleadores",
            foreignKey:"equipo_id",
        })
        Equipo.hasMany(model.fair_play,{
            as:"fair_play",
            foreignKey:"equipo_id",
        })
        Equipo.hasMany(model.sancionado,{
            as:"sancionados",
            foreignKey:"equipo_id",
        })
    } 



    return Equipo
}