module.exports = MathNum;
function MathNum (init)
{
    this.value = init;  // Make this work
    this.val = function () {
        if(this.value == null){
          this.value = 0
          return 0;
        }
        else{
          return this.value;
        }
    };
    this.add = function (input) {
      if(typeof input == "number"){
        this.value += input;
    }
      else if(Array.isArray(input)) {
        for(var i = 0; i < input.length; i++){
          if(typeof input[i]  != "number"){
            continue;
          }
          this.value += input[i];
        }
      }
    this.multiply = function(input){
      if(typeof input == "number"){
        this.value *= input;
    }
      else if(Array.isArray(input)) {
        for(var i = 0; i < input.length; i++){
          if(typeof input[i]  != "number"){
            continue;
          }
          this.value *= input[i];
        }
      }
    }


      return this.val();

    }
    this.val()
}
