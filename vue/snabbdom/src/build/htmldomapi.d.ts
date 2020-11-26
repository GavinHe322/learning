export interface DOMAPI {
    createElement: (tagName: any) => HTMLElement;
    createElementNS: (namespaceURI: string, qualifiedName: string) => Element;
    createTextNode: (text: string) => Text;
    createComment: (text: string) => Comment;
    insertBefore: (parentNode: Node, newNode: Node, referenceNode: Node | null) => void;
    removeChild: (node: Node, child: Node) => void;
    appendChild: (node: Node, child: Node) => void;
    parentNode: (node: Node) => Node | null;
    nextSibling: (node: Node) => Node | null;
    tagName: (elm: Element) => string;
}
export declare const htmlDomApi: DOMAPI;
