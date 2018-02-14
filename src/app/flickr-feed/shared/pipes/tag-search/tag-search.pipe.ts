import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
    name: 'tagSearchPipe'
})
export class TagSearchPipe implements PipeTransform {

    transform(value, args?): Array<any> {
        if (args) { args = args.toLowerCase(); }
        const searchText = new RegExp(args, 'ig');
        if (value) {
            return value.filter(post => {
                if (post.tags) { return post.tags.toLowerCase().search(searchText) !== -1; }
            });
        }
    }
}
