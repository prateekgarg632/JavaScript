// const mycodings=["Java","Python","JavaScript"]
// const val=mycodings.forEach((items)=>{
//     console.log(items);
//     return items;
// })
// console.log(val);

// const nums=[1,2,3,4,5]
// const num=nums.filter((item)=>{
// return item%2==0;
// })
// console.log(num);

// const books = [
//     { title: 'Book One', genre: 'Fiction', publish: 1981, edition: 2004 },
//     { title: 'Book Two', genre: 'Non-Fiction', publish: 1992, edition: 2008 },
//     { title: 'Book Three', genre: 'History', publish: 1999, edition: 2007 },
//     { title: 'Book Four', genre: 'Non-Fiction', publish: 1989, edition: 2010 },
//     { title: 'Book Five', genre: 'Science', publish: 2009, edition: 2014 },
//     { title: 'Book Six', genre: 'Fiction', publish: 1987, edition: 2010 },
//     { title: 'Book Seven', genre: 'History', publish: 1986, edition: 1996 },
//     { title: 'Book Eight', genre: 'Science', publish: 2011, edition: 2016 },
//     { title: 'Book Nine', genre: 'Non-Fiction', publish: 1981, edition: 1989 },
//   ];

//   const mybooks=books.filter((bk)=> bk.genre.startsWith('F'));
//   console.log(mybooks);


const nums=[1,2,3,4,5,6,7,8,9,10]

// const newarray=nums.map((num)=> num+10)
// console.log(newarray);

// const newarray=nums.map((num)=>num*10).map((num)=>num+1);
// console.log(newarray);
const newarray=nums.map((num)=>num*10).map((num)=>num+1).filter((num)=> num>40);
console.log(newarray);