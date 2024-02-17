function snsDashBlankNotWorking() {
                var cemail = document.getElementById('emailInputBox').value;
                var phnumber = document.getElementById('phnumberInputBox').value;
                var cname = document.getElementById('nameInputBox').value;
        
                var template = "Email: " + cemail + " <br>" +
                    "Phone number: " + phnumber + "<br>" +
                    "Name: " + cname + "<br>" +
                    "Screenshot: Waiting on customer to provide";
        
                document.getElementById('outputDiv').innerHTML = template;
            }