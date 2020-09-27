import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Observable } from 'rxjs';
import { HomeFacadeService } from '../../services/home-facade/home-facade.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {
  state$: Observable<any>;
  constructor(private homeFacadeService: HomeFacadeService, private router: Router) {}

  ngOnInit(): void {
    this.state$ = this.homeFacadeService.state$;
  }

  newUserEvent(userGitHubName: string) {
    this.homeFacadeService.updateSearchUser(userGitHubName);
  }

  getRepositoriesFromUser(userGitHubName: string) {
    this.homeFacadeService.updateRepositoriesUser(userGitHubName);
  }

  updateRepositoriesStarredUser(userGitHubName: string) {
    this.homeFacadeService.updateRepositoriesStarredUser(userGitHubName);
  }

  redirect(userName: number) {
    this.router.navigateByUrl('/user/' + userName);
  }

}
