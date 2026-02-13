declare module 'critters' {
  interface CrittersOptions {
    path?: string;
    external?: boolean;
    preload?: 'swap' | 'preload' | 'prefetch';
    fonts?: boolean;
  }

  class Critters {
    constructor(options?: CrittersOptions);
    process(html: string): Promise<string>;
  }

  export default Critters;
}
