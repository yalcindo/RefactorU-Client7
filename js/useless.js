var sortByVictories =function(data,index)
    {
       var arr=[];
        for(i=0;i<data.length;i++){
           arr.push(data[i][index])
          }
        var arrSorted= _.sortBy(arr,function(element)
         {
          return element;
         });
         arrSorted.reverse();
    
      return arrSorted ;
    };
    sortByVictories(starCraft.data,4);
