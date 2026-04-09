// АРМвкус - Data Layer
var ARM={
  _g:function(k,d){try{var v=localStorage.getItem('arm_'+k);return v?JSON.parse(v):d}catch(e){return d}},
  _s:function(k,v){try{localStorage.setItem('arm_'+k,JSON.stringify(v))}catch(e){}},
  cats:function(v){return v!==undefined?(this._s('cats',v),v):this._g('cats',[
    {id:1,icon:'🥩',name:'Мясные блюда',desc:'Хоровац, кебаб, бастурма'},
    {id:2,icon:'🍲',name:'Супы',desc:'Хаш, спас, бозбаш'},
    {id:3,icon:'🫓',name:'Выпечка',desc:'Лаваш, матнакаш, гата'},
    {id:4,icon:'🍯',name:'Десерты',desc:'Пахлава, суджух'},
    {id:5,icon:'🥤',name:'Напитки',desc:'Кофе, тан, компоты'}
  ])},
  prods:function(v){return v!==undefined?(this._s('prods',v),v):this._g('prods',[
    {id:1,name:'Хоровац из свинины',weight:'450 г',desc:'Сочное мясо на углях с ароматными специями',price:890,emoji:'🍖',img:'',catId:1,badge:'Хит'},
    {id:2,name:'Кебаб Люля',weight:'350 г',desc:'Фарш из баранины с луком на шампуре',price:690,emoji:'🥙',img:'',catId:1,badge:''},
    {id:3,name:'Долма',weight:'8 шт',desc:'Нежный фарш в виноградных листьях с мацони',price:590,emoji:'🫒',img:'',catId:1,badge:''},
    {id:4,name:'Бастурма',weight:'150 г',desc:'Вяленая говядина в чамане',price:790,emoji:'🥩',img:'',catId:1,badge:'Новинка'},
    {id:5,name:'Хаш',weight:'500 мл',desc:'Наваристый бульон из говяжьих ног',price:490,emoji:'🍲',img:'',catId:2,badge:''},
    {id:6,name:'Спас',weight:'400 мл',desc:'Кисломолочный суп с пшеничной крупой',price:390,emoji:'🥣',img:'',catId:2,badge:''},
    {id:7,name:'Лаваш тандырный',weight:'200 г',desc:'Тонкий хлеб из глиняного тандыра',price:120,emoji:'🫓',img:'',catId:3,badge:''},
    {id:8,name:'Матнакаш',weight:'350 г',desc:'Пышный армянский хлеб с корочкой',price:180,emoji:'🍞',img:'',catId:3,badge:''},
    {id:9,name:'Гата',weight:'250 г',desc:'Сладкая слоёная выпечка с начинкой',price:290,emoji:'🥮',img:'',catId:4,badge:'Любимое'},
    {id:10,name:'Пахлава',weight:'200 г',desc:'Медовое тесто с грецкими орехами',price:350,emoji:'🍯',img:'',catId:4,badge:''},
    {id:11,name:'Армянский кофе',weight:'200 мл',desc:'Крепкий кофе в джезве с кардамоном',price:190,emoji:'☕',img:'',catId:5,badge:''},
    {id:12,name:'Тан',weight:'300 мл',desc:'Кисломолочный напиток с солью и мятой',price:150,emoji:'🥛',img:'',catId:5,badge:''}
  ])},
  orders:function(v){return v!==undefined?(this._s('orders',v),v):this._g('orders',[])},
  del:function(v){return v!==undefined?(this._s('del',v),v):this._g('del',{min:300,price:100,free:1500,time:'30–60 минут'})},
  settings:function(v){return v!==undefined?(this._s('settings',v),v):this._g('settings',{phone:'+7 (999) 123-45-67',hours:'Ежедневно 10:00–22:00',pwd:'123123',city:'Аркадак'})}
};
