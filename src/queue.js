

class Queue{
    array = []

    enqueue(x){
        array.splice(0,0,x)
    }

    dequeue(){
        return array.pop()
    }
}