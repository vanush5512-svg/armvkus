// АРМвкус - Data Layer
var ARM={
  _admin:false,
  _g:function(k,d){if(!this._admin)return d;try{var v=localStorage.getItem('arm_'+k);return v?JSON.parse(v):d}catch(e){return d}},
  _s:function(k,v){if(!this._admin)return;try{localStorage.setItem('arm_'+k,JSON.stringify(v))}catch(e){}},
  cats:function(v){return v!==undefined?(this._s('cats',v),v):this._g('cats',[{"id":1,"icon":"🥩","name":"Мясные блюда","desc":"Хоровац, кебаб, бастурма"},{"id":2,"icon":"🍲","name":"Супы","desc":"Хаш, спас, бозбаш"},{"id":3,"icon":"🫓","name":"Выпечка","desc":"Лаваш, матнакаш, гата"},{"id":4,"icon":"🍯","name":"Десерты","desc":"Пахлава, суджух"},{"id":5,"icon":"🥤","name":"Напитки","desc":"Кофе, тан, компоты"}])},
  prods:function(v){return v!==undefined?(this._s('prods',v),v):this._g('prods',[{"name":"333","catId":1,"price":333,"weight":"","emoji":"🍽","badge":"","desc":"","img":"","id":1775756821933}])},
  orders:function(v){return v!==undefined?(this._s('orders',v),v):this._g('orders',[])},
  del:function(v){return v!==undefined?(this._s('del',v),v):this._g('del',{"min":300,"price":100,"free":1500,"time":"30–60 минут"})},
  settings:function(v){return v!==undefined?(this._s('settings',v),v):this._g('settings',{"phone":"+7 (999) 123-45-67","hours":"Ежедневно 10:00–22:00","pwd":"123123","city":"Аркадак"})}
};