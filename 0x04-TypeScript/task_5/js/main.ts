interface MajorCredits {
  credits: number;
  _majorBrand: 'major';
}

interface MinorCredits {
  credits: number;
  _minorBrand: 'minor';
}

function sumMajorCredits(subject1: MajorCredits, subject2: MajorCredits): MajorCredits {
  return { credits: subject1.credits + subject2.credits, _majorBrand: 'major' };
}

function sumMinorCredits(subject1: MinorCredits, subject2: MinorCredits): MinorCredits {
  return { credits: subject1.credits + subject2.credits, _minorBrand: 'minor' };
}

const major1: MajorCredits = { credits: 3, _majorBrand: 'major' };
const major2: MajorCredits = { credits: 4, _majorBrand: 'major' };
const minor1: MinorCredits = { credits: 1, _minorBrand: 'minor' };
const minor2: MinorCredits = { credits: 2, _minorBrand: 'minor' };

console.log(sumMajorCredits(major1, major2)); // { credits: 7, _majorBrand: 'major' }
console.log(sumMinorCredits(minor1, minor2)); // { credits: 3, _minorBrand: 'minor' }
