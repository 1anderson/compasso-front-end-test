import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';
import { CrudService } from 'src/app/shared/services/crud.service';
import { AlertsService } from 'angular-alert-module';

@Injectable({
  providedIn: 'root'
})
export class HomeFacadeService {
  private readonly resourcePath = 'users'; // Todo organizar endpoints em um arquivo separado para reutilização.

  private store$ = new BehaviorSubject(null);
  state$ = this.store$.asObservable();

  constructor(private crudService: CrudService, private alertsService: AlertsService) {
    this.alertsService.setDefaults('timeout', 5);
  }

  updateSearchUser(userGitHubName: string) {
    if (this.ifSearchNotEmpty(userGitHubName)) {
      this.crudService.get(`${this.resourcePath}/${userGitHubName}`)
        .subscribe(newUser => {
          this.store$.next({ user: newUser, repositories: null, repositoriesStarred: null });
        }, err => {
          const { message } = err.error;
          this.alertsService.setMessage(message, 'error'); // Todo: criar um service pra encapsular essa implementação.
        });
    } else {
      this.store$.next(null);
    }
  }

  ifSearchNotEmpty = (searhText: string) => searhText;

  updateRepositoriesUser(userGitHubName: string) {
    this.crudService.get(`${this.resourcePath}/${userGitHubName}/repos`)
      .subscribe(userRepositories => {
        const { user } = this.store$.value;
        this.store$.next({ user, repositories: userRepositories, repositoriesStarred: null });
      }, err => {
        const { message } = err.error;
        this.alertsService.setMessage(message, 'error');
      });
  }

  updateRepositoriesStarredUser(userGitHubName: string) {
    this.crudService.get(`${this.resourcePath}/${userGitHubName}/starred`)
      .subscribe(userRepositoriesStarred => {
        const { user } = this.store$.value;
        this.store$.next({ user, repositories: null, repositoriesStarred: userRepositoriesStarred });
      }, err => {
        const { message } = err.error;
        this.alertsService.setMessage(message, 'error');
      });
  }

  cleanState() {
    this.store$.next(null);
  }
}

