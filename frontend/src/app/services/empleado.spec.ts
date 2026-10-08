import { TestBed } from '@angular/core/testing';
import { provideHttpClient } from '@angular/common/http';
import { EmpleadoService } from './empleado';

describe('EmpleadoService', () => {
  let service: EmpleadoService;

  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [provideHttpClient()]
    });
    service = TestBed.inject(EmpleadoService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});