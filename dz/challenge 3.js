
const mark = {
    firstname: "Mark",
    lastname: "Miller",
    mass: 70,
    height: 1.69,
    calcBMI: function () {
        this.bmi = this.mass / this.height ** 2;
        return this.bmi;
      }  
    };
    
    console.log(mark.calcBMI());

    const john = {
        firstname: "John",
        lastname: "Smith",
        mass: 92,
        height: 1.95,
        calcBMI: function () {
            this.bmi = this.mass / this.height ** 2;
            return this.bmi;
          }  
        };
        
        console.log(john.calcBMI());
        
    
        if (mark.calcBMI > john.calcBMI) {
          console.log(`Mark's BMI (${mark.bmi}) is higher than John's (${john.bmi})`)
        }
        else if (mark.calcBMI > john.calcBMI) {
          console.log(`John's BMI (${john.bmi}) is higher than Mark's (${mark.bmi})`)
        }
    
