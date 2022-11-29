// Returns a random DNA base
const returnRandBase = () => {
  const dnaBases = ['A', 'T', 'C', 'G']
  return dnaBases[Math.floor(Math.random() * 4)] 
}

// Returns a random single strand of DNA containing 15 bases
const mockUpStrand = () => {
  const newStrand = []
  for (let i = 0; i < 15; i++) {
    newStrand.push(returnRandBase())
  }
  return newStrand
}

const pAequorFactory = (number, dnaBaseArr) => {
  return {
    specimenNum: number,
    dna: dnaBaseArr,
    mutate() {
      const randElement = Math.floor(Math.random() * 15);
      let randBase = this.dna[randElement];
      if (randBase === 'A') {
        console.log(randBase);
        const otherBases1 = ['T', 'C', 'G'];
        randBase = otherBases1[Math.floor(Math.random() * 3)];
        console.log(randBase);
        return this.dna[randElement] = randBase;
      } else if (randBase === 'T') {
        console.log(randBase);
        const otherBases2 = ['A', 'C', 'G'];
        randBase = otherBases2[Math.floor(Math.random() * 3)];
        console.log(randBase);
        return this.dna[randElement] = randBase;
      } else if (randBase === 'C') {
        console.log(randBase);
        const otherBases3 = ['A', 'T', 'G'];
        randBase = otherBases3[Math.floor(Math.random() * 3)];
        console.log(randBase);
        return this.dna[randElement] = randBase;
      } else if (randBase === 'G') {
        console.log(randBase);
        const otherBases4 = ['A', 'T', 'C'];
        randBase = otherBases4[Math.floor(Math.random() * 3)];
        console.log(randBase);
        return this.dna[randElement] = randBase;
      }
      return this.dna;
      },
      compareDNA(sample2) {
        let commonDNA = 0;
        let commonPct = 0;
        for (let i = 0; i < this.dna.length; i++) {
          if (this.dna[i] === sample2.dna[i]) {
            commonDNA += 1;
          }
        }
        commonPct = ((commonDNA/this.dna.length) * 100).toFixed();
        console.log(`Specimen #${this.specimenNum} and specimen #${sample2.specimenNum} have ${commonPct}% DNA in common`);
        return commonPct;
      },
      willLikelySurvive() {
        let dnaCount = 0;
        for (let i = 0; i < this.dna.length; i++) {
          if (this.dna[i] === 'C' || this.dna[i] === 'G') {
            dnaCount += 1;
          }
        }
        if (((dnaCount/this.dna.length) * 100) >= 60) {
          return true;
        } else {
          return false;
        }
      },
      complementStrand() {
        const compStrand = [];
        for (let i = 0; i < this.dna.length; i++) {
          if (this.dna[i] === 'A') {
            compStrand[i] = 'T';
          } else if (this.dna[i] === 'T') {
            compStrand[i] = 'A';
          } else if (this.dna[i] === 'C') {
            compStrand[i] = 'G';
          } else {
            compStrand[i] = 'C';
          }
        }
        return compStrand;
      }
    }
};

// const dna1 = pAequorFactory(1, mockUpStrand());

// const dna2 = pAequorFactory(2, mockUpStrand());
// console.log(dna1);
// console.log(dna2);
// dna1.compareDNA(dna2);
// console.log(dna1.willLikelySurvive());

let pAequorCount = 1;
const pAequorSurvivors = [];
// pAequorSurvivors.length = 30;
// console.log(pAequorSurvivors.length);

while (pAequorCount <= 30) {
  let pAequorTemp = pAequorFactory(pAequorCount, mockUpStrand());
  // console.log(pAequorTemp.willLikelySurvive());
  if (pAequorTemp.willLikelySurvive() === true) {
      pAequorSurvivors.push(pAequorTemp);
      // console.log(pAequorSurvivors);
      pAequorCount++;
  }
}

// console.log(pAequorSurvivors);

// const dna3 = pAequorFactory(3, mockUpStrand());
// console.log(dna3.dna);
// console.log(dna3.complementStrand());