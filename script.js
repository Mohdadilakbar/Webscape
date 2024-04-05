const nav =document.qureySelector('.sticky-header')
fectch('sticky-header')
.then(res=>res.text())
.then(data=>{
	nav.innerHTML=data
})