import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { MatSnackBar } from '@angular/material/snack-bar';
import { Route, Router } from '@angular/router';
import { AdminService } from '../../services/admin.service';

@Component({
  selector: 'app-post-category',
  templateUrl: './post-category.component.html',
  styleUrls: ['./post-category.component.scss'],
})
export class PostCategoryComponent implements OnInit {
  constructor(
    private fb: FormBuilder,
    private router: Router,
    private snackBar: MatSnackBar,
    private adminService: AdminService
  ) {}
  categoryForm: FormGroup;
  ngOnInit(): void {
    this.categoryForm = this.fb.group({
      name: [null, [Validators.required]],
      description: [null, [Validators.required]],
    });
  }

  addCategory() {
    console.log('add categeory');

    if (this.categoryForm.valid) {
      console.log('form valide ya zebi ');

      this.adminService
        .addCategory(this.categoryForm.value)
        .subscribe((res) => {
          console.log('d5alna');

          if (res.id != null) {
            console.log('dkhalna fel if ');

            this.snackBar.open('Category Added Successfully ', 'Close', {
              duration: 5000,
            });
            this.router.navigateByUrl('/admin/dashboard');
          } else {
            console.log('dkhalna fel else');

            this.snackBar.open(res.message, 'Close', {
              duration: 5000,
              panelClass: 'error-snackbar',
            });
          }
        });
    }
  }
}
