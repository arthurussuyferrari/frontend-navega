import { Injectable } from '@angular/core';
import { MatDialog, MatDialogConfig } from '@angular/material/dialog';
import { Observable } from 'rxjs';

@Injectable({ providedIn: 'root' })
export class ModalService {

  constructor(private dialog: MatDialog) {}



  open<T, D = any>(component: any, data?: D, config?: MatDialogConfig): Observable<T | undefined> {
    const dialogRef = this.dialog.open<T, D>(component, {
      width: '400px',
      data,
      ...config
    });

    return dialogRef.afterClosed();
  }
}
