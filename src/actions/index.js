export function moviesList(){
    return{
        type:'MOVIES_LIST',
        payload:[
               {
                id: 1,
                name: "Rambo",
              },
              {
                id: 2,
                name: "Pulp Ficion",
              },
              {
                id: 3,
                name: "Batman",
              },
        ]
    }
}