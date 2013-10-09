$(document).ready(function(){
   

  //   };
    var counter=1;
    // gets Certain values of data array
    var appendRows =function(playersInfo,pageStart,pageEnd)
    { 
        if(pageStart<=pageEnd)
        {
            var row=("<tr data-ref="+counter+"><td>"+pageStart+"</td><td>{0}</td><td>{1}</td><td>{2}</td><td>{3}</td><td>{4}</td><td>{5}</td></tr>").supplant(playersInfo);

            $("#table-body").append(row);
        }
        counter++;
    };

    var getSpecificData= function(data,index)
    {
        var arrayOfSpecific=[];
        for(i=0;i<data.length;i++)
        {
            arrayOfSpecific.push(data[i][index]);
        }
        return arrayOfSpecific;
    };

    var sortedVictories=_.sortBy(getSpecificData(starCraft.data,4),
        function(element)
        {


        return element ;
    });

    var reversed=sortedVictories.reverse();

    var sortByVictories =function(pageStartNum,endNum)
    {

        
        for(var i=pageStartNum-1;i<endNum;i++)
        {

          for(j=0;j<reversed.length;j++)
          {
            if(reversed[i]===starCraft.data[j][4])
            {

              appendRows(starCraft.data[j],i+1,endNum);
            }
          }
        }
    };

    $(".pagination-div").on("click",".page",function()
    {
        var indexOfPage=$(this).parent().index();


        if(indexOfPage===0)
        {
          $("#table-body").empty();
          sortByVictories(1,20);
        }
        else if(indexOfPage===1)
        {

          $("#table-body").empty();
          sortByVictories(20,40);

        }
        else if(indexOfPage === 2)
        {
          $("#table-body").empty();
          sortByVictories(40,60);
        }
        else if( indexOfPage === 3)
        {
          $("#table-body").empty();
          sortByVictories(80,100);
        }
        else if(indexOfPage===4)
        {
          $("#table-body").empty();

        }

    });
    var sortBySpec= function(spec,index)
    {
      $("#table-body").empty();
      for(i=0;i<starCraft.data.length;i++)
      {
        if(spec===starCraft.data[i][index])
        {
          
          appendRows(starCraft.data[i],1,100);
        }
      }
     
    };

    $(".btn-group").on("click",".btn-race",function()
    {
      var name;
       $(".input-div").show();
       $(".input").val("Enter Race Name");
       $(".input-div").on("click",".enter-btn",function(){
             name=$(".input").val();
           sortBySpec(name,3);
       });
      
    });
    $(".btn-group").on("click",".btn-region",function()
    { 
       var name;
       $(".input-div").show();
       $(".input").val("Enter Region Name");
       $(".input-div").on("click",".enter-btn",function(){
             name=$(".input").val();
           sortBySpec(name,2);
       });
    });


//----------- Main Section ---------



sortByVictories(1,20);


});