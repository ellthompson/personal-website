const defaultBlogs = {
    items: {}
};

export default function blogs(state = defaultBlogs, action) {
    switch(action.type) {
        case 'SET_BLOG':
            return {
                items: {
                    ...state.items,
                    [action.slug]: action.blog
                }
            }
        default:
            return state;
    }
}
