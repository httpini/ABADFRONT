module.exports=(sequelize,DataTypes)=>{
    let alias = "equipo_torneo";
    let config={
        timestamps: false,
        deletedAt: false,
        tableName: "equipos_torneos"
    }
    let cols = {
        id:{
            allowNull: false,
            autoIncrement: true,
            primaryKey: true,
            type: DataTypes.INTEGER
        },
        torneo_id:{
            allowNull: false,
            type: DataTypes.INTEGER
        },
        club_id:{
            allowNull: false,
            type: DataTypes.INTEGER
        },
        equipo_id:{
            allowNull: false,
            type: DataTypes.INTEGER
        },
        team_name:{
            allowNull: false,
            type: DataTypes.STRING
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
        },
        p_jugados:{
            allowNull: false,
            type: DataTypes.INTEGER
        },
        p_ganados:{
            allowNull: false,
            type: DataTypes.INTEGER
        },
        p_empatados:{
            allowNull: false,
            type: DataTypes.INTEGER
        },
        p_perdidos:{
            allowNull: false,
            type: DataTypes.INTEGER
        },
        g_favor:{
            allowNull: false,
            type: DataTypes.INTEGER
        },
        g_contra:{
            allowNull: false,
            type: DataTypes.INTEGER
        },
        g_dif:{
            allowNull: false,
            type: DataTypes.INTEGER
        },
        pts:{
            allowNull: false,
            type: DataTypes.INTEGER
        },
        predio_id:{
            allowNull: true,
            type: DataTypes.INTEGER
        },
        horario_local:{
            allowNull:true,
            type: DataTypes.TIME
        }       
    }
    const Equipo_Torneo = sequelize.define(alias, cols, config)

    Equipo_Torneo.associate = function(model){
        Equipo_Torneo.belongsTo(model.torneo, {
            as: 'torneo',
            foreignKey: 'torneo_id',
          });
        Equipo_Torneo.belongsTo(model.club, {
            as: 'club',
            foreignKey: 'club_id',
        });
        Equipo_Torneo.belongsTo(model.equipo, {
            as: 'equipo',
            foreignKey: 'equipo_id',
        });
        Equipo_Torneo.belongsTo(model.predio, {
            as: 'predio',
            foreignKey: 'predio_id',
        }); 
        Equipo_Torneo.hasMany(model.partido, {
            as: 'partidos_local',
            foreignKey: 'local_id',
        });
        Equipo_Torneo.hasMany(model.partido, {
            as: 'partidos_visitante',
            foreignKey: 'visitante_id',
        });
        Equipo_Torneo.hasMany(model.goleador,{
            as:"goleadores",
            foreignKey:"equipo_id",
        })
        Equipo_Torneo.hasMany(model.sancionado,{
            as:"sancionados",
            foreignKey:"equipo_id",
        })
         
    }
   


    return Equipo_Torneo
}