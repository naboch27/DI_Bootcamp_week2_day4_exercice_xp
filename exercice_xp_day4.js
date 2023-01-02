
/****
 * Exercice 1 : Informations
*Des Instructions
*Partie I : fonction sans paramètres 
 * 
 */

infoAboutMe()
infoAboutPerson("coulibaly mouhamed", 30, "blanc")
infoAboutPerson("David", 45, "blue")
infoAboutPerson("Josh", 12, "yellow")
calculateTip()
function infoAboutMe() {
    console.log("Je suis coulibaly mouhamed ,j'ai 30 ans ,j'aime jouer au football")
}

/*****
 * Partie II : fonction à trois paramètres
 * 
 */

function infoAboutPerson(personName, personAge, personFavoriteColor) {
    console.log("Je suis " + personName + " ,j'ai " + personAge + " ans ,j'aime la couleur a " + personFavoriteColor)
}

/*******
 * 
 *  Exercice 2 : Astuces
Des Instructions
John a créé un calculateur de pourboire simple pour aider à calculer le 
montant du pourboire quand lui et sa famille vont au restaurant.
 */

function calculateTip() {
    let user = prompt("pour demander à John le montant de la facture? ")
    let facture = Number(user)

    if (facture < 50) {

        console.log(" laissez un pourboire de 20 %")
        let pourboire = ((facture * 20) / 100)
        console.log("le montant du pourboire " + pourboire)
        FactureTotal = pourboire + facture
        console.log("le montant du pourboire et la facture finale " + FactureTotal)


    } else

        if (facture > 50 || facture < 200) {
            console.log(" laissez un pourboire de 15 %")
            let pourboire = ((facture * 15) / 100)
            console.log("le montant du pourboire " + pourboire)
            FactureTotal = pourboire + facture
            console.log("le montant du pourboire et la facture finale " + FactureTotal)

        } else {

            console.log(" laissez un pourboire de 10 %")
            let pourboire = ((facture * 10) / 100)
            console.log("le montant du pourboire " + pourboire)
            FactureTotal = pourboire + facture
            console.log("le montant du pourboire et la facture finale " + FactureTotal)

        }
}

/********exercice 3*********** */

/*****
 * 
 * Créez un appel de fonction isDivisible()qui ne prend aucun paramètre.
*Dans la fonction, parcourez les nombres de 0 à 500.
*Console.log tous les nombres divisibles par 23.
*À la fin, console.log la somme de tous les nombres divisibles par 23.
 */

isDivisible()
function isDivisible() {
    let NombresDivisible = ""
    let sum = 0
    for (let i = 0; i <= 500; i++) {
        if (i % 23 == 0) {
            NombresDivisible = NombresDivisible + " " + i;
            sum = sum + i
        }
    }
    console.log("Tous les nombres divisibles par 23 sont :" + NombresDivisible)
    console.log("La somme de tous les nombres divisibles par 23 sont :" + sum)
}

/****
 * Bonus : Ajoutez un diviseur de paramètre à la fonction.
 */

/*isDivisible(3)
isDivisible(45)
function isDivisible(divisor){
    let NombresDivisible=""
    let sum=0
    for(let i=0;i<=500;i++){
        if(i%divisor==0){
            NombresDivisible = NombresDivisible + " "+i;
            sum=sum+i
        }
    }
    console.log("Tous les nombres divisibles par "+ divisor+ " sont :"+NombresDivisible)
    console.log("La somme de tous les nombres divisibles par "+ divisor+ " sont :"+sum)
}
*/

/******
    * Exercice 4 : Liste De Courses
    * Créez un tableau appelé shoppingListavec les éléments suivants : "banane", "orange" et "pomme".
    *  Cela signifie que vous avez 1 banane, 1 orange et 1 pomme dans votre panier.
    *Créez une fonction appelée myBill()qui ne prend aucun paramètre.
    *La fonction doit retourner le prix total de votre shoppingList. Pour ce faire, vous devez suivre ces règles :
    *L'article doit être en stock. ( Astuce : vérifier if .. in)
    *Si l'article est en stock, découvrez le prix dans l' pricesobjet.
    *Appelez la myBill()fonction.
 */

const stock = {
    "banana": 6,
    "apple": 0,
    "pear": 12,
    "orange": 32,
    "blueberry": 1
}

const prices = {
    "banana": 4,
    "apple": 2,
    "pear": 1,
    "orange": 1.5,
    "blueberry": 10
}


let shoppingList = Object.keys(stock);

console.log(shoppingList)

function myBill() {
    let shoppingSum = 0
    let test = 0
    for (const property in stock) {
        if (stock[property] > 0) {
            // console.log(`${property}: ${stock[property]} `)
            // console.log(`${property}: ${prices[property]} `)
            shoppingSum = shoppingSum + prices[property]

            /*****
             * Bonus : Si l'article est en stock, diminuez le stock de l'article de 1
             */
            test = stock[property] - 1
            console.log(`${property}: ` + test)
        }

    }

    console.log("shopping sum : " + shoppingSum)

}

myBill()


/***
* Exercice 5 : Qu'y A-T-Il Dans Mon Portefeuille ?
* 
* 
*  Des Instructions
*   Remarque : Lire l'illustration (point 4), tout en lisant les instructions
*  Créez une fonction nommée changeEnough(itemPrice, amountOfChange)qui reçoit deux arguments :
* un prix d'article
*et un tableau représentant le montant de la monnaie dans votre poche.
*Dans la fonction, déterminez si vous pouvez ou non vous permettre l'article.
*Si la somme du changement est supérieure ou égale au prix de l'article (c'est-à-dire que cela
*signifie que vous pouvez vous permettre l'article), la fonction doit renvoyer true
*Si la somme du changement est inférieure au prix de l'article (c'est-à-dire que cela signifie 
*que vous ne pouvez pas acheter l'article), la fonction doit renvoyer false
* Le changement sera toujours représenté dans l'ordre suivant : quarts, dimes, nickels, pennies.
*/

function changeEnough(itemPrice, amountOfChange) {

    let amountSum = 0

    amountSum = ((amountOfChange[0] / 4) + (amountOfChange[1] / 10) + (amountOfChange[2] / 20) + (amountOfChange[3] / 100))

    if (itemPrice < amountSum) {

        return true
    } else {
        return false
    }

}

console.log(changeEnough(4.25, [25, 20, 5, 0]))



/*****
 * 
 * Exercice 6 : Frais De Vacances
  -   Des Instructions
    -Créons des fonctions qui calculent les coûts de vos vacances :
 */

totalVacationCost()

function hotelCost() {

    let nombreNuit

    while (isNaN(nombreNuit) == true) {

        nombreNuit = prompt("Entrez votre séjourner")

    }
    return 140 * nombreNuit
}

function planeRideCost() {

    let destination

    while (destination == "" || isNaN(destination) == false || typeof (destination) !== 'string') {

        destination = prompt("Entrez votre destination")

    }
    if (destination == "Londres") {

        return 183
    } else

        if (destination == "Paris") {

            return 220

        } else {

            return 300
        }
}



function rentalCarCost() {

    let locations
    while (isNaN(locations) == true) {

        locations = prompt("Entrez votre location")

    }
    if (locations > 10) {

        return ((40 * locations * 5) / 100)

    } else {
        return 40 * locations
    }

}

function totalVacationCost() {

    hotelCost()
    planeRideCost()
    rentalCarCost()

    // let sum=hotelCost()+planeRideCost()+rentalCarCost();
    // console.log("total hotel "+hotelCost()+" total destination "+planeRideCost()+" total location "+rentalCarCost()) 
    // console.log("Montant total Vacances "+sum)
}




//console.log(planeRideCost())
//console.log(rentalCarCost())


