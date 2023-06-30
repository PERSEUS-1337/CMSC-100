window.onbeforeunload = function() {
    return "Dude, are you sure you want to leave? Think of the kittens!";
}

const form = document.getElementById('user-form');
function showInput() {
    let inputArray = [];
    let clear = true;
    Array.from(form.elements).forEach(input => {
        if (input.type != 'button') {
            var ul = document.getElementById('list');
            var li = document.createElement("li");
            if ((input.type === 'radio' && input.checked) || input.type != 'radio')  {
                inputArray.push(input.value);
            }
        }
    })
    for (i = 0; i < inputArray.length-1; i++) {
        if (inputArray[i] === '') {
            clear = false;
            break;
        }
    }

    if (clear) {
        for (i = 0; i < inputArray.length-1; i++) {
            var ul = document.getElementById('list');
            var li = document.createElement("li");
            li.appendChild(document.createTextNode(inputArray[i]));
            ul.appendChild(li);
        }
    }
}