import { Component, OnInit, Input } from '@angular/core';
import { Certificate } from '../../../../shared/models/certificate';

@Component({
  selector: 'certificate-item',
  templateUrl: './certificate-item.component.html',
  styleUrls: ['./certificate-item.component.css']
})
export class CertificateItemComponent implements OnInit {
  @Input() item: Certificate = new Certificate();
  constructor() { }

  ngOnInit() {
  }

}
