import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { AppComponent } from './components/app.component';
import { MatButtonModule, MatCheckboxModule, MatFormFieldModule, MatInputModule, MatGridListModule, MatCardModule, MatSnackBarModule, MatListModule, MatProgressSpinnerModule, MatSliderModule, MatProgressBarModule } from '@angular/material';
import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { AngularWebStorageModule } from 'angular-web-storage';
import { AgmCoreModule } from '@agm/core';

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    HttpClientModule,
    BrowserModule,
    BrowserAnimationsModule,
    MatButtonModule,
    MatCheckboxModule,
    MatFormFieldModule,
    MatInputModule,
    MatGridListModule,
    FormsModule,
    MatCardModule,
    MatSnackBarModule,
    AngularWebStorageModule,
    MatListModule,
    MatProgressSpinnerModule,
    MatSliderModule,
    MatProgressBarModule,
    AgmCoreModule.forRoot({
      apiKey: 'AIzaSyAK8TLZ_tVeKr0XeofGWM8dlqvJ3ecRV6I'
    })
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
