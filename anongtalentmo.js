/*
How it will works:

1. The player is required to enter his/her name
2. On button click, random number will be generated and 
it has a corresponding value in an array
3. Output will be the name of the player plus the random value in an array
*/


function PickRandomTalent() {

var talents = ["kaya mo magutom kahit kakakain lang.", 
		"kaya mo na mapagod kahit walang ginagawa.",
		"kaya mo magmahal kahit alam mo na may mahal na syang iba.",
		"kaya mo mafall sa simpleng 'hi'.",
		"kaya mo na maging ok kahit sobrang sakit na.",
		"kaya mo matulog kahit kakagising lang.",
		"kaya mo kumain ng kumain at hindi mabusog.",
		"kaya mo umasa kahit walang pag asa.",
		"kaya mo magmahal ng taong hindi ka mahal.",
		"kaya mo magdemand at magselos kahit walang kayo.",
		"kaya mo tapusin ang isang buong k-drama series ng 1- 2 days."
]

var NumberOfTalents = 11;
// Generate a random number between 1 and NumberOfTalents
var rnd = Math.floor(Math.random() * NumberOfTalents);	

var name = prompt('Ilagay ang iyong pangalan');
	if (name == "" || name == null) {
		document.getElementById('talentbox').innerHTML = "Di ko masasabi hanggat di ko alam ang iyong pangalan";
	} else {
		document.getElementById('talentbox').innerHTML = (name+ ", "+ talents[rnd]);
	}


}	







