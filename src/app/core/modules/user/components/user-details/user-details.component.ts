import { ChangeDetectionStrategy, Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Observable } from 'rxjs';
import { UserDetailFacadeService } from '../../services/user-detail-facade.service';

@Component({
  selector: 'app-user-details',
  templateUrl: './user-details.component.html',
  styleUrls: ['./user-details.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class UserDetailsComponent implements OnInit {
  state$: Observable<any>;
  constructor(private activeRoute: ActivatedRoute, private userDetailFacadeService: UserDetailFacadeService) {}

  ngOnInit(): void {
    this.state$ = this.userDetailFacadeService.state$;
    const { id } = this.activeRoute.snapshot.params;
    this.userDetailFacadeService.getUser(id);

  }

}
