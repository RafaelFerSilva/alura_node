import mongoose from "mongoose"

const editoraSchema =mongoose.Schema(
    {
        id: { type: String},
        nome: { type: String, require: true}
    }
)

const editoras = mongoose.model('editoras', editoraSchema)

export default editoras
