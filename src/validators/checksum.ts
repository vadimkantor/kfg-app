import {FormGroup} from '@angular/forms';


export class ChecksumValidator {


  static isValid(school: string, classNo: string, checksum: string) {
    return (group: FormGroup): { [key: string]: any } => {
      let schoolControl = group.controls[school];
      let classControl = group.controls[classNo];
      let checksumControl = group.controls[checksum];
      if (this.getChecksum(schoolControl.value, classControl.value) == checksumControl.value) {
        return null;
      }else{
        return {
          invalidChecksum: true
        };
      }
    }
  }

  static getChecksum(school: string, classNo: string): number {
    let sum: number = 0;
    let aSchool = school.split('');
    let aclassNo= classNo.split('');
    aSchool.forEach(a => {
      sum = sum + a.toUpperCase().charCodeAt(0);
    });
    aclassNo.forEach(a => {
      sum = sum + a.toUpperCase().charCodeAt(0);
    });
    return sum;
  }
}
