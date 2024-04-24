class Apple{
    constructor(weight) {
        this.weight = weight;
    }
    getWeight(){
        return  this.weight;
    }
    setWeight(weight){
        this.weight = weight;
    }
    isEmpty(){
        if(this.weight <= 0){
            return true;
        }else{
            return false;
        }
    }
    decrease(){
        if(this.weight <= 0){
            alert("tao da het")
        }else{
            return this.weight;
        }
    }
}