const defaultBlogList = {
    isFetching: true,
    didInvalidate: false,
    lastUpdated: Date.now()
};

export default function blogList(state = defaultBlogList, action) {
    switch(action.type) {
        case 'SET_BLOG_LIST':
            return {
                ...state,
                items: [...action.blogList],
                isFetching: false,
                didInvalidate: false,
                lastUpdated: Date.now()
            };
        default:
            return state;
    }
}
