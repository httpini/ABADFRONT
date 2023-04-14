module.exports=(sequelize,DataTypes)=>{
    let alias = "subcategoria";
    let config={
        timestamps: false,
        deletedAt: false,
        tableName: "subcategorias"
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
            type: DataTypes.INTEGER,

        }
    }
    const Subcategoria = sequelize.define(alias, cols, config)

    Subcategoria.associate = function(model){
        Subcategoria.belongsTo(model.categoria,{
            as:"categoria",
            foreignKey:"categoria_id"
        })
        Subcategoria.hasMany(model.torneo,{
            as:"torneos",
            foreignKey:"subcategoria_id",
        })
    } 

    return Subcategoria
}