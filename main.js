var taxplus,taxminus;
var  NumberOfTotalIphonePlusIcon=0;
var  NumberOfTotalIphoneMinusIcon=0;
var TotalIponeAmount=1278;
//...................iPhonePlusIcon.................
var iphonePlusIcon = document.getElementById("iphone-plus-icon");
iphonePlusIcon.addEventListener("click",function(){

    var iphonePlusicon = document.getElementById("iphoneNumber").value;
    var NumberOfiphonePlusIcon = parseFloat(iphonePlusicon);

    NumberOfTotalIphonePlusIcon = NumberOfiphonePlusIcon + 1;
    document.getElementById("iphoneNumber").value = NumberOfTotalIphonePlusIcon;

    TotalIponeAmount=TotalIponeAmount+1219;
    document.getElementById("Subtotal").innerText = TotalIponeAmount;
    document.getElementById("Total").innerText = TotalIponeAmount;

    taxplus = 24.38*NumberOfTotalIphonePlusIcon;
    document.getElementById("Tax").innerText = taxplus;

});
// ..................iPhoneMinusIcon...............
var iphoneMinusIcon = document.getElementById("iphone-minus-icon");
iphoneMinusIcon.addEventListener("click",function(){

    var iphoneMinusIcon = document.getElementById("iphoneNumber").value;
    var NumberOfiphoneMinusIcon = parseFloat(iphoneMinusIcon);

    if(NumberOfiphoneMinusIcon>0){
        NumberOfTotalIphoneMinusIcon = NumberOfiphoneMinusIcon - 1;
        document.getElementById("iphoneNumber").value = NumberOfTotalIphoneMinusIcon;
    
        TotalIponeAmount=TotalIponeAmount-1219;
        document.getElementById("Subtotal").innerText = TotalIponeAmount;
        document.getElementById("Total").innerText = TotalIponeAmount;

        taxminus = 24.38*NumberOfTotalIphoneMinusIcon;
        document.getElementById("Tax").innerText = taxminus;
    }

});

//...................iphoneCasePlusIcon.................

    var  NumberOfTotalIphoneCasePlusIcon=0;
    var  NumberOfTotalIphoneCaseMinusIcon=0;

    var iphoneCasePlusIcon = document.getElementById("iphone-case-plus-icon");
    iphoneCasePlusIcon.addEventListener("click",function(){

    var iphoneCasePlusIcon = document.getElementById("iphoneCaseNumber").value;
    var NumberOfiphonCasePlusIcon = parseFloat(iphoneCasePlusIcon);

    NumberOfTotalIphoneCasePlusIcon = NumberOfiphonCasePlusIcon + 1;
    document.getElementById("iphoneCaseNumber").value = NumberOfTotalIphoneCasePlusIcon;
    
    TotalIponeAmount=TotalIponeAmount+59;
        document.getElementById("Subtotal").innerText = TotalIponeAmount;
        document.getElementById("Total").innerText = TotalIponeAmount;
    
       


});
// .....................iphoneCaseMinusIcon..............
    var iphoneMinusIcon = document.getElementById("iphone-case-minus-icon");
    iphoneMinusIcon.addEventListener("click",function(){

        var iphoneCaseMinusIcon = document.getElementById("iphoneCaseNumber").value;
        var NumberOfiphonCaseMinusIcon = parseFloat(iphoneCaseMinusIcon);
    if(NumberOfiphonCaseMinusIcon>0){
        NumberOfTotalIphoneCaseMinusIcon = NumberOfiphonCaseMinusIcon - 1;
        document.getElementById("iphoneCaseNumber").value = NumberOfTotalIphoneCaseMinusIcon;

        TotalIponeAmount=TotalIponeAmount-59;
        document.getElementById("Subtotal").innerText = TotalIponeAmount;
        document.getElementById("Total").innerText = TotalIponeAmount;
    }
});


