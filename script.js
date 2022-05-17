  //값을 표시하는 함수
  function dis(val)
  {
      document.getElementById("result").value+=val
  }
    
  //숫자를 받고 결과를 반환하는 함수
  function solve()
  {
      let x = document.getElementById("result").value
      let y = eval(x)
      document.getElementById("result").value = y
  }
    
  //초기화 기능
  function clr()
  {
      document.getElementById("result").value = ""
  }