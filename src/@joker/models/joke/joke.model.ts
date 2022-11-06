import { IJoke } from "src/@joker/interfaces/joke/joke.interface";

export class Joke implements IJoke {
    public id!: string;
    public url!: string;
    public value!: string;
    public icon_url!: string;
    public created_at!: string;
    public updated_at!: string;
    public categories!: string[];
    constructor(options: IJoke) {
      if (!options) {
        this.id = '';
        this.url = '';
        this.value = '';
        this.icon_url = '';
        this.created_at = new Date().toISOString();
        this.updated_at = new Date().toISOString();
      }

      const { id, url, value, icon_url } = options;
      this.id = id;
      this.url = url;
      this.value = value;
      this.icon_url = icon_url; 
    }


}