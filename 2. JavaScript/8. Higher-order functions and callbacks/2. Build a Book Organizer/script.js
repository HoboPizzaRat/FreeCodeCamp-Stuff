let books = [
  {
    title: "Kekkosen Elämä",
    authorName: "Juna Jomokka",
    releaseYear: 2010,
  },
  {
    title: "Elon Musk Elämä",
    authorName: "Juna Jomokka",
    releaseYear: 2000,
  },
  {
    title: "Ajan Suhteeellinen Totuus",
    authorName: "Albert Einstein",
    releaseYear: 1920,
  },
  {
    title: "Kakkailijan Kakkakirja",
    authorName: "Huutista",
    releaseYear: 1990,
  },
];

function sortByYear(book1, book2){
  if(book1.releaseYear < book2.releaseYear){
    return -1;
  }else if(book1.releaseYear > book2.releaseYear){
    return 1;
  }
  return 0;
}

let filteredBooks = books.filter(book => book.releaseYear < 1990);
filteredBooks.sort(sortByYear);
console.log(filteredBooks);