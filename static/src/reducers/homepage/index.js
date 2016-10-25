const defaultHomepage = {
    isFetching: true,
    didInvalidate: false,
    lastUpdated: Date.now()
};

export default function homepage(state = defaultHomepage, action) {
    switch(action.type) {
        case 'SET_HOMEPAGE':
            return {
                ...state,
                ...action.homepage,
                isFetching: false,
                didInvalidate: false,
                lastUpdated: Date.now()
            };
        default:
            return state;
    }
}
