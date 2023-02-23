(function () {
    let screen =document.querySelector('.screen');
    let buttons =document.querySelectorAll('.btn');
    let clear =document.querySelector('.btn-cancel');
    let equal =document.querySelector('.btn-equal');

    buttons.forEach(function(button)
    {
        button.addEventListener('click',function(e){
            let value=e.target.dataset.num;
            if(value!=undefined)
            {screen.value+=value;
            // console.log(screen.value);
        }
        })
    })
    equal.addEventListener('click',function(e)
    {
        if (screen.value==='') {
            screen.value="Please Enter";
        }
        else{
            // console.log(screen.value);
            let answer=eval(screen.value);
            // console.log(answer);

            screen.value=answer;
        }
    })
    clear.addEventListener('click',function(e){
        screen.value="";

    })
})();