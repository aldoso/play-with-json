var numberz = [33, 21, 1]

var y = document.querySelector('main ul')

function onc() {
  const x = document.querySelector('main input').value
  function multi(num) {
    return `<li>${num * x}</li>`
  }
  y.innerHTML = numberz.map(multi).join(' ')
}

var persons = [
  {
    firstname: "Malcom",
    lastname: "Reynolds"
  }, {
    firstname: "Kaylee",
    lastname: "Frye"
  }, {
    firstname: "Jayne",
    lastname: "Cobb"
  }
];

function shownames() {
  const x = document.querySelector('aside ul')
  function display(item) {
    return `<li>${item.firstname}<strong> ${item.lastname}</strong></li>`
  }
  x.innerHTML = persons.map(display).join("+")
}
