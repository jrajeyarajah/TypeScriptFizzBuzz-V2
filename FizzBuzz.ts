class FizzBuzz {
	start: number;
	end: number;
	Fizz: number;
	Buzz: number;

	constructor(start: number, end: number, fizz: number, buzz: number) {
		this.Buzz = buzz;
		this.Fizz = fizz;
		this.start = start;
		this.end = end;
	}
	Print() {
		for (let i = this.start; i <= this.end; i++) {
			let output = "";
			if (i % this.Fizz == 0) {
				output = "Fizz";
			}
			if (i % this.Buzz == 0) {
				output += "Buzz";
			}
			if (output == "") {
				output = i.toString();
			}
			console.log(output) 
		}

	}

}


var start = new Date().getTime()
var f = new FizzBuzz( 1,350, 5,7)
f.Print()
var diff = new Date().getTime() - start;
console.log("took: " + diff.toString());