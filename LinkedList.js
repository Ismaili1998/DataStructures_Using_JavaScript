
/**
 * developed by :   Ismail ISMAILI ALAOUI
 * last update  :    10/14/2021
 */



// construct a single node 
class Node{

    constructor(data,next=null)
    {
        this.data=data;
        this.next=next;
    }
}

class Collection{

    constructor()
    {
        this.head=null;
        this.size=0;
    }

    // add new item at the beginning of the list 
    add(data)
    {
        this.head=new Node(data,this.head);
        this.size++;
    }

    // add new item at the end of the list 
    push(data)
    {
        let current=this.head;
        if(this.size===0)
        {
            this.add(data);
        }
        else
        {
            while(current.next)
            {
            current=current.next;
            }
            current.next=new Node(data);
            this.size++;
        }
    }

    //remove item at a specific index 
    removeAt(index)
    {
        if(index<0 || index >= this.size)
            return 
        if(index===0)
            this.head=this.head.next;
        else
        {
            let cmp=0;
            let current=this.head;
            let previous=this.head;
            while(current)
            {
                if(cmp===index)
                {
                    previous.next=current.next;
                    break;
                }
                previous=current;
                current=current.next;
                cmp++;
            }
            this.size--;
        }
        
    }

    //get item's data by its index 
    getAt(index)
    {
        if(index<0 || index >= this.size)
            return 
        let current=this.head;
        let cmp=0;
        while(cmp<=index)
        {
            if(cmp===index)
                return current.data;
            current=current.next;
            cmp++;
        }

    }

     //change item's data by its index 
    update(index,newData)
    {
        if(index<0 || index >= this.size)
            return 
        let current=this.head;
        let cmp=0;
        while(cmp<=index)
        {
            if(cmp===index)
                current.data=newData;
            current=current.next;
            cmp++;
        }

    }

    // display Items
    display()
    {
        let current =this.head;
        while(current)
        {
            console.log(current.data);
            current=current.next;
        }

    }

    //clear list

    clear()
    {
        this.head=null;
        this.size=0;
    }
}

/** test 
 * 
 */
collection =new Collection();
console.log("+++++++++add 4 items to the collection++++++++++")
collection.add("item 0");
collection.add("item 1");
collection.push("item 2");
collection.push("item 3");
collection.display();
console.log("+++++++++remove item at index 3++++++++++")
collection.removeAt(3);
collection.display();
console.log("+++++++++get item at index 2++++++++++")
console.log(collection.getAt(2));
console.log("+++++++++update item at index 0++++++++++")
collection.update(0,"updated item");
collection.display();
console.log("+++++++++show size of the collection++++++++++")
console.log(collection.size);
console.log("+++++++++clear list++++++++++")
collection.clear();
console.log("+++++++++show size after clear++++++++++")
console.log(collection.size);


