type Dog = {
    legs: 4;
    bark: () => void;
};

type Fish = {
    fins: 2;
    swim: () => void;
};

let pet: Dog | Fish;

function isDog(pet: Dog | Fish): pet is Dog {
    return 'bark' in pet;
}

if (isDog(pet)) {
    pet.bark();
} else {
    pet.swim();
}

export { };

// OR


type OneOrTwo = 1 | 2;
let value: OneOrTwo;
value = 1;
value = 2;


type YesOrNo = 'yes' | 'no';
let answer: YesOrNo;
answer = 'yes';
answer = 'no';

export { };


