chrome.extension.onRequest.addListener(function(request, sender, sendResponse) {
 if (request.action == "getCreditCardExpenses"){
    var tbl = $('.CreditCard.expense').get().map(expense =>  {
        let el = $(expense);
        return {
                date: el.find('td.date').text()
                , description : el.find('td.description').text()
                , category : el.find('td.category>.category-tag>.name').text()
                , value : el.find('td.value').text()
            }
    });
    console.log(tbl);
 }
});