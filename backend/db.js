
/**
 * let our todo has following fields
 * todo={
 *  title: string,
 *  description: string,
 *  completed: boolean
 * }
 * 
 */

const mongoose= require("mongoose");

mongoose.connect("Your_mongo_url")

const todoSchema= mongoose.Schema({
    title: String,
    description: String,
    completed: Boolean
})

const todo= mongoose.model('todos', todoSchema);

module.exports={
    todo: todo
}