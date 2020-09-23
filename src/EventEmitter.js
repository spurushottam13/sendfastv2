export const EventEmitter = (function(){
   return {
      _store: {shouldDisplay: false},
      _events: {},
      on: function(name, callback){
         this._events[name] = callback
      },
      emit: function(name, ...rest){
         this._events[name](...rest)
      },
      add: function(key, value){
         this._store[key] = value
      },
      get: function(key){
         return this._store[key]
      }
   }
})()

window._E = EventEmitter