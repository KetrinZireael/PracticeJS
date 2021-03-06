function render(){
    const productsStore = localStorageUtil.getProducts();
    headerPage.render(productsStore.length);

    productsPage.render();
}

spinnerPage.render();

let CATALOG = [];

//https://pastebin.com/wACWACda
//server/catalog.json
fetch('server/catalog.json')
    .then(res => res.json())
    .then(body => {
        CATALOG = body;

        setTimeout(function() {
            spinnerPage.handleClear();
            render();
        }, 1000);
        
    })
    .catch(error => {
        console.log(error);
    });
