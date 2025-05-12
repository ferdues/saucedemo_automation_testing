
class PurchaseObjects{
    
    get productOne(){
        return $('#add-to-cart-sauce-labs-backpack');
    }

    get productTwo(){
        return $('#add-to-cart-sauce-labs-bike-light');
    }

    get productThree(){
        return $('#add-to-cart-sauce-labs-bolt-t-shirt');
    }

    get cartBtn(){
        return $('.shopping_cart_link'); 
    }

    get checkoutBtn(){
        return $('#checkout');
    }

    get firstName(){
        return $('#first-name');
    }
    get lastName(){
        return $('#last-name');
    }

    get postalCode(){
        return $('#postal-code');
    }
    get purchaseContinue(){
        return $('#continue');
    }
    
    get finishBtn(){
        return $('#finish');
    }

}

module.exports = new PurchaseObjects();