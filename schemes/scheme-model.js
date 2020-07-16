const db = require('../data/connection')
const { schema } = require('../data/connection')

module.exports = {
    find,
    findById,
    findSteps,
    add,
    update,
    remove,
}

function find() {
  return db('schemes')
}
function findById(id) {
return db('schemes').where({id}).first()
}

function findSteps(id) {

    // return db('steps').where(id).first(steps.scheme_id).join('schemes')
    return db('steps').join('schemes as s', 'steps.scheme_id', 's.id')
    .select('steps.step_number as Step Number', 's.scheme_name as Scheme Name', 'steps.instructions' )
    .where('s.id', '=', id)
}

function add(schemeData) {
    return db('schemes')
    .insert(schemeData, "id")
    .then( ([id]) => {
        return findById(id)
    })
    .catch(err => {
        console.log(err)
        res.json(err)
    })
}

function update(changes, id) {
    return db('schemes')
    .where({id})
    .update(changes)
    .then(() => {
        return findById(id)
    })
}

// function remove(id) {
//     return findById(id).then(schemeInfo => {
//         return db('schemes').where({id}).first().del()
//         .then(() =>{
//             return schemeInfo
//         })
//     })   
      
// }

async function remove(id) {
    const deletedItemId = await findById(id)
    try {
       return db('schemes').where({id}).del()
        .then( () => {
            return deletedItemId
        })
    } catch(error) {
        console.log(error)
    }
}










// return db('schemes')
// .where({id}).del()
// .then(count => {
//     console.log(id)
//     return findById(id)

// }).catch(err => {
//     console.log(err)
// })

//good code 
// return findById(id).then(schemeInfo => {
//     return db('schemes').where({id}).first().del()
//     .then(() =>{
//         return schemeInfo
//     })
// })   