import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Subject } from 'rxjs';
import { CrudService } from 'src/app/shared/services/crud.service';

@Injectable({
  providedIn: 'root'
})
export class UserDetailFacadeService {
  store$ = new Subject();
  state$ = this.store$.asObservable();
  private readonly resourcePath = 'users';
  constructor(private http: HttpClient, private crudService: CrudService) {}

  getUser( userName: string ) {
    this.crudService.get(`${this.resourcePath}/${userName}`)
      .subscribe( ( user ) => {
        this.updateState(user);
      });
  }

  updateState( user ) {
    this.store$.next({user});
  }
}
