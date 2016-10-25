import { fetchHomepage, fetchBlogList, fetchBlog } from 'api/index.js';
import { setHomepage, setBlogList, setBlog } from 'actions/index.js';

const apiMiddleware = store => next => action => {
    if (action.type === 'GET_HOMEPAGE') {
        fetchHomepage((homepageData) => {
            store.dispatch(setHomepage(homepageData));
        });
    }
    if (action.type === 'GET_BLOG_LIST') {
        fetchBlogList((blogListData) => {
            store.dispatch(setBlogList(blogListData));
        });
    }
    if (action.type === 'GET_BLOG') {
        fetchBlog(action.slug, (blogData) => {
            store.dispatch(setBlog(action.slug, blogData));
        });
    }
    return next(action);
};

export default apiMiddleware;
