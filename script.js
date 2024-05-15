document.getElementById('sub').addEventListener("click",(event)=>{
  event.preventDefault();
  const res=document.getElementById('res')
  res.innerHTML=" ";
  var days=document.getElementById('days');
  var money=document.getElementById('money');
  if(document.getElementById('check').checked){
    if(document.getElementById('bonus').checked)
  calcTableB(money.value,days.value)
   else calcTable(money.value,days.value); 
  }
  else if(document.getElementById('bonus').checked)
    calcB(money.value,days.value)
  else calc(money.value,days.value)
})

const calc=(m,d)=>{
  m = parseFloat(m);
  d = parseInt(d);
  var invested=0.0;
  var profit=0.0;
  var result=" "
  for (let i = 0; i < d; i++) {
     invested=m*.1;
    profit=invested*.6;
    m=m+profit;
    
  }
  result+=`${m.toFixed(3)}`
  document.getElementById('res').innerHTML+=result;
}
const calcTable = (m, d) => {
  m = parseFloat(m);
  d = parseInt(d);
  var invested = 0.0;
  var profit = 0.0;
var result = '<table border="1"><tr><th>Current Money</th><th>Invested</th><th>Profit</th><th>Total Money</th></tr>';
  for (let i = 0; i < d; i++) {
    result+=`<tr><td>${m.toFixed(2)}</td><td>`
    invested = m * 0.1;
    profit = invested * 0.6;
    m = m + profit;
    result += `${invested.toFixed(2)}</td><td>${profit.toFixed(2)}</td><td>${m.toFixed(2)}</td></tr>`;
  }
  result += `</table>`;
  result+=`<br> ${m.toFixed(2)}`;
document.getElementById('res').innerHTML = result;
}
const calcTableB = (m, d) => {
  m = parseFloat(m);
  d = parseInt(d);
  var invested = 0.0;
  var profit = 0.0;
var result = '<table border="1"><tr><th>Current Money</th><th>Invested</th><th>Profit</th><th>Total Money</th></tr>';
  for (let i = 0; i < d; i++) {
    m+=500;
    result+=`<tr><td>${m.toFixed(2)}</td><td>`
    
    invested = m * 0.1;
    profit = invested * 0.6;
    m = m + profit;
    result += `${invested.toFixed(2)}</td><td>${profit.toFixed(2)}</td><td>${m.toFixed(2)}</td></tr>`;
  }
  result += `</table>`;
  result+=`<br> ${m.toFixed(2)}`;
document.getElementById('res').innerHTML = result;
}
const calcB=(m,d)=>{
  m = parseFloat(m);
  d = parseInt(d);
  var invested=0.0;
  var profit=0.0;
  var result=" "
  for (let i = 0; i < d; i++) {
      m+=500;
     invested=m*.1;
    profit=invested*.6;
    m=m+profit;

  }
  result+=`${m.toFixed(3)}`
  document.getElementById('res').innerHTML+=result;
}
