class Human {
    constructor(name, weight, gender) {
        this.name = name;
        this.weight = weight;
        this.gender = gender;
    }
    getName(){
        return this.name;
    }
    setName(){
        this.name = name;
    }
    getWeight(weight){
        return this.weight;
    }
    setWeight(weight){
        this.weight = weight;
    }
    getGender(){
        if(this.isMale()){
            return "Male";
        }else{
            return "notMale";
        }
    }
    isMale(){
        if(this.gender === 1){
            return true;
        }else{
            return false;
        }
    }
    checkApple(apple){
        return apple.isEmpty();
    }
    eatApple(apple){
        if(apple.getWeight() >=0){
            apple.decrease();
            this.weight++;
        }else{
            alert("het tao");
        }
    }
    say(string){
        document.write(string);
    }
    getInfo(human) {
        alert(human.name + " " + human.weight + " " + human.getGender());
    }
}
let adam = new Human("adam", 60, 2);
let eva = new Human("eva", 50, 1);
let apple = new Apple(10);
adam.say("I am Adam, t nang : " + adam.getWeight() +"<br>");
eva.say("I am Eva, t nang : " + eva.getWeight() + "<br>");