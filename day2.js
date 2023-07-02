
const person=[{
    id:1,
    name:"shin chan",
    age:19
} , {
    id:2,
    name:"Doremon",
    age:20
}]
//add,edit,get,delete user
const addUser = (obj) => {
    person.push(obj);
    return person
}
const editUser = (id,key,val) =>{
    const ind=person.findIndex(a => a.id==id)
    person[ind][key]=val
    return person
    // person.forEach((o)=>{
    //     if (o.id==id){
    //         o[key]=val
    //     }
    // } )
}
const deleteUser = (id) =>{
    const ind=person.findIndex( a => a.id==id)
    person.splice(ind,1)
    return person
    // person.forEach( a => {
    //     if (a.id==id){
    //         person.splice(person.indexOf(a),1)
    //     }
    // })
}
const getUser = (id) => {
    // const ind=person.findIndex( a => a.id==id) //findIndex returns the index of the element 
    // return person[ind]
    return person.find( a => a.id==id) //find returns the element
}
console.log(addUser({id:3,name:"Dora",age:19}))

console.log(editUser(2,'age',19))

console.log(deleteUser(2))

console.log(getUser(1))

