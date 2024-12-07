import { inject, Injectable } from '@angular/core';
import { TranslateService } from '@ngx-translate/core';

@Injectable({
  providedIn: 'root',
})
export class MytranslationService {
  private _TranslateService = inject(TranslateService);
  constructor() {
    // logic
    // 1 get Lang From  localStorage
    const savedLang = localStorage.getItem('lang');
    // 2 Set a  DefaultLang Lang
    this._TranslateService.setDefaultLang('en');
    // 3 Use  a   Lang   From  localStorage

    this._TranslateService.use(savedLang!);

    // 4 Direction ==> En => LTR || AR => RTL
    this.ChangeDiretion()
 
  }




  ChangeDiretion ()
  {
    const savedLang = localStorage.getItem('lang');

    if (savedLang === 'en') {
      document.documentElement.dir = 'ltr';
    } else if (savedLang === 'ar') {
      document.documentElement.dir = 'rtl';
    }
  }


  ChangeLang(lang:string){
   localStorage.setItem("lang" , lang);
   this._TranslateService.use(lang);
   this.ChangeDiretion()


  }


}
