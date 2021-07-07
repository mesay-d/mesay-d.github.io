window.onload = function() {
    fetchProducts();

    document.getElementById('addBtn').onclick = function(event){
        event.preventDefault();
        const productId = this.dataset.id;
        if(productId){ //data-id exists - edit a product
            console.log('---------------');
            fetch('http://localhost:3000/books/' + productId, {
                method: 'PUT',
                headers: {
                    "Content-Type": "application/json",
                },
                body: JSON.stringify({
                    title: document.getElementById('title').value,
                    isbn: document.getElementById('isbn').value,
                    publisheData: document.getElementById('publisheDate').value,
                    authore: document.getElementById('authore').value
                })
            })
            .then(data => data.json())
            .then(updatedProd => {
                console.log(updatedProd);
                //reset from
                document.getElementById('form-title').textContent = "Add a book";
                document.getElementById('add-form').reset();
                document.getElementById('addBtn').dataset.id = '';
                location.reload();
            })
        } else{
            createNewProduct();
        }
    } 
}

function createNewProduct(){
    const title = document.getElementById('title').value;
    const isbn = document.getElementById('isbn').value;
    const publisheData = document.getElementById('publisheData').value;
    const authore = document.getElementById('authore').value;

    fetch('http://localhost:3000/books', {
        method: "POST",
        headers:{
            "Content-Type": "application/json",
        },
        body: JSON.stringify({
            title: title,
            isbn=isbn,
            publisheData:publisheData,
            authore:authore
        })
    }).then(data => data.json())
    .then(prod => {
        console.log(prod);
        document.getElementById('add-form').reset();
        attachSingleProduct(document.getElementById('stores-list-body'), prod);
    });
}

async function fetchProducts(){
    const products = await (await fetch('http://localhost:3000/books')).json();
    const tbody = document.getElementById('stores-list-body');
    products.forEach(prod => {
        attachSingleProduct(tbody, prod);
    })
}

function attachSingleProduct(parentNode, product){
    const tr = document.createElement('tr'); //<tr>
    const titleTd = document.createElement('td'); //<td>111</td>
    titleTd.textContent = product.title;
    tr.appendChild(titleTd); //

    const isbnTd = document.createElement('td');
    isbnTd.textContent = product.isbn;
    tr.appendChild(isbnTd);
    
    const publisheDataTd=document.createElement('tr')
    publisheData.textContent=product.publisheData;
    tr.append(publisheDataTd);

    const authoreTd=document.createElement('td');
    authoreTd.textContent=product.authore;
    tr.append(authoreTd);

    
    const actionTd = document.createElement('td');
    const deleteButton = document.createElement('button');
    // deleteButton.className = 'btn btn-primary';
    deleteButton.innerText = 'DELETE';
    deleteButton.dataset.id = product.id;
    actionTd.appendChild(deleteButton);

    const updateButton = document.createElement('button');
    updateButton.innerText = 'UPDATE';
    updateButton.dataset.id = product.id;
    actionTd.appendChild(updateButton);

    tr.appendChild(actionTd);

    deleteButton.addEventListener('click', function(){
        // console.log('DELETE button clicked');
        fetch('http://localhost:3000/products/'+product.id, {
            method: 'DELETE'
        })
        .then(data => {
           tr.remove();
        });

    });


    updateButton.addEventListener('click', function() {
        fetch('http://localhost:3000/products/'+ product.id)
        .then(data => data.json())
        .then(data => {
            console.log(data);
            document.getElementById('form-title').textContent = "Edit a store book";
            document.getElementById('title').value = data.title;
            document.getElementById('isbn').value = data.isbn;
            document.getElementById('publisheDate').value = data.publisheData;
            document.getElementById('authore').value = data.authore;
            document.getElementById('addBtn').dataset.id= data.id;

        })
    })
   
    parentNode.appendChild(tr);
}