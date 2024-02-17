function carWashCancelrequest() {

    var cname = document.getElementById('nameInputBox').value;
    var TED = document.getElementById('dateInputBox').value;

    var template ="Hello " +cname+ ", <br>"+  
        
    "<br>Thank you for contacting our customer service team. I received your request regarding canceling your"+  
    "<br>subscription. After reviewing your account, I was able to confirm your subscription did recently renew" +
    "<br>but has stopped. You can still use the subscription till " + TED + ", as you have. On " + TED + " it will"+  
    "<br>not renew but end.<br>"
    +
    "<br>In the future, if you wish to start a new subscription please navigate to the payment method section and"+  
    "<br>update that info, then to the Shop section of your app and select your preferred package. If you have"+ 
    "<br>ny additional questions or if you need assistance, please contact our team through the app as you did"+ 
    "<br>or reply to this email.<br>" 
    +
    "<br>On behalf of Circle K, thank you so much for your business."
    +
    "<br>If you have any additional questions please reach us at (855) 276-1947 - select preferred language -"+ 
    "<br>then option 1. If we are assisting other customers please leave a voicemail and one of our team"+ 
    "<br>members will return your call. ";

    document.getElementById('outputDiv').innerHTML = template;
}