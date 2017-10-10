/* global window, jQuery, extLinkConfig, document */
import { extLink } from 'wfui-react/lib/util';

/**
 * Set external link
 */
const ext = extLink(jQuery, window.extLinkConfig);
ext.attach(document);
