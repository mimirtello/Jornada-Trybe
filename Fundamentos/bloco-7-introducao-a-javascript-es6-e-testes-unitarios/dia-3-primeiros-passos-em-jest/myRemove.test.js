function myRemove(arr, item) {
  let newArr = [];
  for (let index = 0; index < arr.length; index += 1) {
    if (item !== arr[index]) {
      newArr.push(arr[index]);
    }
  }
  return newArr;
}

// implemente seus testes aqui
describe('A função  recebe um array arr e retorna uma cópia desse array sem o elemento item caso ele exista no array', ()=>{
  it('Verifique se a chamada myRemove([1, 2, 3, 4], 3) retorna o array esperado', ()=>{
    expect (myRemove([1, 2, 3, 4],3)).toEqual([1, 2, 4])
  })
  it('Verifique se a chamada myRemove([1, 2, 3, 4], 3) Não retorna o array esperado', ()=>{
    expect (myRemove([1, 2, 3, 4],3)).not.toEqual([1, 2, 3, 4])
  })
  it('Verifique se a chamada myRemove([1, 2, 3, 4], 5) retorna o array esperado', ()=>{
    expect (myRemove([1, 2, 3, 4],5)).toEqual([1, 2, 3, 4])
  })
})