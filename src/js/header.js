let currentMarkedPage = null;

export function markHeaderLink(currentPage){
  if(currentPage.endsWith('index.html')){
    document.querySelector('.home-link')
      .classList.add('current-page');
  }else{
    document.querySelector('.shopping-list-link')
      .classList.add('current-page');
  }
}