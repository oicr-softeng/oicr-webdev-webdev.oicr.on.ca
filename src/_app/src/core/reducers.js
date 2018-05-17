import { Search, Forms, UMS, Publications } from 'oicr-ui-core';
import { visibilityFilterReducer } from 'wfui-react/lib/util/visibilityFilter';

export default {
    ...UMS.reducers,
    ...Forms.reducers,
    ...Search.reducers,
    ...Publications.reducers,
    visibilityFilter: visibilityFilterReducer,
};
