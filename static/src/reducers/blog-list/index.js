import _ from 'lodash';
import { createContentMarkup, ISODateToDateString } from 'helpers.js';

const defaultBlogList = {
    isFetching: true,
    didInvalidate: false,
    lastUpdated: Date.now()
};

export default function blogList(state = defaultBlogList, action) {
    switch(action.type) {
        case 'SET_BLOG_LIST':
            const items = _.map([...action.blogList], (item) => {
                return {
                    date: ISODateToDateString(item.date),
                    briefContent: createContentMarkup(item.brief_content),
                    slug: item.slug,
                    title: item.title
                };
            });
            return {
                ...state,
                items,
                isFetching: false,
                didInvalidate: false,
                lastUpdated: Date.now()
            };
        default:
            return state;
    }
}
