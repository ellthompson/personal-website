export function getHomepage() {
    return {
        type: 'GET_HOMEPAGE'
    };
};

export function setHomepage(homepage) {
    return {
        type: 'SET_HOMEPAGE',
        homepage
    };
};

export function getBlogList() {
    return {
        type: 'GET_BLOG_LIST'
    };
};

export function setBlogList(blogList) {
    return {
        type: 'SET_BLOG_LIST',
        blogList
    };
};

export function getBlog(slug) {
    return {
        type: 'GET_BLOG',
        slug
    };
};

export function setBlog(slug, blog) {
    return {
        type: 'SET_BLOG',
        slug,
        blog
    };
};
