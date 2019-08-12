import { initMixin } from './init';
<<<<<<< HEAD
import {stateMixin } from './state';
=======
import { stateMixin } from './state';
>>>>>>> 7df31591193c44c9ca75dd0221aedbd298e7356e
import { renderMixin } from './render';
import { eventsMixin } from './events';
import { lifecycleMixin } from './lifecycle';
import { warn } from '../util/index';

<<<<<<< HEAD
=======

>>>>>>> 7df31591193c44c9ca75dd0221aedbd298e7356e
function Vue (options) {
    if (process.env.NODE_ENV !== 'production' &&
      !(this instanceof Vue)
    ) {
<<<<<<< HEAD
        warn('Vue is a constructor and should be called with the `new` keyword')
    }
    this._init(options);
}



=======
        warn('Vue is a constructor and should be called with new keyword!')
    }
    this._init(options)
}

>>>>>>> 7df31591193c44c9ca75dd0221aedbd298e7356e
initMixin(Vue);
stateMixin(Vue);
eventsMixin(Vue);
lifecycleMixin(Vue);
renderMixin(Vue);

<<<<<<< HEAD

export default Vue;
=======
export default Vue;
>>>>>>> 7df31591193c44c9ca75dd0221aedbd298e7356e
