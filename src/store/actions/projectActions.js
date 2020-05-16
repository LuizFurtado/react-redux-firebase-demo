export const createProject = (project) => {
    return(dispatch, getState, { getFirestore }) => {
        //this middleware capture the state action and database write
        //to perform an assynchronous call to the database
        const firestore = getFirestore();

        firestore.collection('projects').add({
            ...project,
            authorFirstName: "Luiz",
            authorLastName: "Furtado",
            authorId: 12345,
            createdAt: new Date()
        }).then( () => {
            dispatch({ type: 'CREATE_PROJECT_SUCCESS', project });
        }).catch( err => {
            dispatch({ type: 'CREATE_PROJECT_ERROR', err });
        });
    }
};