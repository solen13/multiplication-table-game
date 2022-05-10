
let cıktıSayi1=document.querySelector('#Sayi1');
let cıktıSayi2=document.querySelector('#Sayi2');
let cıktı=document.querySelector('#cikti');
let inputyazi=document.querySelector('#input-yazi');
let SonucBTN=document.querySelector('#Sonuc');

let sayaclar1=document.querySelector('#sayaclar1');
let sayaclar2=document.querySelector('#sayaclar2');

let contener=document.querySelector('.contener');
let Sayac1=document.querySelector('#Sayac');
let Sayacyanlis=document.querySelector('#SayacYanlis');
let Gameover=document.querySelector('.Game-over');
let newGameBtn=document.querySelector('.new-game-btn');
var sayac=0;
var sayacyanis=0;
var deger;
var saniye=60;
var odak;
contener.addEventListener('click',e=>{
inputOdak();
    
})
inputOdak();
function inputOdak(){
odak  =   inputyazi.focus();

 
}





function cıktıopascity(){


    cıktı.style.opacity=1;
 setTimeout(() => {  
     
    
                  cıktı.style.opacity=0;

            }, 1000);
}




function enterPress(s1,s2){


inputyazi.addEventListener('keypress',function(event){
    if(event.key==="Enter"){
    
  if(inputyazi.value===''){
     cıktı.textContent='Boşluk var';
    cıktıopascity();

     }
 
     else if( inputyazi.value !=resualt){
 

    if(  isNaN(inputyazi.value) ) {
    cıktı.textContent='Sayı girin';
        inputyazi.value='';
        cıktıopascity();
    
     }
     else{
     cıktı.textContent=resualt;
     inputyazi.value='';
       sayacyanis++;

        Sayacyanlis.textContent=sayacyanis;
     cıktıopascity();

     
     }


     }



    else{
      cıktı.textContent='Cevap doğru :)';
cıktıopascity();

            sayac++;
        Sayac.textContent=sayac;
         yenileme(s1,s2);

    }





    }



})

}









function yenileme(numbers1,numbers2){
           sayi1=Math.floor(Math.random() * numbers1) + 1;
        sayi2=Math.floor(Math.random() * numbers2) + 1;
        resualt=sayi1*sayi2;
        
        cıktıSayi1.textContent=sayi1;
        cıktıSayi2.textContent=sayi2;

        console.log(sayi1);        
        console.log(sayi2);        
        console.log(resualt);    

        inputyazi.value='';
      
      cıktı.textContent='cevap doğru';
        
      inputOdak();

        setTimeout(() => {  
     
    
                  cıktı.style.opacity=0;

            }, 1000);
      



            
}



//// burası seviye seçme bölümü

var kolay=document.getElementById('Kolay');
var orta=document.getElementById('Orta');
var zor=document.getElementById('Zor');
var karisik=document.getElementById('karisik');
var seviye=document.querySelector('.seviye');


function gameOverolunca(){
     contener.style.display='flex';	
 Gameover.style.display='none';
saniye=60;

seviye.style.display='none';
deger=window.setInterval('saniyeBaslat()',1000);

    sayac=0;
    sayacyanis=0;
    Sayacyanlis.textContent='0'
    Sayac1.textContent='0';
    document.getElementById('saniye').innerHTML='60';


}


kolay.addEventListener('click',e=>{


yenileme(6,5);
sonuBTN(6,5);
enterPress(6,5);
 gameOverolunca();

})


orta.addEventListener('click',e=>{
     
yenileme(10,10);

 gameOverolunca();
sonuBTN(10,10);
enterPress(10,10);

})

zor.addEventListener('click',e=>{
   
yenileme(50,50);



 gameOverolunca();
sonuBTN(50,50);
enterPress(100,100)

})



function sonuBTN(s1,s2){

    SonucBTN.addEventListener('click',e=>{
 
  if(inputyazi.value===''){
     cıktı.textContent='Boşluk var';
    cıktıopascity();

     }
 
     else if( inputyazi.value !=resualt){
 
    if(  isNaN(inputyazi.value) ) {
    cıktı.textContent='Sayı girin';
        inputyazi.value='';
        cıktıopascity();
     }
     else{
     //cıktı.textContent=resualt;
     inputyazi.value='';
        //////////buraya yazacan
        sayacyanis++;
        Sayacyanlis.textContent=sayacyanis;
     cıktıopascity();
     }
     }
    else{
           sayac++;
            cıktı.textContent='Cevap doğru :)';
             cıktıopascity();
              yenileme(s1,s2);
        Sayac.textContent=sayac;
          console.log(sayac+ 'artı  sayac');
    }

})
}






function saniyeDurdur()
  {
	window.clearInterval(deger);

   

  }
function saniyeBaslat()
{
	saniye --;
	if(saniye >=0){
		document.getElementById('saniye').innerHTML=saniye;
	}else{
		window.clearInterval(deger);
		
         contener.style.display='none';	
         Gameover.style.display='block';	
    
	}
}


newGameBtn.addEventListener('click',e=>{
    seviye.style.display='flex';	
     Gameover.style.display='none';
   
    
})
