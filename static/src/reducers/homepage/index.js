import { createContentMarkup } from 'helpers.js';

const defaultHomepage = {
    isFetching: true,
    didInvalidate: false,
    lastUpdated: Date.now()
};

export default function homepage(state = defaultHomepage, action) {
    switch(action.type) {
        case 'SET_HOMEPAGE':
            const homepage = action.homepage;
            homepage.content
            return {
                ...state,
                content: createContentMarkup(action.homepage.content),
                isFetching: false,
                didInvalidate: false,
                lastUpdated: Date.now()
            };
        default:
            return state;
    }
}
