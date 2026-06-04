




  

  















import { CanMatchFn, Router } from '@angular/router';
import { StorageService } from '../app/auth/services/storage/storage.service';
import { inject } from '@angular/core';

export const trainerGuard: CanMatchFn = (route, segments) => {
  const storage = inject(StorageService);
  const router  = inject(Router);

  if (!storage.hasToken()) {
    router.navigateByUrl('/login');
    return false;
  }

  if (storage.isTrainerLoggedIn()) {
    return true;
  }

  router.navigateByUrl('/home');
  return false;
};