const intialState={
    persons:[]
}

const reducer = (state=intialState, action) => {
    if(action.type=="ADDPERSON"){
        const newPerson = {
            id: Math.random(), // not really unique but good enough here!
            name: 'Max',
            age: Math.floor( Math.random() * 40 )
        }
        return {
            persons:state.persons.concat(newPerson)
        }
    }

    if(action.type =="DELPERSON"){
        return {
            persons:state.persons.filter((person)=>{
                return person.id!==action.personId;
            })
        }
    }

    return state;
}

export default reducer;