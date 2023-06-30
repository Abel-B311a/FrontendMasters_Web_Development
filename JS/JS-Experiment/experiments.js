console.log("Hello from JS");
const mr = 4000;
const yr = mr *12;
console.log(yr);



const myname = `Bella's`
console.log(myname);



const firstname = `Abel`
const fathersname = `Ali`
const sentence = `I go by the name ` + firstname + ` ` + fathersname + ` A.K.A Bella`
const sentence2 = `I go by the name ${firstname} ${fathersname} A.K.A Bella`
console.log(sentence)
console.log(sentence2);




let BellaIsChis = true

if (BellaIsChis) {
  console.log (`Bella is Chis`)}
  else {
    console.log(`C'mon dude Bella is alwasy chis`);   
}




let BellasWeight = 51

if (BellasWeight === 52.5) { console.log(`Emmm okay`)}
else if (BellasWeight > 52.5){console.log('The world is come to an end')}
else {console.log(`Can a person go skinny than this?`)}




let AmansBodyCount = 0
while (AmansBodyCount < 10) {
  AmansBodyCount = AmansBodyCount +1
  console.log(`Aman's body count is ` + AmansBodyCount);
}
  console.log(`Aman reached double digits`);




let AmansBCount = 0
for (let i=0; i<10; i++) {
    AmansBCount++;
    console.log(`Aman's body count is ` + AmansBCount)
  }
  console.log("Aman reached double digits")





const character = `🐶`
for (let i=0; i<10; i++) {
  console.log(character)    
}

console.log(``.padStart(10,character));




function addtwo(number) {
  return number + 2 
}
  const answer = addtwo(3)
  console.log(answer)




function FAN(memberName, BC) {
  return `${memberName} has a ${BC} bodycount`
}
const Ans = FAN(`Boka`, `0`)
console.log(Ans);




const Fanmember = `ABD`;
const Chismeter = `110%`;

function Fanchis(Fanmember, Chismeter) {

}
console.log(`${Fanmember} chisness level = ${Chismeter}`)
