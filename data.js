const data = {
    data1 : {name : "Spoorti" , email : "apoortisatenahalli@gmail.com"},
    data2 : {name : "Keerti" ,email : "keertisatenahalli@gmail.com"},
    student :{first : "hello" , fun : function(){return "hi"}}
   };
   
   //Three types of exports
   module.exports = data; // for all data
   
   // exports.users = users; // for individual data
   
   // module.exports = {
   //     data1: data2 , 
   //     data2 : data2
   // }