import {Component, OnInit} from '@angular/core';
import {AuthService} from 'src/app/auth/auth.service';

@Component({
  selector: 'rps-app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
// export class AppComponent implements OnInit, OnDestroy {
export class AppComponent implements OnInit {
  title = 'repos';

  constructor(
    private authService: AuthService
  ) {
  }

  ngOnInit() {
    this.authService.autoAuthUser();

  }

  // constructor(private route: ActivatedRoute) {
  // }
  //
  // ngOnInit(): void {
  //   this.route.queryParams.subscribe(() => {
  //     console.log('query still is alive');
  //   });
  //
  //   this.route.params.subscribe(() => {
  //     console.log('params still is alive');
  //   });
  // }
  //
  // ngOnDestroy(): void {
  //   console.log('destroyed');
  // }

}
