describe("FizzBuzz", function() {

  var fizzBuzz;

  beforeEach(function() {
  	fizzBuzz = new FizzBuzz();
  });

  describe('multiples of 3', function() {
    it('fizzes for 3', function() {
      expect(fizzBuzz.play(3)).toEqual('fizz');
		});
	});

	describe('multiples of 5', function() {
		it('buzzes for 5', function() {
			expect(fizzBuzz.play(5)).toEqual('buzz');
		});
	});

	describe('multiples of 3 and 5', function() {
		it('fizzbuzzes for 3 and 5', function() {
			expect(fizzBuzz.play(15)).toEqual('fizzbuzz');
		});
	});

	describe('all other numbers', function() {
		it('7 for 7', function() {
			expect(fizzBuzz.play(7)).toEqual(7);
		});
	});
});