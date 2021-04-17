var should = require('chai').should();//should = chai.should()
var expect = require('chai').expect;//expect = chai.expect
var assert = require('chai').assert;//assert = chai.assert

describe('String', function() {


    before(function(){
        //run once before the first test in this block
        console.log('before hook')
    })
    after(function(){
        //run once after the last test in this block
        console.log('after hook')
    })
    beforeEach(function(){
        //run before each test in this block
        console.log('beforeEach hook')
    })
    afterEach(function(){
        //run after each test in this block
        console.log('afterEach hook')
    })

    let name = 'John'
    it("should be of type string", function(){
        name.should.be.a('string')
        expect(name).to.be.a('string')
        assert.typeOf(name,'string')
    })
    it('shoult contain John', function(){
        name.should.not.equal('Kate')
        name.should.equal('John')
        expect(name).to.equal('John')
        assert.equal(name, 'John')
    })


})