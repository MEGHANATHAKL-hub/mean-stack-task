import { FormControl } from '@angular/forms';

export function requiredFileType( types: Array<string> ) {
  return function ( control: FormControl ) {
    const file = control.value;
    let isValid = false;
    if ( file ) {
      const temp = file.name.split('.');
      const extension = temp[temp.length - 1].toLowerCase();
      types.forEach(type => {
        if ( type.toLowerCase() == extension.toLowerCase() ) {
          isValid = true;
        }
      });

      if (!isValid) {
        return {
          requiredFileType: true
        }
      }
      return null;
    }

    return null;
  };
}
