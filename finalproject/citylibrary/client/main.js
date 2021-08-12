window.onload=function(){
    fetchAllBook();

    document.getElementById('addBtn').onclick=function(event){
        event.preventDefault();
        const bookId=this.dataset.id

    if(bookId){
       // console.log("submited button..butoooooooooooooooonnn.")
       fetch('http://localhost:3000/citylibrary/api/book/list/'+bookId,{
        method:"put",
        headers:{
            "Content-Type": "application/json",
        },
        body:JSON.stringify({
            ISBN:document.getElementById("ISBN"),
            BookTitle:document.getElementById("BookTitle").value,
            overdue:document.getElementById("overdue").value,
            publisher:document.getElementById("publisher").value,
            Datepublished:document.getElementById("Datepublished").value
        })
    }).then(date=>date.json())
    .then(update=>{
            console.log(update);
            document.getElementById("form-of-title").textContent="New Book form";
            //restform
            document.getElementById('add-form').reset();
            document.getElementById("addBtn").dataset.id='';
            location.reload();
        })





    }else{
        createNewProduct()  ;

    }
   
        //attachSingleBook(document.getElementById('book-list-body'),prod);
    }
}

function createNewProduct(){
const ISBN=document.getElementById('ISBN').value;
    const BookTitle=document.getElementById("BookTitle").value;
    const  overdue=document.getElementById("overdue").value;
    const publisher=document.getElementById("publisher").value;
    const  Datepublished=document.getElementById("Datepublished").value;

    fetch('http://localhost:3000/citylibrary/api/book/add',{
        method:"post",
        headers:{
            "Content-Type": "application/json",
        },
        body:JSON.stringify({
            ISBN:ISBN,
            BookTitle:BookTitle,
            overdue:overdue,
            publisher:publisher,
            Datepublished:Datepublished
        })
    }).then(date=>date.json())
    .then(console.log);
    document.getElementById('add-form').reset();

}
/** <tr>
                <th scope="col">#</th>
                <th scope="col">ISBN</th>
                <th scope="col">BookTitle</th>
                <th scope="col">overdue</th>
                <th scope="col">publisher</th>
                <th scope="col">Datepublished</th>
              </tr> */
async function fetchAllBook(){
    const books=await (await fetch('http://localhost:3000/citylibrary/api/book/list')).json();
    console.log(books)
    const tbody=document.getElementById('book-list-body');
    books.forEach(prod => {

        attachSingleBook(tbody,prod)
    //     const tr=document.createElement('tr');
    //     tr.innerHTML= `
    //     <td>${prod.ISBN}</td>
    //     <td>${prod.BookTitle}</td>
    //     <td>${prod.overdue}</td>
    //     <td>${prod.publisher}</td>
    //     <td>${prod.Datepublished}</td> `
    // tbody.appendChild(tr);
        
    });

}
function attachSingleBook(parentNode,product){

    const tr=document.createElement('tr');

    const ISBNTd=document.createElement('td');
    ISBNTd.textContent=product.ISBN;
    tr.appendChild(ISBNTd)

    const BookTitleTd=document.createElement('td')
    BookTitleTd.textContent=product.BookTitle;
    tr.appendChild(BookTitleTd)

    const overdueTd=document.createElement('td')
    overdueTd.textContent=product.overdue;
    tr.appendChild(overdueTd)



    const publisherTd=document.createElement('td')
    publisherTd.textContent=product.publisher;
    tr.appendChild(publisherTd)

    const DatepublisherTd=document.createElement('td')
    DatepublisherTd.textContent=product.Datepublished;
        tr.appendChild(DatepublisherTd)

        const actionTd=document.createElement('td')
       const deleteButton=document.createElement('button')
      // deleteButton.className="btn btn-danger";
       deleteButton.innerText='DELETE'
       deleteButton.dataset.id=product.id;
       actionTd.appendChild(deleteButton);

       const updateButton=document.createElement('button');
       updateButton.innerText='UPDATE';
       updateButton.dataset.id=product.id;
       actionTd.appendChild(updateButton);
         tr.appendChild(actionTd);


       deleteButton.addEventListener('click',function(){
           //console.log("Deleteeee")/citylibrary/api/book/list/books/:bookId
           fetch('http://localhost:3000/citylibrary/api/book/list/'+product._id,{
               method:'DELETE'
           })
           .then(data=>{
               
               tr.remove()
           })

       });
       //updateButton.addEventListener
       updateButton.addEventListener('click',function(event){
        event.preventDefault();
        fetch('http://localhost:3000/citylibrary/api/book/list/'+product._id,)
        .then(data=>data.json())
        .then(data=>{
            console.log(data);
            document.getElementById("form-of-title").textContent="Edit a book "
            document.getElementById('ISBN').value=data.ISBN;
            document.getElementById("BookTitle").value=data.BookTitle;
           document.getElementById("overdue").value=data.overdue;
           document.getElementById("publisher").value=data.publisher;
           document.getElementById("Datepublished").value=data.Datepublished;
           document.getElementById('addBtn').dataset.id=data.id
         })
         });



parentNode.appendChild(tr);
//     const tr=document.createElement('tr');
//     tr.innerHTML= `
//     <td>${product.ISBN}</td>
//     <td>${product.BookTitle}</td>
//     <td>${product.overdue}</td>
//     <td>${product.publisher}</td>
//     <td>${product.Datepublished}</td>
//     <td><button class="btn btn-danger">Delete</button><button class="btn btn-primary">Update</button></td>
//      `
// parentNode.appendChild(tr);
}