for (let i1 = 0;i1 < 101; i1++) {

    let miltiple = 5;
    let multiple = 3;

    if ((i1 % multiple) === 0) {
        console.log(i1  +  " fizz " );
    }

    else if ((i1 % miltiple) === 0){
        console.log(i1 + " buzz " );
    }

    if (i1 % multiple && i1 % miltiple === 0) {
        console.log(i1 + " fizzbuzz " );
    }

    else{
        console.log(i1 + "n'est pas un multiple de " + multiple + "ou" + miltiple + "le nombre est" + i1 );
    }
}