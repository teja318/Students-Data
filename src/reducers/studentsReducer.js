const studentsIntialState = [
    {id: 1, name:"Mahidhar", city: "Eluru", percentage: 90 },
    {id: 2, name:"Manideep", city: "Eluru", percentage: 95 },
    {id: 3, name:"Rajesh", city: "Banglore", percentage: 85 },

]

const studentsReducer = (state = studentsIntialState, action) =>{
    switch(action.type){
        case 'ADD_STUDENT':{
            return [...state, {...action.payload}]
        }
        default:{
            return [...state]
        }
    }
}
export default studentsReducer