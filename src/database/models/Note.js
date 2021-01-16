module.exports = (sequelize, DataTypes) => {
    let alias = "Note";
    let cols = {
        id: {
            type: DataTypes.INTEGER,
            primaryKey: true,
            autoIncrement: true,
        },
        title: {
            type: DataTypes.STRING
        },
        description: {
            type: DataTypes.STRING
        },
        created_at: {
            type: DataTypes.DATE
        },
        updated_at: {
            type: DataTypes.DATE
        },
        status: {
            type: DataTypes.INTEGER
        }
    };
    let config = {
        tableName: 'notes',
        timestamps: false,
    }

    const Note = sequelize.define(alias, cols, config);
    return Note
}