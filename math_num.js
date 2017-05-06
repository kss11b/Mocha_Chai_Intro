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
    return this.val();

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
    return this.value
  }


  this.pow = function(input){
    if(typeof input == "number"){
      for (var i = 1; i < input; i++) {
        this.value*=this.value
      }
    }
    else if(Array.isArray(input)) {
      for(var i = 0; i < input.length; i++){
        if(typeof input[i]  != "number"){
          continue;
        }
        this.value = this.value^input[i];
      }
    }
    return this.value
  }




this.val()
}
