export declare const array: <T>(arg: {} | T) => arg is T extends readonly any[] ? unknown extends T ? never : readonly any[] : any[];
export declare function primitive(s: any): s is (string | number);
