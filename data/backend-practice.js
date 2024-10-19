const hxr=new XMLHttpRequest();

hxr.addEventListener('load',()=>{
  console.log(hxr.response);
});

hxr.open('GET','https://supersimplebackend.dev');
hxr.send();