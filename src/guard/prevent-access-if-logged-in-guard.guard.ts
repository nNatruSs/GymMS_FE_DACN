import { inject } from '@angular/core';
import { CanActivateFn, Router} from '@angular/router';
import { StorageService } from '../app/auth/services/storage/storage.service';

export const preventAccessIfLoggedInGuardGuard: CanActivateFn = (route, state) => {
  
  const storage = inject(StorageService);

  const router = inject(Router)
 

  if (storage.hasToken() && storage.isUserLoggedIn()) {
    console.log("User is logged in. Redirecting to user dashboard.");
    router.navigateByUrl('/user/dashboard');
    return false; // Block access to the current route
  }

  if (storage.hasToken() && storage.isAdminLoggedIn()) {
    console.log("Admin is logged in. Redirecting to admin dashboard.");
    router.navigateByUrl('/admin/dashboard');
    return false; // Block access to the current route
  }

  if (storage.hasToken() && storage.isOrganizerLoggedIn()) {
    console.log("Organizer is logged in. Redirecting to organizer dashboard.");
    router.navigateByUrl('/organizers/dashboard');
    return false; // Block access to the current route
  }

  return true;
};
