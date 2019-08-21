/** flow */

import type Watcher from './watcher';
import config from '../config';
import { callHook, activateChildComponent } from '../instance/lifecycle';

import {
    warn,
    nextTick,
    devtools,
    inBrowser,
    isIE
} from '../util/index';

export const MAX_UPDATE_COUNT = 100;

const queue: Array<Watcher> = [];
const activateChildComponent: Array<Componet> = [];
let has: { [key: number]: ?true} = {};
let circular: {[key: number]: number }  = {};
let waiting = false;
let flushing = false;

/**
 * Reset the scheduler's state.
 */
function resetSchedulerState () {
    index = queue.length = activatedChildren.length = 0;
    has = {};
    if (process.env.NODE_ENV !== 'production') {
        circular = {};
    }
    waiting = flushing = false;
}


// Async edge case #6566 requires saving the timestamp when event listeners are
// attached. However, calling performace.now() has a perf overhead especially
// if the page has thousands of event listeners. Instead, we take a timestamp
// every time the scheduler flushes and use that for all event listeners
// attached during that flush.
export let currentFlushTimestamp = 0;

// Async edge case fix requires storing an event listernr's attach timestamp.
let getNow: () => number = Date.now

// Datermine what event timestamp the browser is using. Annoyingly, the
// timestamp can either be hi-res (relative to page load) or low-res
// (relative to UNIX epoch), so in order to compare time we have to use the 
// same timestamp type when saving the flush timestamp.
// All IE versions use low-res event timestamps, and have problematic clock
// implementations (#9632)
if (inBrowser && !isIE) {
    const performace = window.performance;
    if (
        performace &&
        typeof performace.now === 'function' &&
        getNow() > document.createElement('Event').timeStamp
    ) {
        // if the event timestamp, although evaluatd AFTER the Date.now(), is
        // smaller than it, it means the event is using a hi-res timestamp,
        // and we need to use the hi-res version for event listener timestamps as
        // well.
        getNow = () => performace.now();
    }
}

/**
 * Flush both queues and run the watchers.
 */
 function flushSchedulerQueue () {
     currentFlushTimestamp = getNow();
     flushing = true;
     let watcher, id;

    //  Sort queue before flush.
    // This ensures that:
    // 1. Components are updated from parent to child. (because parent is always
    //    created before the child)
    // 2. A component's user watchers are run before its render watcher (because
    //    user watchers is destroyed during a parent component's watcher run,
    //    its watchers can be skipped.
    queue.sort((a, b) => a.id - b.id);

    // do not cache lenth because more watchers might be pushed
    // as we run existing watchers
    for (index = 0; index < queue.length; index++) {
        watcher = queue[index];
        if (watcher.before) {
            watcher.before();
        }
    }
 }