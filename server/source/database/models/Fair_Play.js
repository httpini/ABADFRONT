module.exports=(sequelize,DataTypes)=>{
    let alias = "fair_play";
    let config={
        timestamps: false,
        deletedAt: false,
        tableName: "fair_play"
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
        equipo_id:{
            allowNull: false,
            type: DataTypes.INTEGER
        },
        amarillas:{
            allowNull: true,
            type: DataTypes.INTEGER
        },
        rojas:{
            allowNull: true,
            type: DataTypes.INTEGER
        },
        puntos:{
            allowNull: true,
            type: DataTypes.INTEGER
        },
        amonestaciones:{
            allowNull: true,
            type: DataTypes.INTEGER
        },
        motivos_amon:{
            allowNull: true,
            type: DataTypes.TEXT
        },
        puntos:{
            allowNull: true,
            type: DataTypes.INTEGER
        }
              
    }
    const Fair_Play = sequelize.define(alias, cols, config)

    Fair_Play.associate = function(model){
        Fair_Play.belongsTo(model.torneo, {
            as: 'torneo',
            foreignKey: 'torneo_id',
          });
        Fair_Play.belongsTo(model.equipo, {
            as: 'equipo',
            foreignKey: 'equipo_id',
        });
                 
    }
   


    return Fair_Play
}