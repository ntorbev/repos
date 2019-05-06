import {Component, OnDestroy, OnInit} from '@angular/core';
import {Router} from '@angular/router';
import {AuthService} from 'src/app/auth/auth.service';


@Component({
  templateUrl: './error.component.html',
  selector: 'rps-app-error',
  styleUrls: ['./error.component.css']
})
export class ErrorComponent implements OnInit, OnDestroy {
  closable: any ;
  constructor(private router: Router, private authService: AuthService) {
  }

  ngOnDestroy() {
    // this.errorSub.unsubscribe();
  }

  closeModal() {
    this.closable = false;
    this.router.navigate(['/auth']);
  }

  ngOnInit(): void {
    this.closable = this.authService.error;
  }
}
