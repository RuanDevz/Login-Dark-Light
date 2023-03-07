const mode = document.getElementById('moon')

mode.addEventListener('click',clicar)

function clicar(){

  const container = document.getElementById('dark')
  const login = document.getElementById('login')
  const name =  document.getElementById('name','email','pass')
  const forgot = document.getElementById('forgot')


  
  if(mode.classList.contains('fa-moon')) {
    mode.classList.remove('fa-moon');
    mode.classList.add('fa-sun');
    container.style.background = '#312d37'
    login.style.color = '#FFF'
    name.style.color = '#FFF'
    forgot.style.color = '#FFF'
    mode.style.color = '#FFF'
  } else {
    container.style.background = '#FFF'
    login.style.color = '#000'
    name.style.color = '#000'
    forgot.style.color = '#000'
    mode.style.color = '#000'
    mode.classList.remove('fa-sun');
    mode.classList.add('fa-moon');
  }
}

