const WHATSAPP='201031380253';
const accounts = [
  {id:'account01',name:'Account 1',description:'أكونت ممتاز بمستويات عالية وسكنات نادرة.',images:['account01-1.jpg']},
  {id:'account02',name:'Account 2',description:'أكونت قوي مع شخصيات مميزة وسكنات نادرة.',images:['account02-1.jpg']},
  {id:'account03',name:'Account 3',description:'أكونت متوسط المستوى مع سكنات جميلة.',images:['account03-1.jpg']}
];

const accountsGrid=document.getElementById('accounts-grid');

accounts.forEach((acc)=>{
  const card=document.createElement('div');
  card.className='account-card';

  const img=document.createElement('img');
  img.src=acc.images[0];
  img.alt=acc.name;

  const shine=document.createElement('div');
  shine.className='shine';

  const content=document.createElement('div');
  content.className='content';
  const h3=document.createElement('h3'); h3.textContent=acc.name;
  const p=document.createElement('p'); p.textContent=acc.description;

  // أزرار
  const btnGroup=document.createElement('div');
  btnGroup.className='btn-group';

  const btnRequest=document.createElement('button');
  btnRequest.className='btn-whatsapp';
  btnRequest.innerHTML='<i class="fas fa-image"></i> طلب صور';
  btnRequest.uest.on=li=>=()=>w.ndow.open(`https://wa.me/${WHATSAPP}?text=${encodeURIComponent(`مرحبا، أريد صور إضافية لـ .{acc.name,`)}`,'_bl;

  ;

   onst b=nBuy=doc.ment.createElement('but;
  );
  b.nBuy.clas=Name='btn-what;
  ';
  b.nBuy.inne=HTML='<i class="fas fa-cart-plus"></i> شراء ;
  ';
  b.nBuy.on=li=>=()=>w.ndow.open(`https://wa.me/${WHATSAPP}?text=${encodeURIComponent(`مرحبا، أريد شراء .{acc.name,`)}`,'_bl;

  ;

  btn.roup.appendChild(btnReq;
  );
  btn.roup.appendChild(bt;

  ;

  co.tent.appendChil;
  );
  co.tent.appendChi;
  );
  co.tent.appendChild(btnG;

  ;

 .card.appendChild;
  );
 .card.appendChild(s;
  );
 .card.appendChild(con;
  );
  account.Grid.appendChild(;
rd;

});

fun tion sendMessag
  ).
  e.preventDefa;
  );
   onst=f.rm=e.t;
  t;
   onst=name.form.name.;
  e;
   onst =mail.form..mail.;
  e;
   onst me=sage.form.me.sage.;
  e;
  w.ndow.open(`https://wa.me/${WHATSAPP}?text=${encodeURIComponent(`مرحبا، عندي استفسار من ${name} (${email}): ${message,`)}`,'_bl;
k
                                                                                                                 
