/* Navigation Search */
$(function() {
    $('#cbw-nav-search').submit(function() {
        const keyword = $('#cbw-nav-search-keywords')
            .val()
            .trim();
        if (keyword) {
            window.location = `/search/#/${keyword}`;
        }
        return false;
    });
});
