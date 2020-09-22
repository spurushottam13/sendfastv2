export const EventEmitter = (function(){
   return {
      _events: {},
      on: function(name, callback){
         this._events[name] = callback
      },
      emit: function(name, ...rest){
         this._events[name](...rest)
      }
   }
})()