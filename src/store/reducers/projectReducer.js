const initState = {
    projects: [
        {id: 1, title: "help me find peach", content: "bla bla bla"},
        {id: 2, title: "collect all the starts", content: "bla bla bla"},
        {id: 3, title: "egg hunt with yoshi", content: "bla bla bla"}
    ]
};

const projectReducer = (state = initState, action) => {
    // eslint-disable-next-line default-case
    switch(action.type) {
        case 'CREATE_PROJECT_SUCCESS':
            console.log('created project', action.project);
            return state;
        case 'CREATE_PROJECT_ERROR':
            console.log('create project error', action.err);
            return state;
        default:
            return state;
    }
}

export default projectReducer;