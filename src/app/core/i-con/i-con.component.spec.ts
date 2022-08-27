import { ComponentFixture, TestBed } from '@angular/core/testing';

import { IConComponent } from './i-con.component';

describe('IConComponent', () => {
  let component: IConComponent;
  let fixture: ComponentFixture<IConComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ IConComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(IConComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
