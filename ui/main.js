//counter code
var button = document.getElementById('counter');

button.onclick=function()
{
    //create a request object
    var request = new XMLHttpRequest();
    // caputure response and store it in a variable
    request.onreadystatechange() = function ()
    {
        if(request.readyState === XMLHttpRequest.DONE)
        {
            //TAKE SOME ACTION
            if (request.status === 200)
            {
                    var counter = request.responseText;
                    var span = document.getElementById('counter');
                    span.innerHTML = counter.toString();
            }
        }
        //NOT DONE YET
    };
   request.open('GET','http://http://anjali-pai.imad.hasura-app.io/counter',true);
   request.send(null);
    
};