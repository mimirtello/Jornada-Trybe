const sum = require('./sum.js')

describe ('Exercicio 1', ()=>{
  it("Verifica se o retorno de sum(4,5) é igual a 9", ()=>{
    expect (sum(4,5)).toBe(9)
  })
  it("Verifica se o retorno de sum(0,0) é 0", ()=>{
    expect (sum(0,0)).toBe(0)
  })
  it("Erro", ()=>{
    expect(() => sum(4, '5')).toThrowError();
    expect (()=>sum(4,"5").toThrowError('parameters must be numbers'))
  })
})