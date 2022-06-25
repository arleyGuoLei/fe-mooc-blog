document.addEventListener('DOMContentLoaded',function(){
  const bookSummary = document.getElementsByClassName('book-summary')[0];
  const header = document.getElementsByClassName('book-content__header')[0];
  const bookHandle = document.getElementsByClassName('book-handle')[0];
  const bookComments = document.getElementsByClassName('book-comments')[0];
  const bookBody = document.getElementsByClassName('book-body')[0];
  const bookContent = document.getElementsByClassName('book-content')[0];


  bookSummary.remove();
  header.remove();
  bookHandle.remove();
  bookComments.remove();

  bookBody.style.paddingTop = 0;
  bookContent.style.marginLeft = 0;
});