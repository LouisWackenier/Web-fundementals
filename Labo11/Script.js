//1. Maak variabelen aan voor naam, voornaam, woonplaats. Log naar de console: "Hallo, ik ben
//Bert Sterkx en woon in Antwerpen". Vervang hierbij mijn gegevens door de inhoud van jouw
//variabelen.
//let voornaam = "Louis";
//let achternaam = "Wackenier";
//let woonplaats = "Brasschaat";
//
//console.Log("Hallo, ik ben", voornaam, achternaam, "en woon in", woonplaats);

//2. Log naar de console "In een jaar zijn er x uren”, waarbij x het aantal uren in een jaar zijn.
//Gebruik en ken waarden toe aan volgende variabelen: urenInEenJaar, urenInEenDag,
//dagenInEenJaar en bereken x.
//let x = 360 * 24;
//
//console.log("Het aantal uren in een jaar is:", x);

//3. Op dezelfde manier bereken je het aantal minuten in een decennium. Kies hier zelf goede
//namen voor de variabelen die je gaat gebruiken. Log het resultaat naar de console.
//let x = (60 * 24) * 360 * 10;
//
//console.log("Het aantal minuten in een decenia is", x)

//4. Hoeveel seconden oud ben jij? Bereken op basis van je leeftijd in jaren. In dagen mag uiteraard
//ook. Log het resultaat naar de console.
//let x = (60 * 24 * 360) * 19;
//
//console.log("Ik ben", x, "minuten oud")

//5. Als een persoon 912 miljoen seconden oud is, hoeveel jaar is deze persoon dan? Log het
//resultaat naar de console.
//const x = 912000000/ 60 / 60 / 24 / 365
//
//console.log("deze persoon is", x, "jaren oud")

//6. Je maakt 2 variabelen aan voor de basis en de hoogte van een rechthoek en noemt ze:
//basisInCm en hoogteInCm. Je kent ze respectievelijk de waarden 2 en 3 toe. Je berekent op basis
//van de variabelen de oppervlakte en de omtrek van de rechthoek en logt de 2 zinnetjes naar de
//console.
//var basisInCm = 2;
//var hoogteInCm = 3;
//
//var oppervlakte = basisInCm * hoogteInCm;
//var omtrek = basisInCm * hoogteInCm;
//
//console.log("de opervlakte in cm is:", oppervlakte); 
//console.log("de omtrek in cm is:", omtrek);

//7. Je maakt 2 variabelen aan en noemt ze: a en b. Je kent aan elk van hen een getal toe. Je kijkt
//na of a groter is dan b en logt in dat geval "a is groter dan b" naar de console. Indien a kleiner is
//dan b log je "a is kleiner dan b" naar de console.

//var a = 20;
//var b = 10;
//
//if(a > b) {
//    console.log("a is groter dan b")
//}
//else {
//    console.log("a is kleiner dan b")
//}

//8. Een lichte variant op de vorige oefening: Je maakt 2 variabelen aan en noemt ze: a en b. Je
//kent aan elk van hen een getal toe. Je kijkt na of a groter is dan b en logt in dat geval "a is groter
//dan b" naar de console. Indien a kleiner is dan b log je "a is kleiner dan b" naar de console. Maar:
//indien a = b dan log je "a is gelijk aan b" naar de console.
//var a = 10;
//var b = 20;
//
//if(a == b){
//    console.log("de getalen zijn gelijk");
//}
//else if(a > b){
//    console.log("a is groter dan b");
//}
//else {
//    console.log("a is kleiner dan b");
//}

//9. Je maakt een variabele aan en noemt ze dagVanDeWeek. Je geeft ze een zelfgekozen waarde
//van 1 tot 7. Dit getal komt overeen met een dag van de week: maandag = 1, dinsdag = 2 enz.
//Schrijf nu een switch statement waarbij je op basis van de waarde van dagVanDeWeek verwijst
//naar de dag van de week. Als eindresultaat log je volgende zin naar de console, indien
//dagVanDeWeek bvb gelijk is aan 3: "de waarde van DagVanDeWeek = 3, dus vandaag is het
//woensdag".
//var dagVanDeWeek = 0;
//var week = ["Maandag", "Dinsdag", "Woensdag", "Vrijdag", "Zaterdag", "Zondag"];
//var checksum = week[dagVanDeWeek];
//
//console.log("het is vandaag", checksum);

//10. Je maakt een variabele aan voor de temperatuur en vult hem met een waarde. Schrijf nu een
//if-else-if statement met 2 else if voorwaarden (dus 3 voorwaarden in totaal). Je logt op basis van
//de gekozen temperatuur een zinnetje naar de console dat wat commentaar geeft op hoe warm of
//hoe koud het is.
//var temperatuur = 1;
//
//if(temperatuur >= 20) {
//    console.log("het is stupid warm")
//}
//
//else if(temperatuur >= 10) {
//    console.log("het is een beetje koud")
//}
//
//else if(temperatuur >= 0) {
//  console.log("Het is frisjes");
//}




//11. Zelfde opgave als bij vraag tien, maar nu voor de seizoenen van het jaar. Je maakt een
//variabele seizoen aan en kent er een seizoen aan toe. Je maakt een switch statement met cases
//voor elk van de seizoenen en logt een zinnetje naar de console dat een boodschap geeft
//naargelang het seizoen van het moment.
//var DeSezoenen = ["Lente", "Zommer", "Herfst", "Winter"]
//var Sezoen = 3;
//var Checksum = DeSezoenen[Sezoen];
//
//switch (Checksum) {
//    case "Lente":
//        console.log("het is lente woooo");
//        break;
//    case "Zommer":
//        console.log("het is zommer dus veel te warm");
//        break;
//    case "Herfst":
//        console.log("het is herfst dus het wordt frisjes");
//        break;
//    case "Winter":
//        console.log("het is winter lets goooo sneeeeuw");
//    break;
//}
//12. Maak een loop naar keuze (for-loop of while-loop) die alle getallen tussen 1 en 100 één voor
//één naar de console logt. 1, 2, 3, 4 ...
//var number = 0;
//
//while (number < 11){
//    console.log(number++);
//}

//13. Doe het zelfde (van 1 tot 100) maar voor alle veelvouden van 5: 5, 10, 15, 20, 25 ...
//var number = 0;
//
//while (number < 100) {
//    console.log(number += 5);
//}

//14. Je maakt een variabele aan en noemt ze getal. Je kent er het getal 800 aan toe. Je gaat voor
//dat getal na of het al dan niet deelbaar is door 3, al dan niet deelbaar door 5 en tenslotte al dan
//niet tegelijk deelbaar door 3 en door 5. Je logt telkens het resultaat naar de console: "800 is (niet)
//deelbaar door ..."
var getal = 800;
if (getal / 3) {
    console.log(getal, "is niet deelbaar door 3")
} 
else (getal / 5) {
    console.log("800 is deelbaar door 5:", getal / 5)
}

//15. De som van alle natuurlijke getallen die kleiner zijn dan tien die veelvouden zijn van 3 of van 5
//is 23. Hiermee bedoel ik 3 + 5 + 6 + 9 die samengeteld 23 zijn. Laat de computer de som
//berekenen van alle natuurlijke getallen die kleiner zijn dan 1000 en die veelvoud zijn van 3 of 5.
//Log het eindresultaat naar de console.


//16. De FizzBuzz challenge! Je gebruikt de while-loop om alle getallen van 1 tot en met 100 te
//loggen naar de console. Maar: wanneer een getal deelbaar is door 3 dan log je het woord Fizz
//naar de console. Wanneer een getal deelbaar is door 5 dan log je het woord Buzz naar de
//console. Tenslotte: wanneer het getal deelbaar is door 3 Ã©n door 5, dan log je het woord
//FizzBuzz naar de console. Bvb: 1, 2, "Fizz", 4, "Buzz", "Fizz", 7, 8, "Fizz", "Buzz", 11, "Fizz", 13,
//14, "Fizzbuzz", 16...


//17. Maak een array aan met daarin de volgende elementen: "Theo Van Doesburg", "Piet
//Mondriaan", " Bart van der Leck", "Gerrit Rietveld", "Georges Vantongerloo". Je geeft deze array
//de naam deStijl. Vervolgens ga je met een loop één voor één alle elementen in de array af en je
//logt ze naar de console.


//18. Je maakt een nieuwe array aan. Je noemt ze kunstenaars. Ze bevat de volgende namen:
//"Pablo Picasso", "Amedeo Modigliani" en "Edouard Manet". Je logt één voor één met een loop de
//elementen naar de console (zoals in vraag 6). Vervolgens voeg je vooraan de array het element
//"Claude Monet" toe. Daarna verwijder je "Pablo Picasso" uit de array. Daarna, in een afzonderlijk
//statement verwijder je "Amedeo Modigliani". Tot slot voeg je aan het einde van de array het
//element met inhoud "Edgar Degas" toe. Je eindigt met een loop waarin je nogmaals alle
//elementen van de array logt naar de console.


//19. Je maakt een string aan met daarin de zin: "Edgar Degas was a French artist famous for his
//paintings, sculptures, prints, and drawings. He is especially identified with the subject of dance;
//more than half of his works depict dancers. Regarded as one of the founders of Impressionism,
//he rejected the term, preferring to be called a realist.". Je geeft hem een naam naar keuze. Met de
//slice() method knip je het stukje "French artist" uit de string en logt het naar de console. Daarna
//knip je met substr() het stuk "He is especially identified" uit de string en logt dit stukje eveneens
//naar de console. Vervolgens vervang je het woord "founders" door "founding fathers". Je logt tot
//slot de volledige string - helemaal in hoofdletters! - nog eens naar de console.


//20. Je maakt een lege array aan met als naam willekeurigeGetallen. Vervolgens maak je een loop
//die exact twintig keer loopt. Telkens (dus 20x) ga je met Math.random() een willekeurig getal
//genereren en dit met de push()-method toevoegen aan de array. Je logt vervolgens de inhoud van
//de array naar de console. Je zal zien dat de array nu bestaat uit 20 elementen, telkens een getal
//tussen 0 en 1. Tot slot bezoek je met een loop elk element van de array en je berekent de som van
//alle elementen uit die array. Je logt de som naar de console.


//21. Je maakt een array aan die er als volgt uitziet: let mijnArray = [[3,"hoera"],[2,"joehoe"],
//[4,"hehe"]]; Merk op dat deze array bestaat uit 3 elementen, elk op hun beurt een array bevatten.
//Dat is namelijk perfect mogelijk :-) Je gaat nu met een loop elk element uit de array bezoeken. Je
//opent de elementen één voor één (dus ook een array). Je zorgt ervoor dat het tweede element van
//deze array (de string) telkens het aantal keer naar de console wordt gelogd als het getal dat je
//terugvindt in het eerste element. Dus 3x hoera, 2x joehoe en 4x hehe. Je zal dus een loop
//moeten schrijven binnen de buitenste loop. Tip: mijnArray[1][1] geeft "joehoe".