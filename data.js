// АРМвкус - Data Layer
var ARM={
  _admin:false,
  _g:function(k,d){if(!this._admin)return d;try{var v=localStorage.getItem('arm_'+k);return v?JSON.parse(v):d}catch(e){return d}},
  _s:function(k,v){if(!this._admin)return;try{localStorage.setItem('arm_'+k,JSON.stringify(v))}catch(e){}},
  cats:function(v){return v!==undefined?(this._s('cats',v),v):this._g('cats',[{"id":1,"icon":"🥩","name":"Мясные блюда","desc":"Люля-кебаб в лаваше, шаурма с курицей (с картошкой фри), со свининой (с картошкой фри), шаурма с курицей и сыром, шашлык в лаваше, донор в батоне с курицей, донор со свининой, хот-дог"},{"id":3,"icon":"🍰","name":"Выпечка","desc":"Самса, пицца, беляши, пирожки в ассортименте"},{"id":4,"icon":"🍯","name":"Десерты","desc":"Пахлава, суджух"},{"id":5,"icon":"🥤","name":"Напитки","desc":"Кофе, чай, газированные напитки в ассортименте"}])},
  prods:function(v){return v!==undefined?(this._s('prods',v),v):this._g('prods',[])},
  orders:function(v){return v!==undefined?(this._s('orders',v),v):this._g('orders',[])},
  del:function(v){return v!==undefined?(this._s('del',v),v):this._g('del',{"min":1000,"price":200,"free":1500,"time":"30–60 минут"})},
  settings:function(v){return v!==undefined?(this._s('settings',v),v):this._g('settings',{"city":"Аркадак","phone":"+7 (999) 5394203","hours":"Ежедневно с 08:00 до 18:00","pwd":"123123"})}
};