




  



 























import { inject } from '@angular/core';
import { CanActivateFn, Router } from '@angular/router';
import { StorageService } from '../app/auth/services/storage/storage.service';

export const preventAccessIfLoggedInGuardGuard: CanActivateFn = (route, state) => {
  const storage = inject(StorageService);
  const router  = inject(Router);

  if (!storage.hasToken()) return true;

  if (storage.isAdminLoggedIn()) {
    router.navigateByUrl('/admin/dashboard/memberships');
    return false;
  }

  if (storage.isUserLoggedIn()) {   
    router.navigateByUrl('/user/dashboard/membership-management');
    return false;
  }

  if (storage.isTrainerLoggedIn()) {
    router.navigateByUrl('/trainer/dashboard');
    return false;
  }

  return true;
};