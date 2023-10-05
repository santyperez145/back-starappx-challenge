import {Schema, model} from 'mongoose'
//cluster: conjunto de base de datos(el link de mongo que obtienen es del cluster)
//db: conjunto de colecciones (coleccion hace referecnia a recurso y recurso hace referencia a los modelos de datos que necesita mi aplicacion)
//coleccion: conjunto de documentos
//documento: dato
//el array de eventos que se fetcheaba en amazing events me traia toda la coleccion de eventos
//cada objeto de ese array era un documento de la coleccion

let collection = 'users' //los nombres de la colecciones van siempre en plural (porque son un conjunto de), van siemore en ingles y tienen que ser descriptivos del recurso (ej.. recurso: category => coleccion: categories)
const schema = new Schema({
    name: { type: String, required: true },
    email: { type: String, required: true },
    password: { type: String, required: true },
    username: { type: String, required: true },
    role: { type: Number, default: 0 },
    online: { type: Boolean, default: false },
    verified: { type: Boolean, default: false },
    verify_code: { type: String },
    resetPasswordToken: { type: String },           // Agregar este campo
    resetPasswordExpires: { type: Date },          // Agregar este campo
}, {
    timestamps: true
});


let User = model(collection, schema)

export default User