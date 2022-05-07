const HAMBURGER_BUTTON = 'div[class=bm-burger-button]'
const LOGOUT = '#logout_sidebar_link'

class InventoryPage{

    inventoryURL(){
        return cy.url();
    }

    hamburgerButton(){
        return cy.get(HAMBURGER_BUTTON);
    }
    
    logoutButton(){
        return cy.get(LOGOUT);
    }

    isLoggedInSuccessfully(){
        this.inventoryURL().should('contains', 'inventory.html')
    }

    userLogout(){
        this.hamburgerButton().click();
        this.logoutButton().click();
    }
}

const inventoryPage = new InventoryPage();
export default inventoryPage;