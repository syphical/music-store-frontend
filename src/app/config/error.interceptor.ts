import { HttpErrorResponse, HttpHandlerFn, HttpRequest } from '@angular/common/http';
import { inject } from '@angular/core';
import { catchError, throwError } from 'rxjs';
import { Router } from '@angular/router';

export function errorInterceptor(req: HttpRequest<unknown>, next: HttpHandlerFn) {
  const router = inject(Router);

  return next(req).pipe(
    catchError((error: HttpErrorResponse) => {
      let errorMessage = "Er is een onbekende fout opgetreden.";

      if (error.error instanceof ErrorEvent) {
        errorMessage = `Fout: ${error.error.message}`;
      } else {
        switch (error.status) {
          case 401:
            router.navigate(['/login']);
            errorMessage = "Je moet ingelogd zijn om deze actie uit te voeren.";
            break;
          case 403:
            errorMessage = "Je hebt geen toegang tot deze functie.";
            break;
          case 404:
            errorMessage = "De opgevraagde gegevens zijn niet gevonden.";
            break;
          case 500:
            errorMessage = "Er is een serverfout opgetreden. Probeer het later opnieuw.";
            break;
        }
      }

      console.error(errorMessage, error);
      return throwError(() => new Error(errorMessage));
    })
  );
}
