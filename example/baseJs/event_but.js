class EventEmeitter {
    constructor() {
        this._events = this._events || new Map(); // 存储事件 /回调键值对
        this.maxListeners = this._maxListeners || 10; //设立监听上线
    }
};

// 触发名为 type 的事件
EventEmeitter.prototype.emit = function (type, ...args) {
    let handle;
    // 从存储事件键值对的 this._events 中获取对应事件回调函数
    handle = this._events.get(type);
    if (args.length > 0) {
        handle.apply(this, args);
    } else {
        handle.call(this);
    };
    return true;
};


// 监听名为 type 的事件
EventEmeitter.prototype.addListener = function (type, fn) {
    // 将 tpye 事件一级对应的 fn 函数放入 this._events 中存储
    if (!this._events.get(type)) {
        this._events.set(type, fn);
    }
};

class EventEmeitter {
    constructor() {
        this._events = this._events || new Map(); // 储存事件 / 回调键值对
        this._maxListeners = this._maxListeners || 10;
    }
}

// 