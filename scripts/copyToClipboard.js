function copyToClipboard() { // Copy to Clipboard Function
    var copyText = document.getElementById("outputDiv");
    var text = copyText.innerText;
    navigator.clipboard.writeText(text).then(function() {
        console.log('Text copied to clipboard');
    }, function(err) {
        console.error('Error in copying text: ', err);
    });
    }