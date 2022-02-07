import { Component, ElementRef, ViewChild } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent {
  @ViewChild('input')
  input: ElementRef<HTMLInputElement> | undefined;
  title = 'kur-cevirme';
  private translating: string = 'TRY';
  private translated: string = 'USD';
  result = '';
  private currency: any = {
    TRY: {
      USD: 10,
      EUR: 20,
      GBP: 30,
    },
    USD: {
      TRY: 0.1,
      EUR: 1,
      GBP: 10,
    },
    EUR: {
      TRY: 0.05,
      USD: 1,
      GBP: 50,
    },
    GBP: {
      TRY: 0.333,
      USD: 0.1,
      EUR: 0.02,
    },
  };

  onChange(event: any, isTranslating: Boolean): void {
    if (isTranslating) this.translating = event.target.value;
    else this.translated = event.target.value;
    this.updateChanges();
  }

  updateChanges() {
    const value = parseInt(this.input!.nativeElement.value);
    if (this.translating == this.translated) {
      this.result = value.toString();
    } else {
      this.result = (
        this.currency[this.translating][this.translated] * value
      ).toString();
    }
  }
}
