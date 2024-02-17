function snsMistype30day() {

            var newDate = document.getElementById('reDateInputBox').value;
           
            var template = "<br>Hey there,"+
                "<br>"+
                "<br>Thanks for reaching out! We’re sorry you couldn’t redeem your daily drink with Sip and Save –" +
                "<br>we’re here to help." +
                "<br>"+
                "<br>We checked and couldn’t find your phone number in our Sip and Save system – that means a "+
                "<br>different number was entered on the touch screen when you signed up. No worries, though –"+
                "<br>we’ve restarted your subscription with your phone number starting today, and valid until " + newDate +"."+
                "<br>"+
                "<br>When you want to redeem your daily drink at checkout, let our cashier know and enter your "+
                "<br>phone number on the touch screen with the Sip and Save banner. This will bring up your "+
                "<br>subscription and total out your drink purchase. If you enter your phone number and the screen "+
                "<br>asks you to re-purchase your subscription, even though your subscription is still active, there "+
                "<br>may be an issue with that screen. If this happens, let the cashier know and they’ll help you try "+
                "<br>again."+
                "<br>"+
                "<br>Feel free to reach out if you have any other questions or issues! You can reach us at 855-276-"+
                "<br>1947."+
                "<br><br>"+
                "<br>Please make sure to keep your receipts! If the number is entered incorrectly next time and no receipt"+
                "<br>is present, we will be unable to compensate. Thank you! <br>"+
                "<br>"+
                "Have a great day,";

        
            document.getElementById('outputDiv').innerHTML = template;
        }