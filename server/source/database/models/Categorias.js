module.exports=(sequelize,DataTypes)=>{
    let alias = "categoria";
    let config={
        timestamps: false,
        deletedAt: false,
        tableName: "categorias"
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
        description:{
            allowNull: true,
            type: DataTypes.TEXT
        }
    }
    const Categoria = sequelize.define(alias, cols, config)

    Categoria.associate = function(model){
        Categoria.hasMany(model.equipo,{
            as:"equipos",
            foreignKey:"categoria_id",
        })
        Categoria.hasMany(model.subcategoria,{
            as:"subcategorias",
            foreignKey:"categoria_id",
        })
        Categoria.hasMany(model.torneo,{
            as:"torneos",
            foreignKey:"categoria_id",
        })
    }


    return Categoria
}