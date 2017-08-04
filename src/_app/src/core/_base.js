/* global jQuery, extLinkConfig, document */
import { extLink } from 'wfui-react/lib/util';

/**
 * Set external link
 */
const ext = extLink(jQuery, extLinkConfig);
ext.attach(document);
