var checkx = [];
var checky = [];
var i=0;
var j=0;
var k=0;
var draw=0;
var dup=0;
var n=0;
var stp=0;
var stp2=0;
function checkdup(x){
    for(n=0;n<checkx.length;n++){
        if(x==checkx[n]||x==checky[n]){
            dup=1;
            console.log(x);
            console.log(checkx[n]);
           
        }
    }
}

function whowins(){
    
    for(i=0;i<4;i++){
        for(j=i+1;j<5;j++){
            for(k=j+1;k<6;k++){

                if (checkx[i]==1&&checkx[j]==5&&checkx[k]==9||checkx[i]==1&&checkx[j]==2&&checkx[k]==3||
                    checkx[i]==1&&checkx[j]==4&&checkx[k]==7||checkx[i]==2&&checkx[j]==5&&checkx[k]==8||
                    checkx[i]==3&&checkx[j]==6&&checkx[k]==9||checkx[i]==3&&checkx[j]==5&&checkx[k]==7||
                    checkx[i]==4&&checkx[j]==5&&checkx[k]==6||checkx[i]==7&&checkx[j]==8&&checkx[k]==9){
        
                    document.getElementById("win").innerHTML = "Player Win!";
                    stp=1;
                    draw=1;
                    
                }
                else if(
                    checky[i]==1&&checky[j]==5&&checky[k]==9||checky[i]==1&&checky[j]==2&&checky[k]==3||
                    checky[i]==1&&checky[j]==4&&checky[k]==7||checky[i]==2&&checky[j]==5&&checky[k]==8||
                    checky[i]==3&&checky[j]==6&&checky[k]==9||checky[i]==3&&checky[j]==5&&checky[k]==7||
                    checky[i]==4&&checky[j]==5&&checky[k]==6||checky[i]==7&&checky[j]==8&&checky[k]==9){
                    document.getElementById("win").innerHTML = "Bot Win!";
                    draw=1;
                    stp=1;
                    stp2=1;
                }

        
            }
        }
   
    }
}


function input1(x){
    
    const image = document.querySelector('img');
    document.getElementById(x).src = "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRbx_GthMuABJH-mUkHpVCoSt7b9wpeTZf7FQ&usqp=CAU";
   
        checkx.sort();
        checky.sort();
        whowins();
        console.log(checkx);
        console.log(checky);



       if(draw==0&&checkx[0]!=undefined&&checkx[1]!=undefined&&checkx[2]!=undefined
        &&checkx[3]!=undefined&&checkx[4]!=undefined&&checky!=undefined&&
        checky[1]!=undefined&&checky[2]!=undefined&&checky[3]!=undefined){
            
            draw=1;
            document.getElementById("win").innerHTML = "Draw!";
    
    }
    image.removeEventListener('click',input1);


}

function input2(x){

    checkdup(x);
    checkx.push(x);
    console.log("x= "+x);
    var y = Math.floor(Math.random() * 9)+1; 
    const image = document.querySelector('img');
    


if(checkx.length > 4|| stp==1 || stp2==1){
     checkdup(x);
     console.log("dup = "+dup);
    if(stp==0&&stp2==0){
        image.addEventListener('click', input1(x));
        
        } 
       
   
}

else{
var a=0;
    while(a==0){
        
        if(y==checky[0]||y==checky[1]||y==checky[2]||y==checky[3]||y==checkx[0]||y==checkx[1]||y==checkx[2]||y==checkx[3]||y==checkx[4]){
            y = Math.floor(Math.random() * 9)+1; 
        }

        else{
            console.log("end while");
            a=1;
        }
}    

    if(dup==0){
    a=0;
    checky.push(y);
    image.addEventListener('click', input1(x));

    if(stp==0){
    image.addEventListener('click', input1(x));
    document.getElementById(y).src = "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSw02k5WV61vsXmPqfumjsAlI6KqbEsGrIPsw&usqp=CAU";
    }    
    if(stp2==1){
        document.getElementById(y).src = "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSw02k5WV61vsXmPqfumjsAlI6KqbEsGrIPsw&usqp=CAU";
    }
}
    else{
        
        checkx.pop(x);
        dup=0;
    }
}
    image.removeEventListener('click',input2);
    console.log("y= "+y);
}




  

// Ximage.src ='https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSw02k5WV61vsXmPqfumjsAlI6KqbEsGrIPsw&usqp=CAU';
    
    
    
// Oimage.src = 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRbx_GthMuABJH-mUkHpVCoSt7b9wpeTZf7FQ&usqp=CAU';
