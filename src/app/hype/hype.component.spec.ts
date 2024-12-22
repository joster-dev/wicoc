import { ComponentFixture, TestBed } from '@angular/core/testing';

import { HypeComponent } from './hype.component';

describe('HypeComponent', () => {
  let component: HypeComponent;
  let fixture: ComponentFixture<HypeComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [HypeComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(HypeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
