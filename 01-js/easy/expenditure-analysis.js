/*
  Implement a function `calculateTotalSpentByCategory` which takes a list of transactions as parameter
  and return a list of objects where each object is unique category-wise and has total price spent as its value.
  transactions is an array where each
  Transaction - an object like 
        {
		id: 1,
		timestamp: 1656076800000,
		price: 10,
		category: 'Food',
		itemName: 'Pizza',
	}
  Output - [{ category: 'Food', totalSpent: 10 }] // Can have multiple categories, only one example is mentioned here
*/

function calculateTotalSpentByCategory(transactions) {
  var ans=new Array();
for(let i=0;i<transactions.length;i++)
{
  let check=false;
  for(let j=0;j<ans.length;j++)
  {
    if(ans[j]["category"]==transactions[i]["category"])
    {
     ans[j]["totalSpent"]+=transactions[i]["price"] ;
     check=true;
    }
  }
  if(check==false)
  {
    let obj=new Object;
    obj["category"]=transactions[i]["category"];
    obj["totalSpent"]=transactions[i]["price"];
    ans.push(obj);
  }

}
  return ans;
}

module.exports = calculateTotalSpentByCategory;
