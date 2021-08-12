

const getDb=require('../utilis/databases').getDb;
const {objectID, ObjectId}=require('mongodb')
let products=[]
const collectionName='books'
let count =1;
module.exports =class Book {
    constructor(id,ISBN, BookTitle, overdue,  publisher, Datepublished){ //_id
        this.id = id;//this_id = _id;
        this.BookTitle = BookTitle;
        this.ISBN = ISBN;
        this.Datepublished = Datepublished;
        this.publisher =  publisher;
        this.overdue = overdue;
         }

   //save(){
    
        save() {
                //  this._id = count++;
                console.log(this)
            return getDb().collection(collectionName).insertOne(this);
        }

        //return getDb().collection('products').insertone(this)

        // this.id = count++;
        // collection.push(this);
        // console.log(this);
        // return this;
   //}
    
    update(){
        return getDb().collection(collectionName).updateOne({_id:new ObjectId(this._id)},
        {$set:{"id" :this.id,  "BookTitle": this.BookTitle,"ISBN" : this.ISBN, "Datepublished ":this.Datepublished,
        "publisher" :this.publisher, "overdue" : this.overdue}});

        // const index = collection.findIndex(item => item.id == this.id);
        
        // if(index > -1){
        //     collection.splice(index, 1, this);
        //     return this;
        // } else {
        //     throw new Error('ITEM NOT FOUND')
        // }
    }

    static listAll(){
        console.log(collectionName)

        return getDb().collection(collectionName).find().toArray();
        // return collection;
    }

    static findById(bookId){


        return getDb().collection(collectionName).findOne({_id:new ObjectId(bookId)})
        // const index = collection.findIndex(item => item.id == bookId);
       
        // if(index > -1){
        //     return collection[index];
        // } else {
        //     throw new Error ('ITEM NOT FOUND')
        // }

    }
    static  deleteById(bookId){
        return getDb().collection(collectionName).deleteOne({_id:new ObjectId(bookId)})

        // const index = collection.findIndex(item => item.id == bookId);
        // if(index > -1){
        //     collection = collection.filter(item => item.id == bookId);
        // } else {
        //     throw new Error('ITEM NOT FOUND')
        // }
    }

}
//  const collection = [new Book("1","978-0135974445","Agile software Development","$1.05","prentice-Hall","2020-10-25"),
//   new Book("2","978-0135166307", "Core java - Fundamentals 12th Edition", "$1.75", "Pearson", "2018-08-27")];
// console.log(collection)

// module.exports= Book;

