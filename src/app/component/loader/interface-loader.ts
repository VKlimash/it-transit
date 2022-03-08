import {Size} from 'ngx-spinner/lib/ngx-spinner.enum';

export interface ILoader {
    size?: Size;
    bdColor?: string;
    color?: string;
    fullScreen?: boolean;
    type?: string;
    zIndex?: number;
    template?: string;
    class?: string;
}
