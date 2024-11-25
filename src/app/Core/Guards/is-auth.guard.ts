import { isPlatformBrowser } from '@angular/common';
import { inject, PLATFORM_ID } from '@angular/core';
import { CanActivateFn, Router } from '@angular/router';

export const isAuthGuard: CanActivateFn = (route, state) => {
  const _isPlatformId = inject(PLATFORM_ID)

  if (isPlatformBrowser(_isPlatformId)) {
    const _router = inject(Router);
    if (localStorage.getItem('UserAuth') !== null) {
      _router.navigate(['/home']);

      return false;
    } else {
      return true;
    }
  } else {
    return false;
  }
};
