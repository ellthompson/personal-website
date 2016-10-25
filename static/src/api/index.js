import getHomepage from 'api/homepage/index.js';
import getBlogList from 'api/blog-list/index.js';
import getBlog from 'api/blog/index.js';
export default {
    fetchHomepage: getHomepage,
    fetchBlogList: getBlogList,
    fetchBlog: getBlog
}
