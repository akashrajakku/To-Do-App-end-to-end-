const zod= require("zod");

//defining types of todo
/**
 * let our todo has following fields
 * todo={
 *  title: string,
 *  description: string,
 *  completed: string
 * }
 * 
 * {
 *  id: string,
 * }
 */

const createTodo= zod.object({
    title: zod.string(),
    description: zod.string()
})

const updateTodo= zod.object({
    id: zod.string()
})

module.exports={
    createTodo: createTodo,
    updateTodo: updateTodo
}