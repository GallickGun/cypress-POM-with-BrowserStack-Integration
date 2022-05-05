//Dummy application
let add = (a,b) => a + b;
let subtract = (a,b) => a - b;
let divide = (a,b) => a / b;
let multiply = (a,b) => a * b;

//Test
describe('Unit test', () =>{
    context('Math with positive numbers', ()=>{
        it('should perform addition correctly', ()=>{
            expect(add(2,2)).to.eq(4);
        });
        it('should perform subtraction correctly', ()=>{
            expect(subtract(2,2)).to.eq(0);
        });
        it('should perform division correctly', ()=>{
            expect(divide(2,2)).to.eq(1);
        });
        it('should perform multiplication correctly', ()=>{
            expect(multiply(8,2)).to.eq(16);
        });
        });

    describe('Math with decimal numbers', ()=>{
        it('should perform decimal addition correctly', ()=>{
            expect(add(2.2,2.2)).to.eq(4.4);
        });
        it('should perform decimal subtraction correctly', ()=>{
            expect(subtract(4.4,2.2)).to.eq(2.2);
        });
        });
});