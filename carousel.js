// Carrossel automático
document.addEventListener('DOMContentLoaded', function() {
  const images = [
    {
      id: 'img1',
      title: 'Análise Espacial',
      desc: 'Visualização de dados geográficos e estatísticos'
    },
    {
      id: 'img2', 
      title: 'Modelagem Estatística',
      desc: 'Análises avançadas e modelagem de dados'
    },
    {
      id: 'img3',
      title: 'Desenvolvimento Web', 
      desc: 'Criação de aplicativos e dashboards interativos'
    }
  ];

  let currentIndex = 0;
  const imageElements = document.querySelectorAll('.carousel-img');
  const titleElement = document.getElementById('image-title');
  const descElement = document.getElementById('image-desc');

  function changeImage() {
    // Remove classe active de todas as imagens
    imageElements.forEach(img => img.classList.remove('active'));
    
    // Adiciona classe active na imagem atual
    imageElements[currentIndex].classList.add('active');
    
    // Atualiza título e descrição
    if (titleElement && descElement) {
      titleElement.textContent = images[currentIndex].title;
      descElement.textContent = images[currentIndex].desc;
    }
    
    // Próxima imagem
    currentIndex = (currentIndex + 1) % images.length;
  }

  // Inicia o carrossel se as imagens existirem
  if (imageElements.length > 0) {
    // Muda imagem a cada 3 segundos
    setInterval(changeImage, 2000);
  }
}); 