console.log("Up and running!");




var cards = 
[
{rank:'queen',suit:'hearts',cardImage:'images/queen-of-hearts.png'},
{rank:'queen',suit:'diamonds',cardImage:'"images/queen-of-diamonds.png"'},
{rank:'king',suit:'hearts',cardImage:'images/king-of-hearts.png'},
{rank:'king',suit:'diamonds',cardImage:'images/queen-of-diamonds.png'}	
];
var cardsInPlay = [];

var checkForMatch = function()
{
	if (cardsInPlay[0] === cardsInPlay[1])
	{
		alert("You found a match!");
	}
	else
	{
		alert("Sorry, try again.");
	}
};

var flipCard = function (cardId)
{
cardsInPlay.push(cards[cardId].rank);

console.log("User flipped " + cards[cardId].rank);

if (cardsInPlay.length === 2)
{
	checkForMatch();
}
console.log(cards[cardId].cardImage);
console.log(cards[cardId].suit)
};

var createBoard  = function()
{
	for (var i = 0; i < cards.length; i++) 
	{
		var cardElemen;
		cardElemen = document.createElement("img");
		cardElement.setAttribute("src", "images/back.png");
		cardElement.setAttribute("data-id",i);
		cardElement.addEventListener("click",flipCard);
   		document.body.appendChild(cardElemen);
   	cardElement.setAttribute('src', "images/back.png");
	}
};
//flipCard(0);//flipCard(2);
createBoard ();

