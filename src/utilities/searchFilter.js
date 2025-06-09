export default function searchFilter (){
  const lista = document.querySelectorAll('.tj-info');
  const searchInput = document.getElementById('search');
  const resultado = document.getElementById('resultado');

  searchInput?.addEventListener('keyup', function(event) {
    let matchCount = 0;
    const query = event.target?.value.toLowerCase();

    lista.forEach(item => {
      const titulo = item.querySelector('.content-tit')?.textContent?.toLowerCase()
      const descripcion = item.querySelector('.content-txt')?.textContent?.toLowerCase()
      
      if( titulo?.includes(query) || descripcion?.includes(query)){
        item.style.display = 'block';
        matchCount++
      } else {
        item.style.display = 'none';
      }
    });
    if(matchCount === 0){
      resultado.textContent = "No hay resultados";
    } else {
      resultado.textContent = "Resultados encontrado: " + matchCount;
    }
  });
};