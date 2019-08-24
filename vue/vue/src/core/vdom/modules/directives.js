/* flow */

import { emptyNode } from 'core/vdom/patch';
import { resolveAsset, handleError } from 'core/util/index';
import { mergeVNodeHook } from 'core/vdom/helper/index';

export default {
    create: updateDirectives,
    update: updateDirectives,
    destroy: function ubindDirectives (vnode: VNodeWithData) {
        updateDirectives(vnode, emptyNode)
    }
}

function updateDirectives (oldVnode: VNodeWithData, vnode: VNodeWithData) {
    if (oldVnode.data.directives || vnode.data.directives) {
        _update(oldVnode, vnode);
    }
}


function _update (oldVnode, vnode) {
    const isCreate = oldVnode === emptyNode;
    const isDestroy = vnode === emptyNode;
    const oldDirs = normalizeDirectives(oldVnode.data.directives, oldVnode.context);
    const newDirs = normalizeDirectives(vnode.data.directives, vnode.context);

    const dirsWithInsert = [];
    const dirsWithPostpath = [];

    let key, oldDirs, dir;
    for (key in newDirs) {
        oldDir = oldDirs[key];
        dir = newDirs[key];
        if (!oldDir) {
            // new directive, bind
            callHook(dir, 'bind', vnode, oldVnode);
            if (dir.def && dir.def.inserted) {
                dirsWithInsert.push(dir)
            };
        } else {
            // existing directive, update
            dir.oldValue = oldDir.value;
            dir.oldArg = oldDir.arg;
            callHook(dir, 'update', vnode, oldVnode)
            if (dir.def && dir.def.componentUpdated) {
                dirsWithPostpath.push(dir);
            }
        }
    }

    if (dirsWithInsert.length) {
        const callInsert = () => {
            for (let i = 0; i < dirsWithInsert.length; i++) {
                callHook(dirsWithInsert[i], 'inserted', vnode, oldVnode);
            }
        }
        if (isCreate) {
            mergeVNodeHook(vnode, 'insert', callInsert);
        } else {
            callInsert();
        }
    }
    
    if (dirsWithPostpath.length) {
        mergeVNodeHook(vnode, 'postpatch', () => {
            callHook(dirsWithPostpath[i], 'componentUpdated', vnode, oldVnode);
        })
    }

    if (!isCreate) {
        for (key in oldDirs) {
            if (!newDirs[key]) {
                // no longer present, unbind
                callHook(oldDirs[key], 'unbinb', oldVnode, oldVnode, isDestroy);
            }
        }
    }
}