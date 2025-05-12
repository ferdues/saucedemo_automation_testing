class FilterObjects{

    get porductSort(){
        return $('.product_sort_container');
    }
    get selectFilter(){
        return $('//option[@value="za"]');
    }

    get filterProductOne(){
        return $('#add-to-cart-sauce-labs-onesie');
    }

    get filterProductTwo(){
        return $('#add-to-cart-sauce-labs-fleece-jacket');
    }

    get filterProductThree(){
        return $('#add-to-cart-sauce-labs-bolt-t-shirt');
    }

    get cartBtn(){
        return $('.shopping-cart-link'); 
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
module.exports = new FilterObjects();