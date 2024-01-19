


// 1 

let string = 'Love is the best thing in this world. Some found their love and some are still looking for their love.'
let pattern = /love/gi
console.log(string.match(pattern)) // ["love", "love", "love"]

// 2

let sentenceTwo = 'You cannot end a sentence with because because because is a conjunction';
let patternTwo = /\bbecause\b/gi;
let count = (sentenceTwo.match(patternTwo) || []).length;

console.log(`"because" kelimesi cümlede ${count} kez geçiyor.`);

// 3

const sentenceThree = '%I $am@% a %tea@cher%, &and& I lo%#ve %te@a@ching%;. The@re $is no@th@ing; &as& mo@re rewarding as educa@ting &and& @emp%o@weri@ng peo@ple. ;I found tea@ching m%o@re interesting tha@n any ot#her %jo@bs. %Do@es thi%s mo@tiv#ate yo@u to be a tea@cher!? %Th#is 30#Days&OfJavaScript &is al@so $the $resu@lt of &love& of tea&ching';

// Metni temizleme
const cleanedText = sentenceThree.replace(/[^a-zA-Z\s]/g, ' ');

// Temizlenmiş metni yazdırma
console.log('Temizlenmiş Metin:', cleanedText.trim());

// Temizlenmiş metni kelimelere ayırma
const words = cleanedText.toLowerCase().split(/\s+/);

// Ayırlmış kelimeleri yazdırma
console.log('Kelimeler:', words);

// 4
const incomeText = 'He earns 5000 euro from salary per month, 10000 euro annual bonus, 15000 euro online courses per month.';

// Sayıları bulma
const incomeNumbers = incomeText.match(/\d+/g) || [];

// Değişkenlere atama
const salaryPerMonth = parseInt(incomeNumbers[0]) || 0;
const annualBonus = parseInt(incomeNumbers[1]) || 0;
const onlineCoursesPerMonth = parseInt(incomeNumbers[2]) || 0;

totalAnnualIncome = (salaryPerMonth * 12) + (annualBonus) + (onlineCoursesPerMonth * 12)

console.log('Toplam Yıllık Gelir:', totalAnnualIncome, 'euro');

