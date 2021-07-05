let stores=[];
module.exports=class product{
    constructor(id,title,isbn,publishedData,author){
        this.id=id;
        this.title=title;
        this.isbn=isbn;
        this.publishedData=publishedData;
        this.author=author;
    }
    save(){
        this.id=Math.random().toString();
        stores.push(this)
        return this;

    }
    update(){
        const index=stores.findIndex(p=>p.id===this.id)
        if(index>=0){
            stores.splice(index,1,this);
            return this;
        }else{
            throw new Error("not found")
        }
    }
    
    static fetchAll() {
        return stores;
    }
    static findById(bookId){
        const index=stores.findIndex(p=>p.id===bookId);
        if(index>=0){
        return stores[index];
        } else{
            throw new Error("not found")
        } 
    }
    static deleteById(bookId){
        const index=stores.findIndex(p=>p.id===bookId);
        if(index>=0){
            stores=stores.filter(p=>p.id=bookId)
        }else{
            throw new Error("not found")
        }
    }
}