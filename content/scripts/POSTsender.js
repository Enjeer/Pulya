postSend=(username, table, time, date, duration)=>{
  fetch('/', {
  method: 'POST',
  body:{
   username:username,
   table:table,
   time:time,
   date:date,
   duration:duration
  },
  headers: {
    'Content-Type': 'application/x-www-form-urlencoded'
  }
})
  .then(res=>res.text())
  .then(console.log(username, table, time, date, duration))
  .catch(err=>console.error(err))
}