import "./styles.css";

const dicecount = 3;
const sidescount = 6;

let die = [...Array(6).keys()].map((s) => ++s);
let dice = [];
for (let d = 0; d < dicecount; d++) {
  dice.push([...die]);
}

dice.forEach((n) => {
  console.log(n);
});

// t=this o=other
let combinations=[]

let min = 0;
let max = Math.pow(sidescount,dicecount) -1;

console.log('minmax',min,max);

for(let n=min;n<=max;n++) {
  let results=[];
  let sum=n;
  for(let d=dicecount;d>0;d--) {
    let value = Math.floor((sum / Math.pow(sidescount, d -1)));
    //console.log ("d,s,v",d,sum,value);
    sum -= (Math.pow(sidescount, d-1) * value);
    results.push(value+1);
  }
  //console.log(n,results);
  combinations.push(results);
}

console.log(combinations);

// for (let tdie = 1; tdie < dicecount + 1; tdie++) {
//   for (let tside = 1; tside < sidescount +1; tside++) {
//     let sum=tside;
//     console.log(tside);
//     for (let odie = tdie + 1; odie < dicecount; odie++) {
//       for (let oside = 0; oside < sidescount; oside++) {
//         sum+=oside;
//         console.log("->" + oside);
//         combinations.push({sum:sum})
//       }
//     }
//   }
// }

document.getElementById("app").innerHTML = `
<h1>Hello Vanilla!</h1>
<div>
  We use the same configuration as Parcel to bundle this sandbox, you can find more
  info about Parcel 
  <a href="https://parceljs.org" target="_blank" rel="noopener noreferrer">here</a>.
</div>
`;
