import { BreakpointObserver, Breakpoints } from '@angular/cdk/layout';
import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';
import { Router } from '@angular/router';

@Component({
  selector: 'app-menu',
  templateUrl: './menu.component.html',
  styleUrls: ['./menu.component.css']
})
export class MenuComponent implements OnInit {
  clicked:boolean=false;
  isHandset$: Observable<boolean> = this.breakpointObserver.observe(Breakpoints.Handset)
  .pipe(
    map(result => result.matches)
  );
  constructor(private breakpointObserver: BreakpointObserver, private router: Router) { }

  ngOnInit() {
  }
  change(){
    if(!this.clicked)
    {
    this.clicked=true;
    }
    else{
      this.clicked=false;
    }
  }
  goTo(site:string){
    this.router.navigateByUrl("/"+site)
  }

}
