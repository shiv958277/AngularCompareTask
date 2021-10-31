import { Component, OnInit } from '@angular/core';


@Component({
  selector: 'app-package',
  templateUrl: './package.component.html',
  styleUrls: ['./package.component.css']
})
export class PackageComponent implements OnInit {

 
  constructor() { }

  ngOnInit(): void {
    
  }

  searchText:any;
  selectedPackage:number[]=[];
   printPackageInformation:any=[];
   printingPackage:any=[];


   

    package=[
    {id:1,isChecked:false,Image:'assets/1.jfif',PackageName:'Kerala Tour',NoOfDays:'3',Cost:'85000',Discount:'20%'},
    {id:2,isChecked: true,Image:'assets/1.jfif',PackageName:'Kerala Tour',NoOfDays:'2',Cost:'70000',Discount:'10%'},
    {id:3,isChecked: true,Image:'assets/2.jpg',PackageName:'Asia Tour',NoOfDays:'4',Cost:'10000',Discount:'30%'},
    {id:4,isChecked: true,Image:'assets/3.jfif',PackageName:'Kolkata Tour',NoOfDays:'5',Cost:'20000',Discount:'40%'},
    
    {id:5,isChecked:false,Image:'assets/4.jfif',PackageName:'America Tour',NoOfDays:'6',Cost:'100000',Discount:'10%'},
    {id:6,isChecked:true,Image:'assets/4.jfif',PackageName:'America Tour',NoOfDays:'4',Cost:'20000',Discount:'5%'},
    {id:7,isChecked:false,Image:'assets/5.jfif',PackageName:'India Tour',NoOfDays:'2',Cost:'50000',Discount:'2%'}

  ];

  // package.sort(function(a:any, b:any) {
  //   return a.Cost - b.Cost;
  // });

  // package.sort((a:any, b:any) => (a.Cost > b.Cost) ? 1 : -1);

  // package.sort((a, b) => (a.Cost > b.Cost ? 1 : -1));
 

  getPackage(e:any,id:string){
      if(e.target.checked){
        // console.log(id+'checked');
        this.selectedPackage.push(parseInt(id));
      }
      else{
        // console.log(id+'unchecked');
        this.selectedPackage=this.selectedPackage.filter(m=>m!=parseInt(id));
      }


      console.log(this.selectedPackage);
  }

  sortcost(){
    this.package.sort(function(a:any, b:any) {
    return a.Cost - b.Cost;
  });
  }
  printPackage(){
    if(this.selectedPackage.length<=1){
      alert("Package selected should be more than one");
    }
    else{
    for(let i=0;i<this.package.length;i++){
     
      let p=this.package[i].id;
      let newProduct=this.package[i];
      if(this.selectedPackage.indexOf(p)!=-1){
        this.printPackageInformation.push(newProduct);
        
      }
      
  
      }
      console.log(this.printPackageInformation)

      this.printingPackage=this.printPackageInformation;


      this.printPackageInformation=[];

    }
    
      
    }


    
  
  }



  


  


