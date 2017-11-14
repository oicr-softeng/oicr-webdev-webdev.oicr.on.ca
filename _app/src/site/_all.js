/* global window, jQuery, document*/
import { extLink } from 'wfui-react/lib/util';

const ext = extLink(jQuery, window.extLinkConfig);
ext.attach(document);

/* Navigation Search */
$(function() {
    $('#cbw-nav-search').submit(function() {
        const keyword = $('#cbw-nav-search-keywords').val().trim();
        if (keyword) {
            window.location = `/search/#/${keyword}`;
        }
        return false;
    });
});
