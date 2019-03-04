/* create X element */
let xElement = document.getElementsByTagName("li");
for ( let i = 0; i < xElement.length; i++) {
  let span = document.createElement("span");
  let x = document.innerHTML("\u00D7");
  span.className = "close";
  span.appendChild(x);
  xElement[i].appendChild(span);
}

/* close when X is clicked */
let close = document.getElementsByClassName("close");
for (let i = 0; i < close.length; i++) {
  close[i].onclick = function() {
    let div = this.parentElement;
    div.style.display = "none";
  }
}

/* task list */
const addTask = document.querySelector('input.addTask');
const addTaskButton = document.querySelector('button.addTaskButton');

addTaskButton.addEventListener("click", () => {
  if(addTask.value === '') {
    alert('You must write a task')
  } else {
    let ul = document.getElementsByTagName('ul')[0];
    let li = document.createElement('li');
    /* create label to enable line thourgh in when checkbox ticked */
    let label = document.createElement("label");
    let labelText = document.createElement("span");
    labelText.innerText = addTask.value;

    /* create checkBox */
    let checkBox = document.createElement("input");
    checkBox.type = 'checkbox';
    checkBox.addEventListener('change', function() {
      labelText.style.textDecoration = checkBox.checked ? 'line-through' : 'none';
    });

    /* append label and checkbopx to li and ul */
    label.appendChild(checkBox);
    label.appendChild(labelText);
    li.appendChild(label)
    ul.appendChild(li);

    let span = document.createElement("span");
    let x = document.createTextNode("\u00D7");
    span.className = "close";
    span.appendChild(x);
    li.appendChild(span);

    for (let i = 0; i < close.length; i++) {
      close[i].onclick = function() {
        var div = this.parentElement;
        div.style.display = "none";
      }
    }
  }
  addTask.value = '';
});

/* errand list */
const addErrand = document.querySelector('input.addErrand');
const addErrandButton = document.querySelector('button.addErrandButton');

addErrandButton.addEventListener("click", () => {
  if(addErrand.value === '') {
    alert('You must write an Errand')
  } else {
    let ul = document.getElementsByTagName('ul')[1];
    let li = document.createElement('li');
    /* create label to enable line thourgh in when checkbox ticked */
    let label = document.createElement("label");
    let labelText = document.createElement("span");
    labelText.innerText = addErrand.value;

    /* create checkBox */
    let checkBox = document.createElement("input");
    checkBox.type = 'checkbox';
    checkBox.addEventListener('change', function() {
      labelText.style.textDecoration = checkBox.checked ? 'line-through' : 'none';
    });

    /* append label and checkbox to li and ul */
    label.appendChild(checkBox);
    label.appendChild(labelText);
    li.appendChild(label)
    ul.appendChild(li);

    let span = document.createElement("span");
    let x = document.createTextNode("\u00D7");
    span.className = "close";
    span.appendChild(x);
    li.appendChild(span);

    for (let i = 0; i < close.length; i++) {
      close[i].onclick = function() {
        var div = this.parentElement;
        div.style.display = "none";
      }
    }
  }
  addErrand.value = '';
});

/* correspondance list */

const addCorres = document.querySelector('input.addCorres');
const addCorresButton = document.querySelector('button.addCorresButton');

addCorresButton.addEventListener("click", () => {
  if(addCorres.value === '') {
    alert('You must write some correspondance notes')
  } else {
    let ul = document.getElementsByTagName('ul')[2];
    let li = document.createElement('li');
    /* create label to enable line thourgh in when checkbox ticked */
    let label = document.createElement("label");
    let labelText = document.createElement("span");
    labelText.innerText = addCorres.value;

    /* create checkBox */
    let checkBox = document.createElement("input");
    checkBox.type = 'checkbox';
    checkBox.addEventListener('change', function() {
      labelText.style.textDecoration = checkBox.checked ? 'line-through' : 'none';
    });

    /* append label and checkbox to li and ul */
    label.appendChild(checkBox);
    label.appendChild(labelText);
    li.appendChild(label)
    ul.appendChild(li);

    let span = document.createElement("span");
    let x = document.createTextNode("\u00D7");
    span.className = "close";
    span.appendChild(x);
    li.appendChild(span);

    for (let i = 0; i < close.length; i++) {
      close[i].onclick = function() {
        var div = this.parentElement;
        div.style.display = "none";
      }
    }
  }
  addCorres.value = '';
});

/* note list */

const addNote = document.querySelector('input.addNote');
const addNoteButton = document.querySelector('button.addNoteButton');

addNoteButton.addEventListener("click", () => {
  if(addNote.value === '') {
    alert('You must write a note')
  } else {
    let ul = document.getElementsByTagName('ul')[3];
    let li = document.createElement('li');
    /* create label to enable line thourgh in when checkbox ticked */
    let label = document.createElement("label");
    let labelText = document.createElement("span");
    labelText.innerText = addNote.value;

    /* create checkBox */
    let checkBox = document.createElement("input");
    checkBox.type = 'checkbox';
    checkBox.addEventListener('change', function() {
      labelText.style.textDecoration = checkBox.checked ? 'line-through' : 'none';
    });

    /* append label and checkbox to li and ul */
    label.appendChild(checkBox);
    label.appendChild(labelText);
    li.appendChild(label)
    ul.appendChild(li);

    let span = document.createElement("span");
    let x = document.createTextNode("\u00D7");
    span.className = "close";
    span.appendChild(x);
    li.appendChild(span);

    for (let i = 0; i < close.length; i++) {
      close[i].onclick = function() {
        var div = this.parentElement;
        div.style.display = "none";
      }
    }
  }
  addNote.value = '';
});





