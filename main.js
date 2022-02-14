// js code
// part 1
let part1 = document.querySelector('.part1');
let part1Btn = document.querySelector('.part1 button');

//part 2
let part2 = document.querySelector('.part2');
let part2ex = document.querySelector('.part2ex');
let part2str = document.querySelector('.part2str');

//part 3
let part3 = document.querySelector('.part3');

// part4
let part4 = document.querySelector('.part4');
let part4text = document.querySelector('.part4 .text');
//user 
let userpart = document.querySelector('.userInfo');
let letgo = document.querySelector('.letgo')
let firstName = document.querySelector('.Finame') ;
let lastName = document.querySelector('.Liname') ;
let disadd = document.querySelector('.option');

// time makeing
let timer = document.querySelector('.need small');
let counterdown;
function startime(timeres){
    counterdown = setInterval(timers, 1000)
    function timers(){
        timer.textContent=timeres
        timeres--
        if(timeres < 10){
            timer.textContent = '0' + timeres
        }
        if(timeres<0){
            clearInterval(counterdown);
            timer.textContent = '00';
            
            for(let i = 0; i < disadd.children.length; i++){
                disadd.children[i].classList.add('disabled')
            }
        document.querySelector('.nextbtn').classList.add('d-inline');

        }
    }
}


// first page work
part1Btn.addEventListener('click', function(){
    part2.style.display = 'block';
    part1.style.display = 'none';
});

// second page work
part2ex.addEventListener('click', function(){
    part2.style.display = 'none';
    part1.style.display = 'block';
    document.querySelector('.nextbtn').classList.add('d-none');

});


// start 

part2str.addEventListener('click', function(){
    userpart.style.display = 'block';
    part2.style.display = 'none';
    
});

console.log(firstName.value)
letgo.addEventListener('click', function(){
    if(firstName.value === '' &&  lastName.value === ''){
        alert('Pleace Enter your Name');
    }else{
        userpart.style.display = 'none';
        part3.style.display = 'block';
        queactioninfo(0);
        startime(countri)
    }
   
});




// queaction make here

let perqueaction = [
    {
        idl : 1,
        queaction : 'Where is the capital of Bangladesh?',
        answar : 'Dhaka',
        options: [
            'Rongpur',
            'Chittagong',
            'Dhaka',
            'Sylhet',
        ]
    },
    {
        idl : 2,
        queaction : 'what is bangladesh national flower?',
        answar : 'Water Lily',
        options: [
            'Roses',
            'Water Lily',
            'SunFlower',
            'Rhinoceros flowers',
        ]
    },
    {
        idl : 3,
        queaction : 'Where is the largest nuclear power in Bangladesh?',
        answar : 'Rooppur ',
        options: [
            'Narayagonj',
            'Chittagong',
            'Dhaka',
            'Rooppur ',
        ]
    },
    {
        idl : 4,
        queaction : 'Where is the largest gas extraction in Bangladesh?',
        answar : 'Sylhet Division',
        options: [
            'Chittagong Division',
            'Dhaka Division',
            'Sylhet Division',
            'Rajshahi Division',
        ]
    },
    {
        idl : 5,
        queaction : 'Which district has the largest haor area in Bangladesh?',
        answar : 'Moulvi Bazar',
        options: [
            'Moulvi Bazar',
            'Comilla',
            'Narayagonj',
            'Bharmonbaria'
        ]
    },
    {
        idl : 6,
        queaction : 'which is the biggest district in bangladesh?',
        answar : 'Chittagong',
        options: [
            'Dhaka',
            'Comilla',
            'Sylhet',
            'Chittagong'
        ]
    }
];


function queactioninfo(index){
    let ids = perqueaction[index].idl;
    let name = perqueaction[index].queaction;
    let addingall = ids +'. ' + name;
    let finds = document.querySelector('.nosl');
    finds.innerText = addingall;


    let optionShow = '<p>' + perqueaction[index].options[0] + '</p>'
                    + '<p>' + perqueaction[index].options[1] + '</p>'
                    + '<p>' + perqueaction[index].options[2] + '</p>'
                    + '<p>' + perqueaction[index].options[3] + '</p>'
  
    let addquiz = document.querySelector('.option');
    addquiz.innerHTML = optionShow;
    
    let allsetattr= addquiz.children.length;
    for(let i = 0; i < allsetattr; i++){
        addquiz.children[i].setAttribute('onclick', 'myfucdoall(this)')
    }

    
    document.querySelector('.runoptio').innerText = perqueaction[index].idl;
    document.querySelector('.fixedop').innerText = perqueaction.length;
}

let counts = 0;
let countri = 15;
let pointcount = 0;

let nexbtn = document.querySelector('.nextbtn');
nexbtn.addEventListener('click', function(){
    if(counts < perqueaction.length -1){
        counts++
        queactioninfo(counts);
    }else{
        winpage()
        console.log('Your Task Is Complate')
    }
    clearInterval(counterdown);
    startime(countri)
    nexbtn.style.display = 'none';
    
});
let check = '<i class="fa-solid fa-check"></i>';
let cross = '<i class="fa-solid fa-xmark"></i>';

function myfucdoall(answar){
    clearInterval(counterdown);

    let useranswar = answar.textContent;
    let mainanswat = perqueaction[counts].answar;
    let findsn = disadd.children.length;
    if(useranswar == mainanswat){
        pointcount += 1;
        console.log(pointcount)
        answar.classList.add('bg-success');
        answar.classList.add('text-light');
        answar.insertAdjacentHTML('beforeend', check)
    }else{
        answar.classList.add('bg-danger');
        answar.classList.add('text-light');
        answar.insertAdjacentHTML('beforeend', cross)

        for(let i = 0; i < findsn; i++){
            if(disadd.children[i].textContent == mainanswat){
                disadd.children[i].setAttribute('class', 'bg-success');
            }
        }   
    }
    for(let x = 0; x < findsn; x++){
        disadd.children[x].classList.add('disabled');
    }
    nexbtn.style.display = 'inline-block';
}

function winpage(){
    part4.style.display = 'block';
    part3.style.display = 'none';
    part4text.innerHTML = `${firstName.value} ${lastName.value} You Win ${pointcount} out of ${perqueaction.length}`
}
let quitsl = document.querySelector('.quit');
let quitsls = document.querySelector('.replay');

quitsl.addEventListener('click', function(){
    window.location.reload()

});


