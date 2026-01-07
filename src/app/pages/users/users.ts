import { ChangeDetectorRef, Component } from '@angular/core';
import { Apiservices } from '../../apiservices';

@Component({
  selector: 'app-users',
  imports: [],
  templateUrl: './users.html',
  styleUrl: './users.css',
})
export class Users {
   users: any[] = [];

  constructor(private apiservices:Apiservices,private cdr:ChangeDetectorRef ) {}

  ngOnInit(): void {
    this.apiservices.getUsers().subscribe((res: any) => {
      console.log(res);       // DEBUG
      this.users = res.users; //  MUST be res.users
      this.cdr.detectChanges()
    });
  }
}
