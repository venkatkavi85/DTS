const message = "Hey, Karunambika, I'm Your cute Husband";
console.log(message);
const backpack = {
    name : "Kavi's cute bag",
    $tell : "What to tell",
    color : "green",
    pocketNo : 5,
    bagSize : {
            left : 85,
            right : 58,
    },
};
console.log(backpack);

class Backpack
{
    constructor( name1 , volume , color , strapLengthL , strapLengthR , lidOpen , dataAcquired)
    {
        this.name1 = name1;
        this.volume = volume;
        this.color = color;
        this.strapLength = {
            left = strapLengthL,
            right = strapLengthR,
        };
        this.lidOpen = lidOpen;
        this.dataAcquired = dataAcquired;
    }

}
