import { Search, Forms, UMS, Publications, Members } from 'oicr-ui-core';
import { visibilityFilterReducer } from 'wfui-react/lib/util/visibilityFilter';

export default {
    ...UMS.reducers,
    ...Forms.reducers,
    ...Search.reducers,
    ...Publications.reducers,
    ...Members.reducers,
    visibilityFilter: visibilityFilterReducer,
};
