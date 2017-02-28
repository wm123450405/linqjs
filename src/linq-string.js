/**
 * Created by wm123 on 2017/2/14.
 */
import Enumerable from './linq';

export default function() {
	Enumerable.extends(String.prototype, 'string');
};