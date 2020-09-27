import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';
import { CrudService } from 'src/app/shared/services/crud.service';

@Injectable({
  providedIn: 'root'
})
export class HomeFacadeService {
  private readonly resourcePath = 'users'; // Todo organizar endpoints em um arquivo separado para reutilização.

  private store$ = new BehaviorSubject(null);
  state$ = this.store$.asObservable();

  constructor(private crudService: CrudService) {}

  updateSearchUser(userGitHubName: string) {
    this.crudService.get(`${this.resourcePath}/${userGitHubName}`)
      .subscribe(newUser => {
        this.store$.next({user: newUser, repositories: null, repositoriesStarred: null});
      });
  }

  updateRepositoriesUser(userGitHubName: string) {
    this.crudService.get(`${this.resourcePath}/${userGitHubName}/repos`)
      .subscribe(userRepositories => {
        const { user } = this.store$.value;
        this.store$.next({user, repositories: userRepositories, repositoriesStarred: null});
      });
  }

  updateRepositoriesStarredUser(userGitHubName: string) {
    this.crudService.get(`${this.resourcePath}/${userGitHubName}/starred`)
      .subscribe(userRepositoriesStarred => {
        const { user } = this.store$.value;
        this.store$.next({user, repositories: null, repositoriesStarred: userRepositoriesStarred});
      });
  }
}

