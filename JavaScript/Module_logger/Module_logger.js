import { TYPE_LOG } from '../Module_constants.js';

function logger(log, type = TYPE_LOG) {
 console[type](log);
}

export default logger;