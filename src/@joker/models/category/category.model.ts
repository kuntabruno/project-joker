import { ICategoryButtonProps } from "src/@joker/interfaces/category-button/category-button-props.interface";

export class Category implements ICategoryButtonProps {
    public id!: string;
    public name!: string;
    public url!: string;
    constructor(options: ICategoryButtonProps) {
       if (!options) {
        this.id = 'unset';
        this.name = 'unset';
        this.url = 'unset';
       }

       const { id, name, url } = options;
       this.id = id;
       this.name = name;
       this.url = url || `/jokes/${name}`;
    }
}