import {Pipe} from 'angular2/core';

@Pipe({
    name: 'maxLength'
})
export class MaxLengthPipe {
    transform(val, args) {
        if (val.length > args[0]){
            return val.substring(0, args[0])+'...';
        }else{
            return val;
        }
    }
}
