import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from './component/header/header.component';
import { FooterComponent } from './component/footer/footer.component';

import { StoreModule } from '@ngrx/store';
import { StoreDevtoolsModule } from '@ngrx/store-devtools';
import { EffectsModule } from '@ngrx/effects';
import { environment } from '../environments/environment';
import { SpinnerComponent } from './component/spinner/spinner.component';
import { Shared_Reducer } from './state/sharedstate/shared.reducer';
import { GlobalInterceptorInterceptor } from './Interceptor/global-interceptor.interceptor';
import { HTTP_INTERCEPTORS } from '@angular/common/http';
import { AsideComponent } from './component/aside/aside.component';
import { SharedModule } from './shared-Module/shared/shared.module';
import { CreateUserEffect } from './state/sharedstate/shared.effect';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    FooterComponent,
    SpinnerComponent,
    AsideComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    StoreModule.forRoot({ shared: Shared_Reducer }),
    StoreDevtoolsModule.instrument({
      maxAge: 25,
      logOnly: environment.production,
    }),
    EffectsModule.forRoot([CreateUserEffect]),
    SharedModule,
  ],
  providers: [
    {
      provide: HTTP_INTERCEPTORS,
      useClass: GlobalInterceptorInterceptor,
      multi: true,
    },
  ],
  bootstrap: [AppComponent],
})
export class AppModule {}
