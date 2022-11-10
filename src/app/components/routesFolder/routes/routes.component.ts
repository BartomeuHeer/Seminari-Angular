import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { CellClickedEvent, ColDef } from 'ag-grid-community';
import { Observable } from 'rxjs';
import { Router } from '@angular/router';
import { RouteService } from '../../../services/route.service';
import { Route } from '../../../interfaces/route.interface';

@Component({
  selector: 'app-routes',
  templateUrl: './routes.component.html',
  styleUrls: ['./routes.component.css']
})
export class RoutesComponent implements OnInit {
   
  routes: Route[]=[];
  colDefs: ColDef[]=[
    {field: '_id'},
    {field: 'creator'},
    {field: 'date'},
  ];

  defaultColDef: ColDef = {
    sortable: true, filter: true
  }


  constructor(private http: HttpClient, private router: Router,
    private routeSrv: RouteService) { }

  rowData$!:any;

  ngOnInit(): void{
    this.routeSrv.getAll().subscribe(
      resp => {
        if(resp.status == 200){ 
      
          this.routes = resp.body!;
          this.rowData$=resp.body!.map(({_id,creator,date})=>(
            {_id,creator,date}));
          console.log(this.rowData$);
            }
      })
  }

  onCellClicked(event: CellClickedEvent){
    console.log(event);
    this.router.navigate(['/route/'])
  }

}
